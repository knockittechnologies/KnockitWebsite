import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Delivery & Multi-Vendor Ordering Systems | Knockit UK",
  description:
    "Custom delivery, click and collect, and multi-vendor ordering platforms for food parks, restaurants and retailers across the UK.",
};

export default function DeliverySystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Delivery and Ordering Systems",
            "provider": {
              "@type": "Organization",
              "name": "Knockit Technology",
            },
            "areaServed": "GB",
            "description": "Multi-vendor ordering, driver tracking, and click and collect platforms for food parks and restaurants.",
          }),
        }}
      />
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Custom Delivery and Ordering Systems</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Delivery Software Built for Food Parks, Restaurants and Multi-Vendor Sites
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We specialise in delivery and ordering platforms most agencies will not touch,
            multi-vendor single-basket checkout, driver tracking, and vendor management
            for food courts and local businesses.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Build</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Driver management and live GPS tracking</li>
            <li>Multi-vendor single-basket checkout systems</li>
            <li>Click and collect and car delivery workflows</li>
            <li>Order management dashboards for vendors and admins</li>
            <li>Real-time order status for customers</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Who This Is For</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Food parks and food courts with multiple vendors</li>
            <li>Restaurants running their own delivery fleet</li>
            <li>Retailers offering click and collect</li>
            <li>Local business networks needing shared logistics infrastructure</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">FAQs</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <p className="font-semibold">Can multiple vendors share one checkout?</p>
              <p>Yes, our multi-vendor single-basket system lets customers order from several vendors in one transaction, with orders automatically split and routed.</p>
            </div>
            <div>
              <p className="font-semibold">Do you provide driver tracking?</p>
              <p>Yes, live GPS tracking and driver management are built into our delivery platforms.</p>
            </div>
            <div>
              <p className="font-semibold">How much does a custom delivery system cost?</p>
              <p>It depends on scope, single-vendor click and collect starts smaller than a full multi-vendor food park platform.</p>
            </div>
          </div>

          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Request a Delivery System Quote</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
