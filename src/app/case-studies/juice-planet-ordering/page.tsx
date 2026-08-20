import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Juice Planet Ordering System Case Study | Knockit",
  description:
    "How Knockit built a simple, complete click and collect ordering system for Juice Planet, a single-vendor juice bar.",
};

export default function JuicePlanetCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Juice Planet: Single-Vendor Click and Collect</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Client</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Juice Planet, a single-vendor juice bar, needed an ordering system that
            was simple to run day-to-day without unnecessary complexity.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Many ordering platforms are built for multi-vendor complexity, Juice
            Planet needed something lean, fast, and easy for staff to manage.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Knockit built a simple but complete click and collect ordering system,
            scoped specifically to a single-vendor operation.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Easy day-to-day operations for staff and a convenient ordering experience
            for customers.
          </p>

          <a href="/services/custom-delivery-systems" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Explore Delivery Systems</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
