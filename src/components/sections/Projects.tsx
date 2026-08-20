"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

import imgSentrix from "@/assests/Rectangle 157936.png";
import imgFort from "@/assests/Rectangle 157938.png";
import imgLunarpark from "@/assests/Rectangle 157940.png";
import imgJuicePlanet from "@/assests/Rectangle 157942.png";
import logoSentrix from "@/assests/Group 39475.png";
import logoFort from "@/assests/Group 39476.png";
import logoLunarpark from "@/assests/Group 39477.png";
import logoJuicePlanet from "@/assests/Group 39478.png";
import iconArrow from "@/assests/7.png";

type CardTheme = "dark-purple" | "black" | "light";

type Project = {
  name: string;
  type: string;
  desc: string;
  image: StaticImageData | string;
  logo?: StaticImageData;
  theme: CardTheme;
  logoBg?: string;
  logoChar?: string;
};

const projects: Project[] = [
  {
    name: "Sentrix",
    type: "Custom CRM",
    desc: "Built a fully customized CRM with every feature they requested, approved at every production phase, which led to hassle-free business.",
    image: imgSentrix,
    logo: logoSentrix,
    theme: "dark-purple",
  },
  {
    name: "The Fort",
    type: "Multi-vendor single basket",
    desc: "Built a complex multi-vendor system with unified checkout, approved step by step, which led to a seamless customer experience.",
    image: imgFort,
    logo: logoFort,
    theme: "black",
  },
  {
    name: "Lunarpark",
    type: "Click & collect + car delivery",
    desc: "Built a system handling both pickup and car delivery, which led to faster turnaround and happy customers.",
    image: imgLunarpark,
    logo: logoLunarpark,
    theme: "light",
  },
  {
    name: "Juice Planet",
    type: "Single vendor click & collect takeaway",
    desc: "Built a simple but complete ordering system for a single-vendor juice bar, which led to easy operations for staff and convenience for customers.",
    image: imgJuicePlanet,
    logo: logoJuicePlanet,
    theme: "dark-purple",
  },
  {
    name: "Andalusia Food park",
    type: "Food park multi-vendor ordering",
    desc: "Built a full system plus setup and maintenance for vendors, which led to vendors running their operations smoothly with instant support.",
    image:
      "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=800&q=80",
    theme: "black",
    logoBg: "bg-red-700",
    logoChar: "A",
  },
];

const themeStyles: Record<
  CardTheme,
  { card: string; title: string; body: string; arrowBg: string; arrowText: string }
> = {
  "dark-purple": {
    card: "bg-[#1a0f3a] text-white",
    title: "text-white",
    body: "text-white",
    arrowBg: "bg-white/10",
    arrowText: "text-white",
  },
  black: {
    card: "bg-[#141414] text-white",
    title: "text-white",
    body: "text-white",
    arrowBg: "bg-white/10",
    arrowText: "text-white",
  },
  light: {
    card: "bg-[#f3f3f3] text-black",
    title: "text-black",
    body: "text-gray-600",
    arrowBg: "bg-white",
    arrowText: "text-brand",
  },
};

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 365;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="relative py-16 md:py-20 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display font-medium text-[16px] md:text-[20px] leading-none uppercase text-black">
                Clients
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
              Our Clients & Projects
            </motion.h2>
            <p className="mt-4 font-sans font-medium text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] tracking-[-0.02em] text-black max-w-xl">
              We&apos;re proud to work with forward-thinking businesses that
              trust us to deliver their digital transformation:
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-mid transition"
              aria-label="Scroll left"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white hover:bg-brand-mid transition"
              aria-label="Scroll right"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((p, i) => {
            const t = themeStyles[p.theme];
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`group flex flex-col rounded-[20px] overflow-hidden shrink-0 w-[341px] snap-start ${t.card}`}
              >
                <div className="relative h-[174px] overflow-hidden">
                  {typeof p.image === "string" ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                  ) : (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover"
                      sizes="341px"
                    />
                  )}
                </div>
                <div className="flex flex-col gap-4 px-6 pt-6 pb-6 flex-1">
                  <div className="flex items-center gap-3">
                    {p.logo ? (
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-white overflow-hidden shrink-0">
                        <Image
                          src={p.logo}
                          alt={`${p.name} logo`}
                          width={48}
                          height={48}
                          className="h-12 w-12 object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className={`flex h-[60px] w-[60px] items-center justify-center rounded-full font-display font-bold text-base ${p.logoBg} text-white shrink-0`}
                      >
                        {p.logoChar}
                      </div>
                    )}
                    <span className={`font-display font-semibold text-[28px] leading-none tracking-[-0.03em] ${t.title}`}>
                      {p.name}
                    </span>
                  </div>

                  <div className="flex flex-col gap-px">
                    <h3
                      className={`font-sans font-semibold text-[20px] leading-[32px] tracking-[-0.4px] ${t.title}`}
                    >
                      {p.type}
                    </h3>

                    <p
                      className={`font-sans font-medium text-[14px] leading-[28px] tracking-[-0.28px] ${t.body}`}
                    >
                      {p.desc}
                    </p>
                  </div>

                  <div className="mt-auto pt-2">
                    <Image
                      src={iconArrow}
                      alt=""
                      width={42}
                      height={42}
                      className={`h-[42px] w-[42px] transition group-hover:rotate-45 ${
                        p.theme === "light" ? "invert" : ""
                      }`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
