import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type QuotePayload = {
  fullName?: string;
  company?: string;
  phone?: string;
  email?: string;
  location?: string;
  contactMethod?: string;
  services?: string[];
  serviceSpec?: string;
  business?: string;
  hasSite?: string;
  websiteUrl?: string;
  features?: string[];
  pages?: string;
  budget?: string;
  timeline?: string;
  stage?: string;
  notes?: string;
  boosters?: string[];
  consent?: boolean;
};

function row(label: string, value?: string | string[] | boolean) {
  const v =
    Array.isArray(value)
      ? value.length ? value.join(", ") : "-"
      : typeof value === "boolean"
        ? value ? "Yes" : "No"
        : value && value.trim() ? value : "-";
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
  let payload: QuotePayload;
  try {
    payload = (await req.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!payload.consent) {
    return NextResponse.json({ error: "Consent is required." }, { status: 400 });
  }
  if (!payload.fullName || !payload.email) {
    return NextResponse.json({ error: "Full name and email are required." }, { status: 400 });
  }

  const {
    RESEND_API_KEY,
    RESEND_FROM = "lead@knockittechnologies.co.uk",
    QUOTE_TO = "official@knockittechnologies.co.uk",
    QUOTE_CC = "rakhshana@knockittechnologies.co.uk",
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
      <h2 style="margin:0 0 16px;color:#2f225c">New Project Quote Request</h2>
      <p style="color:#555;margin:0 0 24px">A new project quote has been submitted via the Knockit website.</p>

      <h3 style="margin:24px 0 8px;color:#2f225c">Contact</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Full name", payload.fullName)}
        ${row("Company", payload.company)}
        ${row("Phone", payload.phone)}
        ${row("Email", payload.email)}
        ${row("Location", payload.location)}
        ${row("Preferred Contact Method", payload.contactMethod)}
      </table>

      <h3 style="margin:24px 0 8px;color:#2f225c">Service</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Services", payload.services)}
        ${row("Specify Service", payload.serviceSpec)}
      </table>

      <h3 style="margin:24px 0 8px;color:#2f225c">Project Details</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Business / Service", payload.business)}
        ${row("Existing Website / App", payload.hasSite)}
        ${row("Website URL", payload.websiteUrl)}
        ${row("Features Needed", payload.features)}
        ${row("Number of Pages", payload.pages)}
      </table>

      <h3 style="margin:24px 0 8px;color:#2f225c">Logistics</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Budget Range", payload.budget)}
        ${row("Timeline", payload.timeline)}
      </table>

      <h3 style="margin:24px 0 8px;color:#2f225c">Final Touches</h3>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${row("Business Stage", payload.stage)}
        ${row("Additional Notes", payload.notes)}
        ${row("Conversion Boosters", payload.boosters)}
        ${row("Consent", payload.consent)}
      </table>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: RESEND_FROM,
      to: [QUOTE_TO, QUOTE_CC],
      replyTo: payload.email,
      subject: `New Project Quote - ${payload.fullName}`,
      html,
    });

    if (error) {
      console.error("[quote] resend send failed", error);
      return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] sendMail failed", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 502 });
  }
}
