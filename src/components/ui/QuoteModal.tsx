"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  X,
  Globe,
  ShoppingCart,
  Smartphone,
  Code2,
  Palette,
  Megaphone,
  Plus,
} from "lucide-react";

type Step = { num: number; title: string; subtitle: string };

const steps: Step[] = [
  { num: 1, title: "Contact", subtitle: "Basic Contact Details" },
  { num: 2, title: "Service", subtitle: "Project Type" },
  { num: 3, title: "Details", subtitle: "Core Requirements" },
  { num: 4, title: "Logistics", subtitle: "Budget & Timeline" },
  { num: 5, title: "Finish", subtitle: "Final Steps" },
];

type ContactMethod = "Call" | "WhatsApp" | "Email";
type HasSite = "Yes" | "No" | null;
type Budget =
  | "Below £500"
  | "£500 – £1,000"
  | "£1,000 – £5,000"
  | "£5,000 – £10,000"
  | "£10,000+"
  | null;
type Timeline = "ASAP Urgent" | "Within 1 Month" | "1 – 3 Month" | "Flexible" | null;
type Stage =
  | "Just idea stage"
  | "Startup"
  | "Running business"
  | "Scaling / upgrading system"
  | null;
type Status = "idle" | "sending" | "success" | "error";

const services = [
  { icon: Globe, label: "Website\nDevelopement" },
  { icon: ShoppingCart, label: "E-Commerce\nWebsite" },
  { icon: Smartphone, label: "Mobile App\nDevelopement" },
  { icon: Code2, label: "CRM / Custom\nSoftware" },
  { icon: Palette, label: "UI / UX\nDesigning" },
  { icon: Megaphone, label: "Digital\nMarketing" },
  { icon: Plus, label: "Others" },
] as const;

const featureOptions = [
  "Online Payments",
  "Delivery / Tracking",
  "Booking System",
  "Multi Language",
  "User Login",
  "Other",
  "Admin Panel",
];

const budgets: Budget[] = [
  "Below £500",
  "£500 – £1,000",
  "£1,000 – £5,000",
  "£5,000 – £10,000",
  "£10,000+",
];

const timelines: Timeline[] = [
  "ASAP Urgent",
  "Within 1 Month",
  "1 – 3 Month",
  "Flexible",
];

const stages: Stage[] = [
  "Just idea stage",
  "Startup",
  "Running business",
  "Scaling / upgrading system",
];

export function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState(1);

  // Step 1
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [method, setMethod] = useState<ContactMethod>("Call");

  // Step 2
  const [selectedServices, setSelectedServices] = useState<Set<string>>(new Set());
  const [serviceSpec, setServiceSpec] = useState("");

  // Step 3
  const [business, setBusiness] = useState("");
  const [hasSite, setHasSite] = useState<HasSite>(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [features, setFeatures] = useState<Set<string>>(new Set());
  const [pages, setPages] = useState<string | null>(null);

  // Step 4
  const [budget, setBudget] = useState<Budget>(null);
  const [timeline, setTimeline] = useState<Timeline>(null);

  // Step 5
  const [stage, setStage] = useState<Stage>(null);
  const [notes, setNotes] = useState("");
  const [boosters, setBoosters] = useState<Set<string>>(new Set());
  const [consent, setConsent] = useState(false);

  // Submit state
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const toggle = <T,>(set: Set<T>, key: T): Set<T> => {
    const next = new Set(set);
    if (next.has(key)) next.delete(key);
    else next.add(key);
    return next;
  };

  const resetAll = () => {
    setActive(1);
    setFullName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setLocation("");
    setMethod("Call");
    setSelectedServices(new Set());
    setServiceSpec("");
    setBusiness("");
    setHasSite(null);
    setWebsiteUrl("");
    setFeatures(new Set());
    setPages(null);
    setBudget(null);
    setTimeline(null);
    setStage(null);
    setNotes("");
    setBoosters(new Set());
    setConsent(false);
    setStatus("idle");
    setErrorMsg("");
  };

  const submit = async () => {
    if (!consent) {
      setStatus("error");
      setErrorMsg("Please agree to be contacted before submitting.");
      return;
    }
    if (!fullName.trim() || !email.trim()) {
      setStatus("error");
      setErrorMsg("Full name and email are required.");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          company,
          phone,
          email,
          location,
          contactMethod: method,
          services: Array.from(selectedServices),
          serviceSpec,
          business,
          hasSite: hasSite ?? undefined,
          websiteUrl: hasSite === "Yes" ? websiteUrl : "",
          features: Array.from(features),
          pages: pages ?? undefined,
          budget: budget ?? undefined,
          timeline: timeline ?? undefined,
          stage: stage ?? undefined,
          notes,
          boosters: Array.from(boosters),
          consent,
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Failed to send. Please try again.");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(resetAll, 300);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[1100px] max-h-[90vh] overflow-y-auto rounded-[20px] bg-white p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label="Close"
          onClick={handleClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition"
        >
          <X size={18} />
        </button>

        <div className="mb-8 max-w-md">
          <h2 className="font-display font-semibold text-[28px] leading-tight tracking-[-0.02em] text-black">
            Get Your Project Quote
          </h2>
          <p className="mt-2 font-sans text-[14px] leading-[22px] text-gray-600">
            Fill out the details to get an accurate estimate.
          </p>
        </div>

        {status === "success" ? (
          <SuccessPanel onClose={handleClose} />
        ) : (
          <div className="grid md:grid-cols-[260px_1fr] gap-8">
            <Sidebar active={active} />

            <section>
              {active === 1 && (
                <Step1
                  fullName={fullName}
                  setFullName={setFullName}
                  company={company}
                  setCompany={setCompany}
                  phone={phone}
                  setPhone={setPhone}
                  email={email}
                  setEmail={setEmail}
                  location={location}
                  setLocation={setLocation}
                  method={method}
                  setMethod={setMethod}
                  onNext={() => setActive(2)}
                />
              )}
              {active === 2 && (
                <Step2
                  selected={selectedServices}
                  setSelected={setSelectedServices}
                  spec={serviceSpec}
                  setSpec={setServiceSpec}
                  onBack={() => setActive(1)}
                  onNext={() => setActive(3)}
                />
              )}
              {active === 3 && (
                <Step3
                  business={business}
                  setBusiness={setBusiness}
                  hasSite={hasSite}
                  setHasSite={setHasSite}
                  websiteUrl={websiteUrl}
                  setWebsiteUrl={setWebsiteUrl}
                  features={features}
                  setFeatures={(k) => setFeatures(toggle(features, k))}
                  pages={pages}
                  setPages={setPages}
                  onBack={() => setActive(2)}
                  onNext={() => setActive(4)}
                />
              )}
              {active === 4 && (
                <Step4
                  budget={budget}
                  setBudget={setBudget}
                  timeline={timeline}
                  setTimeline={setTimeline}
                  onBack={() => setActive(3)}
                  onNext={() => setActive(5)}
                />
              )}
              {active === 5 && (
                <Step5
                  stage={stage}
                  setStage={setStage}
                  notes={notes}
                  setNotes={setNotes}
                  boosters={boosters}
                  toggleBooster={(k) => setBoosters(toggle(boosters, k))}
                  consent={consent}
                  setConsent={setConsent}
                  onBack={() => setActive(4)}
                  onSubmit={submit}
                  sending={status === "sending"}
                  errorMsg={status === "error" ? errorMsg : ""}
                />
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Success ─── */

function SuccessPanel({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex flex-col items-center text-center py-10">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700 text-3xl">
        ✓
      </div>
      <h3 className="mt-5 font-display font-semibold text-[22px] text-black">
        Request sent!
      </h3>
      <p className="mt-2 font-sans text-[14px] text-gray-600 max-w-md">
        Thanks — we&apos;ve received your details and will reply within one business day.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#2f225c] px-6 py-3 font-display font-semibold text-[14px] text-white hover:bg-[#3a2a73] transition"
      >
        Close
      </button>
    </div>
  );
}

/* ─── Sidebar ─── */

function Sidebar({ active }: { active: number }) {
  return (
    <aside className="rounded-[16px] bg-[#f4f2fb] p-7">
      <ol className="flex flex-col gap-2">
        {steps.map((s, i) => {
          const isActive = active === s.num;
          const isDone = active > s.num;
          const filled = isActive || isDone;
          return (
            <li key={s.num} className="flex flex-col">
              <div className="flex items-center gap-[10px]">
                <div
                  className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-md font-display font-semibold text-sm border-[0.5px] ${
                    filled
                      ? "text-white border-[#D2CEFF]"
                      : "text-gray-400 bg-white border-gray-200"
                  }`}
                  style={
                    filled
                      ? {
                          backgroundImage:
                            "linear-gradient(180deg, #2B2058 0%, #5D45BE 100%)",
                        }
                      : undefined
                  }
                >
                  {s.num}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-semibold text-[16px] leading-tight text-black">
                    {s.title}
                  </span>
                  <span className="font-sans text-[12px] text-gray-500">
                    {s.subtitle}
                  </span>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="ml-[17px] h-8 w-px bg-[#D2CEFF]" />
              )}
            </li>
          );
        })}
      </ol>
    </aside>
  );
}

/* ─── Shared UI ─── */

function StepHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h3 className="font-display font-semibold text-[22px] leading-tight tracking-[-0.02em] text-black">
        {title}
      </h3>
      <p className="mt-2 font-sans text-[14px] leading-[22px] text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}

function Nav({
  onBack,
  onNext,
  nextLabel = "Next Step",
  disabled = false,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextLabel?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex justify-between items-center mt-2">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 font-display font-semibold text-[14px] text-black hover:text-[#2f225c] transition"
        >
          <ArrowRight size={16} className="rotate-180" />
          Back
        </button>
      ) : (
        <span />
      )}
      <button
        type="button"
        onClick={onNext}
        disabled={disabled}
        className="group inline-flex items-center gap-2 rounded-lg bg-[#2f225c] px-6 py-3 font-display font-semibold text-[14px] text-white hover:bg-[#3a2a73] transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {nextLabel}
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  placeholder,
  value,
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="block font-sans text-[13px] font-medium text-black mb-2">
        {label}
        {required && <span className="text-[#aa74e2]">*</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-black placeholder:text-gray-400 focus:border-[#2f225c] focus:outline-none focus:ring-2 focus:ring-[#2f225c]/10 transition"
      />
    </label>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-lg px-5 py-2.5 font-sans text-[14px] font-medium transition ${
        active
          ? "bg-[#2f225c] text-white"
          : "bg-white text-black border border-gray-200 hover:border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label className="inline-flex items-center gap-2 cursor-pointer font-sans text-[14px] text-black">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 accent-[#2f225c]"
      />
      {label}
    </label>
  );
}

/* ─── Step 1: Contact ─── */

function Step1({
  fullName,
  setFullName,
  company,
  setCompany,
  phone,
  setPhone,
  email,
  setEmail,
  location,
  setLocation,
  method,
  setMethod,
  onNext,
}: {
  fullName: string;
  setFullName: (v: string) => void;
  company: string;
  setCompany: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  location: string;
  setLocation: (v: string) => void;
  method: ContactMethod;
  setMethod: (m: ContactMethod) => void;
  onNext: () => void;
}) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onNext();
      }}
      className="flex flex-col gap-6"
    >
      <StepHeader
        title="Tell us about you"
        subtitle="We'll use these details to contact you about your quote."
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="fullName" label="Full name" required placeholder="Exp. John Carter" value={fullName} onChange={setFullName} />
        <Field name="company" label="Company" placeholder="Exp. Company" value={company} onChange={setCompany} />
        <Field name="phone" label="Phone number" type="tel" required placeholder="(123) 000-0000" value={phone} onChange={setPhone} />
        <Field name="email" label="Email" type="email" required placeholder="Enter your email" value={email} onChange={setEmail} />
      </div>

      <Field name="location" label="Location (City / Postcode)" required placeholder="Exp. San Francisco, CA" value={location} onChange={setLocation} />

      <div>
        <label className="block font-sans text-[13px] font-medium text-black mb-3">
          Preferred Contact Method
        </label>
        <div className="flex flex-wrap gap-3">
          {(["Call", "WhatsApp", "Email"] as const).map((opt) => (
            <Pill key={opt} active={method === opt} onClick={() => setMethod(opt)}>
              {opt}
            </Pill>
          ))}
        </div>
      </div>

      <Nav onNext={onNext} />
    </form>
  );
}

/* ─── Step 2: Service ─── */

function Step2({
  selected,
  setSelected,
  spec,
  setSpec,
  onBack,
  onNext,
}: {
  selected: Set<string>;
  setSelected: (s: Set<string>) => void;
  spec: string;
  setSpec: (v: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  const toggle = (label: string) => {
    const next = new Set(selected);
    if (next.has(label)) next.delete(label);
    else next.add(label);
    setSelected(next);
  };

  return (
    <div className="flex flex-col gap-6">
      <StepHeader
        title="What do you need?"
        subtitle="Pick the category that best fits your vision."
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((s) => {
          const isActive = selected.has(s.label);
          return (
            <button
              key={s.label}
              type="button"
              onClick={() => toggle(s.label)}
              className={`flex items-center gap-4 rounded-xl px-5 py-4 text-left transition ${
                isActive
                  ? "bg-[#2f225c] text-white"
                  : "bg-white border border-gray-200 text-black hover:border-gray-300"
              }`}
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                  isActive ? "bg-white/15" : "bg-gray-100"
                }`}
              >
                <s.icon size={20} strokeWidth={1.75} />
              </span>
              <span className="font-display font-semibold text-[14px] leading-tight whitespace-pre-line">
                {s.label}
              </span>
            </button>
          );
        })}
      </div>

      <label className="block">
        <span className="block font-sans text-[13px] font-medium text-black mb-2">
          Specify Service
        </span>
        <textarea
          rows={3}
          placeholder="Describe your needs"
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-black placeholder:text-gray-400 focus:border-[#2f225c] focus:outline-none focus:ring-2 focus:ring-[#2f225c]/10 transition resize-none"
        />
      </label>

      <Nav onBack={onBack} onNext={onNext} />
    </div>
  );
}

/* ─── Step 3: Details ─── */

function Step3({
  business,
  setBusiness,
  hasSite,
  setHasSite,
  websiteUrl,
  setWebsiteUrl,
  features,
  setFeatures,
  pages,
  setPages,
  onBack,
  onNext,
}: {
  business: string;
  setBusiness: (v: string) => void;
  hasSite: HasSite;
  setHasSite: (v: HasSite) => void;
  websiteUrl: string;
  setWebsiteUrl: (v: string) => void;
  features: Set<string>;
  setFeatures: (k: string) => void;
  pages: string | null;
  setPages: (p: string) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeader
        title="Project Details"
        subtitle="Help us understand the core of your business."
      />

      <label className="block">
        <span className="block font-sans text-[13px] font-medium text-black mb-2">
          What is your business/service?
        </span>
        <textarea
          rows={3}
          placeholder="Briefly explain what you do ..."
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-black placeholder:text-gray-400 focus:border-[#2f225c] focus:outline-none focus:ring-2 focus:ring-[#2f225c]/10 transition resize-none"
        />
      </label>

      <div>
        <label className="block font-sans text-[13px] font-medium text-black mb-3">
          Do you already have a website/app?
        </label>
        <div className="flex gap-3 mb-4">
          {(["Yes", "No"] as const).map((v) => (
            <Pill key={v} active={hasSite === v} onClick={() => setHasSite(v)}>
              {v}
            </Pill>
          ))}
        </div>
        {hasSite === "Yes" && (
          <input
            type="url"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-black placeholder:text-gray-400 focus:border-[#2f225c] focus:outline-none focus:ring-2 focus:ring-[#2f225c]/10 transition"
          />
        )}
      </div>

      <div>
        <label className="block font-sans text-[13px] font-medium text-black mb-3">
          What features do you need? (Select all that apply)
        </label>
        <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
          {featureOptions.map((opt) => (
            <Checkbox
              key={opt}
              checked={features.has(opt)}
              onChange={() => setFeatures(opt)}
              label={opt}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block font-sans text-[13px] font-medium text-black mb-3">
          Number of pages (for website)
        </label>
        <div className="flex flex-wrap gap-6">
          {["1-5", "5 - 10", "10+"].map((p) => (
            <label
              key={p}
              className="inline-flex items-center gap-2 cursor-pointer font-sans text-[14px] text-black"
            >
              <input
                type="radio"
                name="pages"
                checked={pages === p}
                onChange={() => setPages(p)}
                className="h-4 w-4 accent-[#2f225c]"
              />
              {p}
            </label>
          ))}
        </div>
      </div>

      <Nav onBack={onBack} onNext={onNext} />
    </div>
  );
}

/* ─── Step 4: Logistics ─── */

function Step4({
  budget,
  setBudget,
  timeline,
  setTimeline,
  onBack,
  onNext,
}: {
  budget: Budget;
  setBudget: (b: Budget) => void;
  timeline: Timeline;
  setTimeline: (t: Timeline) => void;
  onBack: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeader
        title="Budget & Timeline"
        subtitle="Helping us recommend the best solution for you."
      />

      <div>
        <h4 className="font-display font-semibold text-[16px] text-black mb-2">
          Budget Range
        </h4>
        <p className="font-sans text-[13px] text-gray-600 mb-4 italic">
          &ldquo;Select your estimated budget so we can recommend the best solution&rdquo;
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`rounded-lg px-5 py-4 font-display font-semibold text-[14px] text-center transition ${
                budget === b
                  ? "bg-[#2f225c] text-white"
                  : "bg-white text-black border border-gray-200 hover:border-gray-300"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold text-[16px] text-black mb-3">
          Timeline & Urgency
        </h4>
        <div className="flex flex-wrap gap-3">
          {timelines.map((t) => (
            <Pill key={t} active={timeline === t} onClick={() => setTimeline(t)}>
              {t}
            </Pill>
          ))}
        </div>
      </div>

      <Nav onBack={onBack} onNext={onNext} />
    </div>
  );
}

/* ─── Step 5: Finish ─── */

function Step5({
  stage,
  setStage,
  notes,
  setNotes,
  boosters,
  toggleBooster,
  consent,
  setConsent,
  onBack,
  onSubmit,
  sending,
  errorMsg,
}: {
  stage: Stage;
  setStage: (s: Stage) => void;
  notes: string;
  setNotes: (v: string) => void;
  boosters: Set<string>;
  toggleBooster: (k: string) => void;
  consent: boolean;
  setConsent: (v: boolean) => void;
  onBack: () => void;
  onSubmit: () => void;
  sending: boolean;
  errorMsg: string;
}) {
  return (
    <div className="flex flex-col gap-6">
      <StepHeader
        title="Final Touches"
        subtitle="Just a bit more info to seal the deal."
      />

      <div>
        <h4 className="font-display font-semibold text-[16px] text-black mb-3">
          Business Stage
        </h4>
        <div className="flex flex-wrap gap-3">
          {stages.map((s) => (
            <Pill key={s} active={stage === s} onClick={() => setStage(s)}>
              {s}
            </Pill>
          ))}
        </div>
      </div>

      <label className="block">
        <span className="block font-display font-semibold text-[16px] text-black mb-3">
          Additional Notes
        </span>
        <textarea
          rows={3}
          placeholder="Anything else you'd like to add?"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 font-sans text-[14px] text-black placeholder:text-gray-400 focus:border-[#2f225c] focus:outline-none focus:ring-2 focus:ring-[#2f225c]/10 transition resize-none"
        />
      </label>

      <div className="rounded-xl bg-[#f4f2fb] p-5">
        <h4 className="font-display font-semibold text-[16px] text-black mb-3">
          Conversion Boosters
        </h4>
        <div className="flex flex-col gap-3">
          <Checkbox
            checked={boosters.has("free-call")}
            onChange={() => toggleBooster("free-call")}
            label="I'd like a FREE consultation call"
          />
          <Checkbox
            checked={boosters.has("rough-estimate")}
            onChange={() => toggleBooster("rough-estimate")}
            label="Send me a rough estimate before call"
          />
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold text-[14px] text-black mb-2">
          Consent
        </h4>
        <Checkbox
          checked={consent}
          onChange={() => setConsent(!consent)}
          label="I agree to be contacted regarding my project"
        />
      </div>

      {errorMsg && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 font-sans text-[13px] text-red-700">
          {errorMsg}
        </div>
      )}

      <Nav
        onBack={onBack}
        onNext={onSubmit}
        nextLabel={sending ? "Sending..." : "Request My Project Estimate"}
        disabled={sending}
      />
    </div>
  );
}
