"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/#careers" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-[1280px] px-8 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Knockit"
            width={180}
            height={48}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white text-[15px] font-sans font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 text-sm font-display font-semibold text-white hover:bg-brand-mid transition-colors"
          >
            For Enquiry
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-8 pb-6 bg-brand-deep/95 backdrop-blur">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white"
          >
            For Enquiry
          </Link>
        </nav>
      </div>
    </header>
  );
}
