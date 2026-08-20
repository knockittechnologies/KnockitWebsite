"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { QuoteModal } from "@/components/ui/QuoteModal";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section id="contact" className="relative py-16 md:py-20 overflow-hidden bg-[#0f0823]">
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8 md:gap-10"
          >
            <h2
              className="font-display font-semibold text-[28px] sm:text-[36px] md:text-[45px] leading-[1.1] tracking-[-0.03em] bg-clip-text text-transparent max-w-lg"
              style={{
                backgroundImage:
                  "linear-gradient(176deg, #886EE0 0%, #AA74E2 100%)",
              }}
            >
              Let&apos;s talk about your next project and how we can bring it to
              life.
            </h2>

            <div>
              <h3 className="font-display font-semibold text-2xl md:text-4xl text-white">
                Contact Us
              </h3>
              <p className="mt-2 font-sans text-sm text-white/60">
                Let&apos;s Build Something Great Together.
              </p>

              <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 gap-x-10 max-w-lg">
                <ContactItem label="Office" value="Birmingham, UK" />
                <ContactItem label="Phone" value="+44 7491014905" href="tel:+447491014905" />
                <ContactItem
                  label="Email"
                  value="official@knockittechnologies.com"
                  href="mailto:official@knockittechnologies.com"
                />
                <ContactItem
                  label="WhatsApp"
                  value="+44 7491014905"
                  href="https://wa.me/447491014905"
                />
              </div>

              <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 md:gap-6">
                <button
                  onClick={() => setQuoteOpen(true)}
                  className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-display text-sm font-semibold text-black hover:bg-white/90 transition"
                >
                  Request a Quote
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </button>
                <button className="font-display text-sm font-medium text-white hover:text-white/80 transition">
                  Schedule a Call
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right: form card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[20px] md:rounded-[24px] bg-white p-6 sm:p-8 lg:p-10"
          >
            <h3
              className="font-display font-semibold text-[28px] md:text-[40px] leading-none tracking-[-0.03em] bg-clip-text text-transparent text-center"
              style={{
                backgroundImage:
                  "linear-gradient(176deg, #2f225c 0%, #aa74e2 100%)",
              }}
            >
              Get in Touch With Us
            </h3>
            <p className="mt-3 font-sans font-medium text-[13px] md:text-[14px] leading-[28px] md:leading-[32px] tracking-[-0.02em] text-black">
              Have a project in mind? Tell us your requirements, and our team
              will get back to you with a tailored solution.
            </p>

          <form
              onSubmit={async (e) => {
                e.preventDefault();
                setError("");
                setSending(true);
                const form = e.currentTarget;
                const data = new FormData(form);
                const payload = {
                  fullName: data.get("fullName"),
                  email: data.get("email"),
                  phone: data.get("phone"),
                  company: data.get("company"),
                  service: data.get("service"),
                  message: data.get("message"),
                  budget: data.get("budget"),
                  method,
                };
                try {
                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                  });
                  const result = await res.json();
                  if (!res.ok) {
                    throw new Error(result.error || "Something went wrong.");
                  }
                  setSent(true);
                  form.reset();
                  setTimeout(() => setSent(false), 3000);
                } catch (err) {
                  setError(
                    err instanceof Error ? err.message : "Failed to send. Please try again."
                  );
                } finally {
                  setSending(false);
                }
              }}
        
            className="mt-6 md:mt-7 space-y-4 md:space-y-5"
            >
              <Input name="fullName" label="Full Name" required placeholder="Your full name" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <Input
                  name="email"
                  label="Email Address"
                  type="email"
                  required
                  placeholder="Email"
                />
                <Input
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  placeholder="Mobile no"
                />
              </div>

              <Input
                name="company"
                label="Company / Organization"
                placeholder="Company details"
              />

              <Select
                name="service"
                label="Select Service"
                required
                options={[
                  "Website Development",
                  "Mobile App Development",
                  "AI Integration",
                  "Custom Delivery Systems",
                  "UI/UX & Branding",
                  "Other",
                ]}
              />

              <Textarea
                name="message"
                label="Project Details / Message"
                required
                placeholder="enter your project details"
              />

              <Select
                name="budget"
                label="Budget Range"
                required
                options={[
                  "Under £5,000",
                  "£5,000 – £10,000",
                  "£10,000 – £25,000",
                  "£25,000 – £50,000",
                  "£50,000+",
                ]}
              />

              <div>
                <label className="block font-sans text-xs font-semibold text-gray-700 mb-2">
                  Preferred Contact Method <span className="text-brand">*</span>
                </label>
                <div className="flex items-center gap-6">
                  {(["email", "phone"] as const).map((opt) => (
                    <label
                      key={opt}
                      className="inline-flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="method"
                        checked={method === opt}
                        onChange={() => setMethod(opt)}
                        className="h-4 w-4 accent-brand"
                      />
                      <span className="font-sans text-sm text-gray-700 capitalize">
                        {opt}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

          {error && (
                <p className="text-sm font-sans text-red-600">{error}</p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="group mt-2 inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-display text-sm font-semibold text-white hover:bg-brand-mid transition disabled:opacity-60"
              >
                {sending ? "Sending..." : sent ? "Message Sent ✓" : "Submit Enquiry"}
                {!sent && !sending && (
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </section>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <div className="font-display text-sm font-medium text-white/60">
        {label}
      </div>
      {href ? (
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className="mt-2 inline-block font-sans text-[14px] md:text-[15px] font-medium text-white hover:text-white/80 transition break-all"
        >
          {value}
        </a>
      ) : (
        <div className="mt-2 font-sans text-[14px] md:text-[15px] font-medium text-white">
          {value}
        </div>
      )}
    </div>
  );
}

function Input({
  name,
  label,
  type = "text",
  required,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-sans text-xs font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-sm text-black placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10 transition"
      />
    </label>
  );
}

function Textarea({
  name,
  label,
  required,
  placeholder,
}: {
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block font-sans text-xs font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-sm text-black placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10 transition resize-none"
      />
    </label>
  );
}

function Select({
  name,
  label,
  required,
  options,
}: {
  name: string;
  label: string;
  required?: boolean;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="block font-sans text-xs font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-brand">*</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 font-sans text-sm text-black focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/10 transition appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22 stroke=%22gray%22 stroke-width=%222%22><path d=%22M4 6l4 4 4-4%22/></svg>')] bg-no-repeat bg-[right_1rem_center]"
      >
        <option value="" disabled>
          {name === "service" ? "select service" : "select budget range"}
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
