"use client";
import { ArrowUpRight } from "lucide-react";

const expertise = [
  {
    title: "CRM Development",
    desc: "Tailored tools to streamline your business processes.",
  },
  {
    title: "Website & App Development",
    desc: "Modern, scalable, and secure solutions for web and mobile.",
  },
  {
    title: "AI Integration Services",
    desc: "From intelligent chatbots to workflow automation and AI-driven insights.",
  },
  {
    title: "Custom Delivery Systems",
    desc: "Complete logistics, tracking, and vendor management platforms.",
  },
  {
    title: "UI/UX Design & Branding",
    desc: "Clean, user-focused designs that build strong identities.",
  },
  {
    title: "Cloud Integration & Hosting",
    desc: "Reliable cloud solutions for data, apps, and scalability.",
  },
  {
    title: "API Development & Integration",
    desc: "Seamless connectivity between apps and platforms.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Online stores with secure payment gateways and inventory control.",
  },
  {
    title: "Data Analytics & Reporting",
    desc: "Insights-driven dashboards to track business performance.",
  },
  {
    title: "Cybersecurity & Maintenance",
    desc: "Security audits, bug fixes, and ongoing support.",
  },
];

export function ExpertiseList() {
  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[320px_1fr] gap-10">
        <div>
          <div className="sticky top-24">
            <div className="flex items-center gap-2 text-sm font-medium text-[#5b1a8c] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5b1a8c]" />
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-[#2f0a5c]">
              Empowering Excellence
            </h2>
          </div>
        </div>
        <div className="border-t border-gray-200">
          {expertise.map((item) => (
            <div
              key={item.title}
              className="flex items-center justify-between gap-6 py-6 border-b border-gray-200 group cursor-pointer"
            >
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
              </div>
              <ArrowUpRight
                className="shrink-0 text-[#2f0a5c] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                size={22}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
