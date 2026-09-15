"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-10 px-8">
      <div
        className="max-w-7xl mx-auto rounded-3xl overflow-hidden grid md:grid-cols-2"
        style={{ background: "linear-gradient(160deg, #3d0a6b, #1c0136)" }}
      >
        <div className="p-10 md:p-14 text-white flex flex-col justify-center">
          <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
            Let&apos;s talk.
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight mb-10">
            Let&apos;s talk about your next project and how we can bring it
            to life.
          </h2>

          <h3 className="text-xl font-display font-semibold mb-1">
            Contact Us
          </h3>
          <p className="text-sm text-white/60 mb-8">
            Let&apos;s Build Something Great Together.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div>
              <div className="text-xs text-white/50 mb-1">Office</div>
              <div className="text-sm font-medium">Birmingham, UK</div>
            </div>
            <div>
              <div className="text-xs text-white/50 mb-1">Phone</div>
              <div className="text-sm font-medium">+44 7491014905</div>
            </div>
            <div>
              <div className="text-xs text-white/50 mb-1">Email</div>
              <div className="text-sm font-medium">
                official@knockittechnologies.co.uk
              </div>
            </div>
            <div>
              <div className="text-xs text-white/50 mb-1">WhatsApp</div>
              <div className="text-sm font-medium">+44 7491014905</div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#quote"
              className="inline-flex items-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-[#2f0a5c]"
            >
              Request a Quote
            </a>
            <a
              href="/about"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all"
            >
              Read More <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14">
          <p className="text-sm text-gray-500 mb-6">
            Have a project in mind? Tell us your requirements, and our team
            will get back to you with a tailored solution.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-medium text-gray-700">
                Full Name*
              </label>
              <input
                name="fullName"
                required
                placeholder="Your full name"
                className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Email Address*
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c]"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  name="phone"
                  placeholder="Mobile no"
                  className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c]"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700">
                Company / Organization
              </label>
              <input
                name="company"
                placeholder="Company details"
                className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c]"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700">
                Select Service*
              </label>
              <select
                name="service"
                required
                defaultValue=""
                className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c] text-gray-700"
              >
                <option value="" disabled>
                  Select service
                </option>
                <option>Website Development</option>
                <option>Mobile App Development</option>
                <option>CRM Development</option>
                <option>Custom Delivery Systems</option>
                <option>AI Integration</option>
                <option>UI/UX & Branding</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700">
                Project Details / Message*
              </label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Enter your project details"
                className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c] resize-none"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700">
                Budget Range*
              </label>
              <select
                name="budget"
                required
                defaultValue=""
                className="mt-1.5 w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#5b1a8c] text-gray-700"
              >
                <option value="" disabled>
                  Select budget range
                </option>
                <option>Under &pound;5,000</option>
                <option>&pound;5,000 - &pound;10,000</option>
                <option>&pound;10,000 - &pound;25,000</option>
                <option>&pound;25,000 - &pound;50,000</option>
                <option>&pound;50,000+</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-700 block mb-2">
                Preferred Contact Method*
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name="method" value="Email" required />
                  Email
                </label>
                <label className="flex items-center gap-2 text-sm text-gray-700">
                  <input type="radio" name="method" value="Phone" />
                  Phone
                </label>
              </div>
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl px-6 py-4 text-sm font-semibold text-white disabled:opacity-60"
              style={{ backgroundColor: "#2f0a5c" }}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
            {status === "ok" && (
              <p className="text-sm text-green-600">
                Thanks! We&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
