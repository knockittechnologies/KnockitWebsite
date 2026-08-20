import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "The Fort Multi-Vendor Delivery Case Study | Knockit",
  description:
    "How Knockit built a multi-vendor single-basket checkout system for The Fort, delivering a seamless customer experience.",
};

export default function TheFortCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">The Fort: Multi-Vendor Single Basket System</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Client</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The Fort needed a way for customers to order from multiple vendors in a
            single transaction.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Traditional ordering setups treat each vendor as a separate checkout,
            creating friction for customers ordering from more than one stall or shop.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Knockit built a complex multi-vendor system with a unified checkout,
            customers order from multiple vendors, and the system automatically
            splits and routes orders behind the scenes.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The build was approved step by step with The Fort's team, ensuring the
            system matched real operational needs before full rollout.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A seamless customer experience with one basket, one checkout, and
            multiple vendors served correctly and efficiently.
          </p>

          <a href="/services/custom-delivery-systems" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Explore Delivery Systems</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
