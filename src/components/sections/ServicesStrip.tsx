"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

import iconCrm from "@/assests/4.png";
import iconWeb from "@/assests/216.png";
import iconAi from "@/assests/2.png";
import iconDelivery from "@/assests/856.png";
import iconUiUx from "@/assests/85.png";
import iconCloud from "@/assests/45.png";
import iconApi from "@/assests/585.png";
import iconEcom from "@/assests/2843.png";
import iconAnalytics from "@/assests/84569.png";
import iconSecurity from "@/assests/8564725963355.png";

type Service = {
  icon: StaticImageData;
  title: string;
  desc: string;
};

const services: Service[] = [
  {
    icon: iconCrm,
    title: "CRM\nDevelopment",
    desc: "Tailored tools to streamline your business processes.",
  },
  {
    icon: iconWeb,
    title: "Website &\nApp Development",
    desc: "Modern, scalable, and secure solutions for web and mobile.",
  },
  {
    icon: iconAi,
    title: "AI Integration\nServices",
    desc: "From intelligent chatbots to workflow automation and AI-driven insights.",
  },
  {
    icon: iconDelivery,
    title: "Custom\nDelivery Systems",
    desc: "Complete logistics, tracking, and vendor management platforms.",
  },
  {
    icon: iconUiUx,
    title: "UI/UX Design\n& Branding",
    desc: "Clean, user-focused designs that build strong identities.",
  },
  {
    icon: iconCloud,
    title: "Cloud Integration\n& Hosting",
    desc: "Reliable cloud solutions for data, apps, and scalability.",
  },
  {
    icon: iconApi,
    title: "API Development\n& Integration",
    desc: "Seamless connectivity between apps and platforms.",
  },
  {
    icon: iconEcom,
    title: "E-commerce\nSolutions",
    desc: "Online stores with secure payment gateways.",
  },
  {
    icon: iconAnalytics,
    title: "Data Analytics\n& Reporting",
    desc: "Insights-driven dashboards to track performance.",
  },
  {
    icon: iconSecurity,
    title: "Cybersecurity\n& Maintenance",
    desc: "Security audits, bug fixes, and ongoing support.",
  },
];

const loopedServices = [...services, ...services];

export function ServicesStrip() {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-display font-medium text-[16px] md:text-[20px] leading-none uppercase text-black">
              Our Expertise
            </span>
            <ArrowRight size={20} className="text-black" />
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-semibold text-[28px] md:text-[45px] leading-none tracking-[-0.03em] bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(176deg, #2f225c 0%, #aa74e2 100%)",
            }}
          >
            Empowering Excellence
          </motion.h2>
        </div>
      </div>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee">
          {loopedServices.map((s, i) => (
            <div
              key={`${s.title}-${i}`}
              className="flex-shrink-0 w-[280px] px-8 py-2 border-r border-dashed border-gray-300"
            >
              <div className="flex h-14 w-14 items-center justify-center">
                <Image
                  src={s.icon}
                  alt={s.title.replace(/\n/g, " ")}
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
              </div>
              <h3 className="mt-7 font-sans text-[20px] font-semibold text-black leading-[28px] tracking-[-0.03em] whitespace-pre-line">
                {s.title}
              </h3>
              <p className="mt-3 font-sans text-[14px] font-semibold leading-[22px] tracking-[-0.03em] text-black">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
