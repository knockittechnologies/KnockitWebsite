import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Our Services | Custom Software Development, Birmingham UK",
  description:
    "CRM development, delivery systems, AI chatbots, and website development, explore Knockit Technology's full range of custom software services.",
};

const services = [
  { title: "CRM Development", desc: "Custom CRM software built around how your business actually works.", href: "/services/crm-development" },
  { title: "Custom Delivery Systems", desc: "Multi-vendor ordering, driver tracking, and click and collect platforms.", href: "/services/custom-delivery-systems" },
  { title: "AI Chatbot Development", desc: "Automate support and capture leads with AI-driven chat.", href: "/services/ai-chatbot-development" },
  { title: "Website Development", desc: "Fast, secure, conversion-focused websites for UK businesses.", href: "/services/website-development" },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            We deliver innovative technology solutions that empower businesses to grow, scale, and stay ahead in the digital era.
          </p>
          <div className="grid gap-6">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block p-6 rounded-xl border border-gray-200 hover:border-gray-400 transition-colors">
                <h2 className="text-2xl font-semibold mb-2">{s.title}</h2>
                <p className="text-gray-600">{s.desc}</p>
              </Link>
            ))}
          </div>
          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Get a Free Quote</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
