"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { icon: "/images/stat-years.png",        value: "02",  label: "Years in Business" },
  { icon: "/images/stat-projects.png",     value: "8+",  label: "Successful Projects" },
  { icon: "/images/stat-satisfaction.png", value: "98%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        <div className="flex flex-col gap-8 md:gap-10">

          {/* ── ROW 1: header (left) + gradient heading (right) ── */}
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[100px]">

            {/* Left: label + heading */}
            <div className="shrink-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-display font-semibold text-xs uppercase tracking-[0.25em] text-black">
                  About Us
                </span>
                <ArrowRight size={14} className="text-brand" />
              </div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display font-semibold text-[36px] md:text-[45px] leading-none tracking-[-0.03em] text-black"
              >
                Who we are
              </motion.h2>
            </div>

            {/* Right: gradient heading */}
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-display font-semibold text-[24px] md:text-[36px] lg:text-[45px] leading-[1.15] tracking-[-0.03em] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(176deg, #2f225c 0%, #aa74e2 100%)",
              }}
            >
              We build the digital tools that power your growth.
            </motion.h3>
          </div>

          {/* ── ROW 2: Image 1 | Image 2 | Description ── */}
          <div className="flex flex-col md:flex-row items-start gap-6">

            {/* Images row — side by side on mobile too, stacked on very small screens */}
            <div className="flex gap-4 md:gap-6 w-full md:w-auto shrink-0">
              {/* Image 1 — shorter */}
              <div className="relative h-[220px] sm:h-[280px] md:h-[340px] w-1/2 md:w-[240px] lg:w-[280px] rounded-[16px] md:rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about-1.png"
                  alt="Team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 280px"
                />
              </div>

              {/* Image 2 — taller */}
              <div className="relative h-[280px] sm:h-[340px] md:h-[430px] w-1/2 md:w-[230px] lg:w-[270px] rounded-[16px] md:rounded-[20px] overflow-hidden">
                <Image
                  src="/images/about-rect18.png"
                  alt="Office meeting"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 270px"
                />
              </div>
            </div>

            {/* Description + CTA */}
            <div className="flex flex-col gap-4 pt-0 md:pt-2 min-w-0">
              <p className="font-sans font-semibold text-[18px] md:text-[22px] lg:text-[24px] leading-[1.35] tracking-[-0.02em] text-black">
                Knockit Technology is a UK-based tech solutions company
                dedicated to delivering innovative and reliable digital
                products.
              </p>
              <p className="font-sans font-medium text-[14px] leading-[30px] md:leading-[32px] tracking-[-0.02em] text-black">
                Knockit Technology is a UK-based tech solutions company
                dedicated to delivering innovative and reliable digital
                products. We partner with businesses of all sizes to develop
                technology that makes operations smoother, smarter, and more
                scalable.
              </p>
              <Link
                href="#contact"
                className="mt-1 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 w-fit font-display font-medium text-base text-white tracking-tight hover:bg-brand-mid transition"
              >
                Read More
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>
        </div>

        {/* ── Stats row ── */}
        <div className="mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-20">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.icon}
                alt={s.label}
                style={{ width: 48, height: 48, objectFit: "contain" }}
              />
              <div>
                <div className="font-display font-bold text-3xl md:text-4xl text-black leading-none">
                  {s.value}
                </div>
                <div className="mt-1.5 font-sans text-sm font-medium text-gray-600">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
