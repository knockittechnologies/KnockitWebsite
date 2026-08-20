import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Work | Client Case Studies | Knockit Technology",
  description:
    "See how Knockit Technology built custom CRM, delivery, and ordering systems for Sentrix, The Fort, Lunarpark, Juice Planet and more.",
};

const caseStudies = [
  { title: "Sentrix - Custom CRM", desc: "A fully custom CRM approved at every stage, with zero feature compromises.", href: "/case-studies/sentrix-crm" },
  { title: "The Fort - Multi-Vendor Single Basket", desc: "A unified checkout across multiple vendors with automatic order routing.", href: "/case-studies/the-fort-multi-vendor" },
  { title: "Lunarpark - Click and Collect Plus Car Delivery", desc: "One system handling both pickup and car delivery.", href: "/case-studies/lunarpark-click-collect" },
  { title: "Juice Planet - Single-Vendor Ordering", desc: "A simple, complete click and collect system for a single-vendor juice bar.", href: "/case-studies/juice-planet-ordering" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Real projects, real results. See how we have helped UK businesses solve operational problems with custom software.
          </p>
          <div className="grid gap-6">
            {caseStudies.map((c) => (
              <Link key={c.href} href={c.href} className="block p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{c.title}</h2>
                <p className="text-gray-600">{c.desc}</p>
              </Link>
            ))}
          </div>
          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Start Your Project</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
