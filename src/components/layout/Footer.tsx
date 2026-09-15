"use client";
import Link from "next/link";

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1c0136" }} className="text-white pt-16">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-9 h-9 rounded-full border border-white/60 flex items-center justify-center text-sm font-bold">
            K
          </span>
          <span className="font-display font-bold text-lg tracking-wide">
            KNOCKIT
          </span>
        </div>

        <nav className="flex items-center justify-center gap-8 text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <Link href="/about" className="hover:text-white">
            About us
          </Link>
          <Link href="/services" className="hover:text-white">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-white">
            Clients
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </nav>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50"
          >
            <FacebookIcon />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-white/50"
          >
            <LinkedinIcon />
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 pb-10 flex-wrap">
          <span className="text-sm text-white/60">Download Knockit app</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-xs">
              Get it on Google Play
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-xs">
              Download on the App Store
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>Knockit Technology &copy; 2026 - All Rights Reserved</span>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-white/80">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="#" className="hover:text-white/80">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
