"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import iconAffordable from "@/assests/fi_3615427.png";
import iconSupport from "@/assests/fi_1716995.png";
import iconScalable from "@/assests/fi_4269761.png";
import iconTrackRecord from "@/assests/fi_2539111.png";

type Reason = {
  icon: StaticImageData;
  title: string;
};

const reasons: Reason[] = [
  {
    icon: iconAffordable,
    title: "Affordable pricing, tailored to your needs",
  },
  {
    icon: iconSupport,
    title: "Dedicated support team",
  },
  {
    icon: iconScalable,
    title: "Scalable technology for future growth",
  },
  {
    icon: iconTrackRecord,
    title: "Proven track record with food parks and delivery ecosystems",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] bg-[#1a0f3a] p-8 sm:p-10 md:p-14">
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />

          <div className="relative grid lg:grid-cols-[1fr_1.2fr] gap-12">
            {/* Left: heading + intro */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-[11px] mb-4">
                <span className="font-display font-medium text-[16px] md:text-[20px] leading-none uppercase text-white">
                  Why Knockit
                </span>
                <ArrowRight size={20} className="text-white" />
              </div>

              <h2 className="font-display font-semibold text-[28px] md:text-[45px] leading-none tracking-[-0.03em] text-white">
                Why Choose Us?
              </h2>

              <p className="mt-5 font-sans font-medium text-[14px] leading-[28px] md:leading-[32px] tracking-[-0.02em] text-white max-w-md">
                We&apos;re proud to work with forward-thinking businesses that
                trust us to deliver their digital transformation.
              </p>
            </motion.div>

            {/* Right: 2x2 reason grid */}
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4"
                >
                  <Image
                    src={r.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 shrink-0 object-contain"
                  />
                  <p className="font-display font-medium text-lg leading-snug text-white pt-2">
                    {r.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
