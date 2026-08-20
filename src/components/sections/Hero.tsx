"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ChevronGraphic() {
  return (
    <svg
      viewBox="0 0 100 32"
      className="h-8 w-24 md:h-10 md:w-28"
      fill="none"
      aria-hidden="true"
    >
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${i * 28 + 8} 4 L${i * 28 + 24} 16 L${i * 28 + 8} 28`}
          stroke="rgb(170,116,226)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
    </svg>
  );
}

function RotatingBadge() {
  const text = "Creative Digital Agency • Creative Digital Agency • ";
  return (
    <div className="relative h-44 w-44 md:h-52 md:w-52">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 animate-[spin_20s_linear_infinite]"
      >
        <defs>
          <path
            id="circlePath"
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
        </defs>
        <text
          fill="white"
          fontSize="13"
          fontFamily="var(--font-bricolage)"
          fontWeight="500"
          letterSpacing="2"
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20">
          <ArrowRight className="h-5 w-5 text-white -rotate-45" />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[700px] md:min-h-[900px] overflow-hidden bg-black"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.png')" }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-8 pt-36 sm:pt-52 lg:pt-[380px] pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          {/* Left: text block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Line 1: Smart + Digital Solutions */}
            <h1 className="font-display font-semibold tracking-tight leading-[1.05] text-white">
              <span className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <span className="text-5xl md:text-6xl">Smart</span>
                <span
                  className="text-6xl md:text-7xl bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, rgb(200,160,255) 0%, rgb(140,90,220) 100%)",
                  }}
                >
                  Digital Solutions
                </span>
              </span>
              {/* Line 2: chevron + for Modern Businesses */}
              <span className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                <ChevronGraphic />
                <span className="text-4xl md:text-5xl">
                  for Modern Businesses
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-base md:text-[15px] text-white/75 leading-relaxed">
              Knockit Technology helps you transform ideas into powerful digital
              solutions. From websites and mobile apps to AI-driven chatbots and
              custom delivery platforms.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-7">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-display text-sm font-semibold text-black hover:bg-white/90 transition shadow-lg"
              >
                Get a Free Quote
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="#contact"
                className="font-display text-sm font-medium text-white hover:text-white/80 transition"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Right: rotating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-end"
          >
            <RotatingBadge />
          </motion.div>
        </div>
      </div>

      {/* KNOCKIT watermark bottom-right */}
      <div className="pointer-events-none absolute bottom-0 right-0 overflow-hidden">
        <div className="font-display font-bold text-[120px] md:text-[200px] leading-[0.8] text-white/10 whitespace-nowrap select-none translate-y-[15%] translate-x-[8%]">
          KNOCKIT
        </div>
      </div>
    </section>
  );
}
