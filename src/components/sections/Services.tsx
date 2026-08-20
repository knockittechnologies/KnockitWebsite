"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">

        {/* ── Label ── */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="font-display font-semibold text-xs uppercase tracking-[0.25em] text-black">
            Services
          </span>
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 6H26M26 6L21 1M26 6L21 11" stroke="#2f225c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── Gradient heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center font-display font-bold text-[26px] sm:text-[34px] md:text-[48px] leading-[1.25] tracking-tight bg-clip-text text-transparent mb-10 md:mb-12 w-full"
          style={{
            backgroundImage: "linear-gradient(180deg, #2f225c 0%, #7c4dbd 55%, #aa74e2 100%)",
          }}
        >
          We deliver innovative technology solutions<br className="hidden sm:block" />
          {" "}that empower businesses to grow, scale, and<br className="hidden sm:block" />
          {" "}stay ahead in the digital era.
        </motion.h2>

        {/* ── Row 1: Website Dev (large) + Mobile App (dark) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[8fr_7fr] gap-4 mb-4 items-start">

          {/* Card 1 — Website Development */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="relative"
          >
            <div className="relative h-[220px] sm:h-[280px] lg:h-[360px] rounded-[16px] md:rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-web.png"
                alt="Website Development"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 680px"
              />
            </div>
            <div className="relative -mt-[90px] md:-mt-[140px] ml-[20%] mr-0 bg-white rounded-[16px] md:rounded-[20px] px-6 md:px-8 py-6 md:py-8 shadow-sm">
              <h3 className="font-display font-bold text-[20px] md:text-[24px] text-black leading-tight">
                Website Development
              </h3>
              <p className="mt-3 font-sans text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                We design and develop responsive, high-performance websites
                tailored to your brand identity and business goals. Whether
                it&apos;s an e-commerce platform or a corporate site.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Mobile App Development */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-[16px] md:rounded-[20px] overflow-hidden h-[320px] sm:h-[360px] lg:h-[400px]"
            style={{ background: "#2b2058" }}
          >
            <div className="absolute top-0 left-0 flex flex-col pt-7 pl-7 pr-4 w-[55%] lg:w-[56%] z-10">
              <h3 className="font-display font-bold text-[22px] sm:text-[26px] lg:text-[28px] text-white leading-tight">
                Mobile App<br />Development
              </h3>
              <p className="mt-3 font-sans text-[13px] md:text-[14px] text-white/85 leading-relaxed">
                From concept to launch, we build Android and iOS applications
                that are fast, functional, and user-friendly.
              </p>
              <p className="mt-2 font-sans text-[13px] md:text-[14px] text-white/70 leading-relaxed hidden sm:block">
                We specialize in custom delivery and booking apps that connect
                businesses with their customers seamlessly.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 w-[52%] h-[95%]">
              <Image
                src="/images/service-mobile.png"
                alt="Mobile App illustration"
                fill
                className="object-contain object-bottom"
                sizes="300px"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Row 2: AI Chatbot | Custom Delivery | UI/UX ── */}
        {/* Figma ratio ≈ 1 : 1.73 : 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1.73fr_1fr] gap-4">

          {/* Card 3 — AI Chatbot Development */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative rounded-[16px] md:rounded-[20px] overflow-hidden min-h-[280px] sm:h-[360px] lg:h-[420px] flex flex-col p-6 md:p-7"
            style={{ background: "#2b2058" }}
          >
            <h3 className="font-display font-bold text-[18px] md:text-[22px] text-white leading-tight relative z-10">
              AI Chatbot<br />Development
            </h3>
            <p className="mt-3 font-sans text-[13px] text-white/80 leading-relaxed relative z-10 max-w-[200px]">
              Enhance customer engagement with intelligent chatbots that
              provide instant support and automation. Our bots can integrate
              with websites, apps, and popular platforms like WhatsApp.
            </p>
            {/* Robot illustration */}
            <div className="absolute bottom-0 left-0 w-[90%] pointer-events-none">
              <Image
                src="/images/service-chatbot.png"
                alt="AI Chatbot robot"
                width={320}
                height={250}
                className="w-full object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* Card 4 — Custom Delivery Solutions (image + white card, like Website Dev) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[220px] sm:h-[260px] lg:h-[320px] rounded-[16px] md:rounded-[20px] overflow-hidden">
              <Image
                src="/images/service-delivery-bg.png"
                alt="Custom Delivery Solutions"
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 560px"
              />
            </div>
            <div className="relative -mt-[80px] md:-mt-[110px] ml-[18%] mr-0 bg-white rounded-[16px] md:rounded-[20px] px-5 md:px-7 py-5 md:py-6 shadow-sm">
              <h3 className="font-display font-bold text-[18px] md:text-[22px] text-black leading-tight">
                Custom Delivery<br className="hidden md:block" /> Solutions
              </h3>
              <p className="mt-2 font-sans text-[13px] md:text-[14px] text-gray-600 leading-relaxed">
                We specialize in delivery system software for food courts,
                restaurants, and local businesses. Our solutions include driver
                management, live tracking, and order workflows.
              </p>
            </div>
          </motion.div>

          {/* Card 5 — UI/UX & Branding */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="relative rounded-[16px] md:rounded-[20px] overflow-hidden min-h-[280px] sm:h-[360px] lg:h-[420px] bg-[#f2f2f2] flex flex-col sm:col-span-2 lg:col-span-1"
          >
            <div className="p-6 md:p-7 relative z-10">
              <h3 className="font-display font-bold text-[18px] md:text-[22px] text-black leading-tight">
                UI/UX &amp; Branding
              </h3>
              <p className="mt-3 font-sans text-[13px] text-gray-600 leading-relaxed">
                Clean, modern, and user-focused designs that create memorable
                digital experiences and strong brand recognition.
              </p>
            </div>
            {/* Bottom panorama image */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-bl-[16px] rounded-br-[16px] md:rounded-bl-[20px] md:rounded-br-[20px]">
              <Image
                src="/images/service-uiux-banner.png"
                alt="UI/UX design mockups"
                width={800}
                height={350}
                className="w-full object-cover"
                style={{ maxHeight: "180px" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
