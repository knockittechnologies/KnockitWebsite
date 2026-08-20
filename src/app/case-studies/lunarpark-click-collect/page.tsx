import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Lunarpark Click and Collect Case Study | Knockit Technology",
  description:
    "How Knockit built a combined click and collect and car delivery system for Lunarpark, cutting turnaround times.",
};

export default function LunarparkCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Lunarpark: Click and Collect Plus Car Delivery</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Client</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Lunarpark needed to offer customers flexibility, collect in person, or
            have orders delivered straight to their car.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Running two separate fulfilment methods, pickup and car delivery, through
            one system without slowing down operations or confusing staff.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Knockit built a system handling both pickup and car delivery within a
            single, unified order flow, staff see and manage every order type from
            one dashboard.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Faster turnaround on orders and a smoother experience for customers
            choosing either fulfilment method.
          </p>

          <a href="/services/custom-delivery-systems" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Explore Delivery Systems</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
