"use client";
import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative pt-40 pb-32 px-8 text-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #240046 0%, #4f017c 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-white font-display font-semibold text-4xl md:text-5xl lg:text-[52px] leading-tight">
          Smart Digital Solutions
          <br />
          for Modern Businesses
        </h1>
        <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Knockit Technology helps you transform ideas into powerful digital
          solutions. From websites and mobile apps to AI-driven chatbots and
          custom delivery platforms.
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <Link
            href="#contact"
            className="inline-flex items-center rounded-xl bg-white px-7 py-4 text-sm font-display font-semibold text-[#240046] hover:bg-white/90 transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link
            href="#contact"
            className="text-white text-sm font-medium hover:text-white/80 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
