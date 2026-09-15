"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    name: "Sentrix",
    tag: "Custom CRM",
    title: "Custom CRM",
    desc: "Built a fully customized CRM with every feature they requested, approved at every production phase, which led to hassle-free business.",
    href: "/case-studies/sentrix-crm",
    img: "1616763355603-9755a640a287",
  },
  {
    name: "The Fort",
    tag: "Multi-vendor single basket",
    title: "Multi-vendor single basket",
    desc: "Built a complex multi-vendor system with unified checkout, approved step by step, which led to a seamless customer experience.",
    href: "/case-studies/the-fort-multi-vendor",
    img: "1519567241046-7f570eee3ce6",
  },
  {
    name: "Lunarpark",
    tag: "Click & collect + car delivery",
    title: "Click & collect + car delivery",
    desc: "Built a system handling both pickup and car delivery, which led to faster turnaround and happy customers.",
    href: "/case-studies/lunarpark-click-collect",
    img: "1541542684-4a936e1cbb5a",
  },
  {
    name: "Juice Planet",
    tag: "Single-vendor click & collect + takeaway",
    title: "Single vendor click & collect + takeaway",
    desc: "Built a simple but complete ordering system, which led to easy operations for staff and convenience for customers.",
    href: "/case-studies/juice-planet-ordering",
    img: "1622597467836-f3285f2131b8",
  },
  {
    name: "Andalusia Food Park",
    tag: "Food park multi-vendor ordering",
    title: "Food park multi-vendor ordering",
    desc: "Built a full system plus setup and maintenance for vendors, which led to vendors running tech smoothly with instant support.",
    href: "/case-studies/andalusia-food-park",
    img: "1504674900247-0877df9cc836",
  },
];

export function Projects() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-6">
        <div
          className="rounded-3xl p-8 text-white flex flex-col justify-between min-h-[300px]"
          style={{
            background: "linear-gradient(160deg, #3d0a6b 0%, #1c0136 100%)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-white/70 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              Clients
            </div>
            <h2 className="text-2xl font-display font-semibold">
              Our Clients &amp; Projects
            </h2>
          </div>
          <div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
              We&apos;re proud to work with forward-thinking businesses that
              trust us to deliver their digital transformation.
            </p>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium hover:gap-2.5 transition-all"
            >
              View All Case Studies <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {caseStudies.map((c) => (
            <div
              key={c.name}
              className="rounded-3xl overflow-hidden grid md:grid-cols-[1fr_1.3fr]"
              style={{
                background:
                  "linear-gradient(135deg, #3d0a6b 0%, #1c0136 100%)",
              }}
            >
              <div className="relative min-h-[220px]">
                <Image
                  src={`https://images.unsplash.com/photo-${c.img}?q=80&w=700&auto=format&fit=crop`}
                  alt={c.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 text-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                    {c.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="font-medium">{c.name}</span>
                </div>
                <h3 className="text-lg font-display font-semibold mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  {c.desc}
                </p>
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium w-fit hover:gap-2.5 transition-all"
                >
                  View Case Study <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
