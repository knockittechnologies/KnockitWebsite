import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  email?: string;
  phone?: string;
  company?: string;
  service?: string;
  message?: string;
  budget?: string;
  method?: string;
};

function row(label: string, value?: string) {
  const v = value && value.trim() ? value : "—";
  return `<tr><td style="padding:8px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:600;width:220px;color:#111">${label}</td><td style="padding:8px 12px;border:1px solid #e5e7eb;color:#111">${escapeHtml(v)}</td></tr>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!payload.fullName || !payload.email || !payload.message) {
    return NextResponse.json(
      { error: "Full name, email, and message are required." },
      { status: 400 },
    );
  }
const debugKeys = Object.keys(process.env).filter(k => k.includes("RESEND") || k.includes("CONTACT"));
  return NextResponse.json({ debug: true, foundKeys: debugKeys, hasResendKey: !!process.env.RESEND_API_KEY });

  const {
    RESEND_API_KEY,
    RESEND_FROM = "lead@knockittechnologies.co.uk",
    CONTACT_TO = "official@knockittechnologies.co.uk",
    CONTACT_CC = "rakhshana@knockittechnologies.co.uk",
  } = process.env;

  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured. Set RESEND_API_KEY." },
      { status: 500 },
    );
  }

  const resend = new Resend(RESEND_API_KEY);

  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;max-width:680px;margin:0 auto;color:#111">
      <h2 style="margin:0 0 16px;color:#2f225c">New Contact Form Enquiry</h2>
      <p style="color:#555;margin:0 0 24px">A new enquiry has been submitted via the Knockit website contact form.</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Full name", payload.fullName)}
        ${row("Email", payload.email)}
        ${row("Phone", payload.phone)}
        ${row("Company", payload.company)}
        ${row("Service", payload.service)}
        ${row("Budget Range", payload.budget)}
        ${row("Preferred Contact Method", payload.method)}
        ${row("Message", payload.message)}
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [CONTACT_TO, CONTACT_CC],
      replyTo: payload.email,
      subject: `New Contact Enquiry – ${payload.fullName}`,
      html,
    });

    if (error) {
      console.error("[contact] resend send failed", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] sendMail failed", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 502 },
    );
  }
}