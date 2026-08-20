import Link from "next/link";
import Image from "next/image";

import iconHaveIdea from "@/assests/Group.png";

function SocialIcon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d={path} />
    </svg>
  );
}

const socials = [
  {
    label: "Instagram",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "Facebook",
    d: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    label: "LinkedIn",
    d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z",
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Clients", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0f0823]">
      <div className="relative mx-auto max-w-[1200px] px-6 sm:px-8 pt-12 md:pt-16 pb-8 md:pb-10">
        {/* ── Top: left brand block + right CTA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 pb-10 md:pb-12">
          {/* LEFT */}
          <div>
            <Link
              href="/"
              className="font-display font-bold text-[60px] sm:text-[80px] md:text-[110px] leading-none tracking-[-0.04em] text-white"
            >
              KnockIt
            </Link>

            <nav className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-sans text-[15px] font-medium text-white hover:text-white/80 transition"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-10">
              <div className="font-sans text-[13px] font-medium text-white/60 mb-4">
                Social Link
              </div>
              <div className="flex items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
                  >
                    <SocialIcon path={s.d} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col items-start lg:items-end gap-6 md:gap-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 text-left"
            >
              <Image
                src={iconHaveIdea}
                alt=""
                width={56}
                height={56}
                className="h-14 w-14 shrink-0 transition-transform group-hover:scale-105"
              />
              <span className="font-display font-medium text-[20px] leading-tight">
                Have an idea in mind ?<br />
                Let&apos;s talk.
              </span>
            </a>

            <div>
              <div className="font-display font-semibold text-[16px] mb-3">
                Download Knockit app
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 border border-white/15 hover:border-white/30 transition"
                >
                  <PlayStoreIcon />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] text-white/70">GET IT ON</span>
                    <span className="font-display font-semibold text-[15px] text-white">
                      Google Play
                    </span>
                  </span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2.5 border border-white/15 hover:border-white/30 transition"
                >
                  <AppleIcon />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] text-white/70">
                      Download on the
                    </span>
                    <span className="font-display font-semibold text-[15px] text-white">
                      App Store
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/15" />

        {/* ── Bottom: Email / Call / Copyright ── */}
        <div className="pt-6 md:pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 items-start">
          <div>
            <div className="font-sans text-[13px] font-medium text-white/60 mb-1">
              Email Us
            </div>
            <a
              href="mailto:official@knockittechnologies.com"
              className="font-sans text-[15px] text-white hover:text-white/80 transition"
            >
              official@knockittechnologies.com
            </a>
          </div>
          <div>
            <div className="font-sans text-[13px] font-medium text-white/60 mb-1">
              Call Us
            </div>
            <a
              href="tel:+447491014905"
              className="font-sans text-[15px] text-white hover:text-white/80 transition"
            >
              +44 7491014905
            </a>
          </div>
          <div className="lg:text-right">
            <p className="font-sans text-[13px] text-white/60">
              Knockit Technology © 2025 – All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M3.609 1.814 13.792 12 3.61 22.186a1.4 1.4 0 0 1-.61-1.155V2.969c0-.5.234-.94.61-1.155Z"
      />
      <path
        fill="#FBBC04"
        d="m13.792 12 3.453-3.453 5.547 3.184a1.4 1.4 0 0 1 0 2.538l-5.547 3.184L13.792 12Z"
      />
      <path
        fill="#34A853"
        d="m3.609 22.186 10.183-10.186 3.453 3.453-12.36 7.094a1.392 1.392 0 0 1-1.276-.361Z"
      />
      <path
        fill="#4285F4"
        d="m3.609 1.814 13.636 7.733-3.453 3.453L3.609 1.814Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.86-3.08.36-1.09-.5-2.08-.53-3.23 0-1.44.62-2.21.43-3.08-.36C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01ZM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25Z" />
    </svg>
  );
}
