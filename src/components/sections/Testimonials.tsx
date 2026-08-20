"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    projectTitle: "CRM Customization",
    quote:
      "They built a fully customised CRM exactly how we needed it, involving us at every stage. The whole process was smooth, and it's made running our business much more efficient.",
    name: "Bobby Dhunay",
    role: "Sentrix Director",
    leftImage: "/images/client1.png",
    useLaptop: false,
  },
  {
    projectTitle: "Seamless Order Flow",
    quote:
      "They created a system that handles both click & collect and car delivery seamlessly. Orders are faster, customers are happier, and it's made a big difference to how we operate daily.",
    name: "Evelyn R",
    role: "Lunar Park",
    leftImage: "/images/client2.png",
    useLaptop: false,
  },
  {
    projectTitle: "Ordering Systems",
    quote:
      "They delivered a simple and effective ordering system for click & collect and takeaway. It's easy for our staff to use and makes ordering quick and convenient for our customers.",
    name: "Evelyn R",
    role: "Juice Planet",
    leftImage: "/images/client3.png",
    useLaptop: false,
  },
  {
    projectTitle: "Flawless Cloud Migration",
    quote:
      "They handled our migration from Google Workspace to Microsoft 365 professionally with no disruption. Everything was transferred securely, and our team now works more efficiently with the new system.",
    name: "Bobby Dhunay",
    role: "Telcam Director",
    leftImage: "/images/client4.png",
    useLaptop: false,
  },
  {
    projectTitle: "Ordering Systems",
    quote:
      "They delivered a simple and effective ordering system for click & collect and takeaway. It's easy for our staff to use and makes ordering quick and convenient for our customers.",
    name: "Evelyn R",
    role: "The Fort Park",
    leftImage: "/images/client5.png",
    useLaptop: false,
  },
  {
    projectTitle: "Flawless Cloud Migration",
    quote:
      "They handled our migration from Google Workspace to Microsoft 365 professionally with no disruption. Everything was transferred securely, and our team now works more efficiently with the new system.",
    name: "Evelyn R",
    role: "Andalusia Food Park",
    leftImage: "/images/client6.png",
    useLaptop: false,
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];
  const total = testimonials.length;

  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-display font-medium text-[16px] md:text-[20px] leading-none uppercase text-black">
              Client Stories
            </span>
            <ArrowRight size={20} className="text-black" />
          </div>
          <h2
            className="font-display font-semibold text-[26px] md:text-[45px] leading-[1.1] md:leading-none tracking-[-0.03em] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(176deg, #2f225c 0%, #aa74e2 100%)",
            }}
          >
            Hear what Clients love
            <br />
            about our Service
          </h2>
        </motion.div>

        {/* ── Testimonial card ── */}
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-[420px_1fr] gap-6 md:gap-[50px] items-center"
        >

          {/* Left: laptop mockup panel */}
          <div
            className="relative rounded-[20px] overflow-hidden h-[260px] sm:h-[310px] md:h-[338px] shrink-0"
            style={{ backgroundColor: t.useLaptop ? "transparent" : "#efebff" }}
          >
            {t.useLaptop ? (
              /* Slide 1: full MacBook mockup image (includes lavender bg) */
              <Image
                src={t.leftImage}
                alt={t.name}
                fill
                className="object-cover object-center"
                sizes="420px"
              />
            ) : (
              /* Other slides: lavender bg + project image */
              <div className="absolute inset-[12px] rounded-[12px] overflow-hidden">
                <img
                  src={t.leftImage}
                  alt={t.name}
                  className="w-full h-full object-contain"
                />
              </div>
            )}

          </div>

          {/* Right: testimonial content */}
          <div className="flex flex-col gap-5">

            {/* Name + Stars */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="font-display font-semibold text-[24px] md:text-[28px] leading-none tracking-[-0.03em] text-black">
                  {t.name}
                </div>
                <div className="mt-2 font-sans text-[14px] md:text-[16px] font-medium text-[#5B5B5B]">
                  {t.role}
                </div>
              </div>
              <div className="flex items-center gap-0.5 shrink-0 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-[#f5f5f5] rounded-[16px] px-5 md:px-6 py-5">
              <div className="font-display font-semibold text-[14px] md:text-[15px] text-black mb-2">
                {t.projectTitle}
              </div>
              <p className="font-sans text-[13px] md:text-[14px] font-medium leading-[24px] md:leading-[26px] tracking-[-0.02em] text-black/70">
                {t.quote}
              </p>
            </div>

            {/* Counter + Navigation */}
            <div className="flex items-center justify-between gap-6">
              <span className="font-display font-semibold text-sm text-gray-400">
                {active + 1} / {total}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-[#2b2058] hover:text-[#2b2058] transition"
                >
                  <ArrowRight size={16} className="rotate-180" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2b2058] text-white hover:bg-[#1a0f3a] transition"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
