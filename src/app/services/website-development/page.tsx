import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Website Development Birmingham & UK | Knockit Technology",
  description:
    "Custom-built, high-performance websites for UK businesses. Fast, secure, and designed to convert. Get a free quote from Knockit today.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Website Development",
            "provider": {
              "@type": "Organization",
              "name": "Knockit Technology",
            },
            "areaServed": "GB",
            "description": "Custom-built, high-performance websites for UK businesses.",
          }),
        }}
      />
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Website Development</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Websites Built for Speed, Security and Growth
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We design and develop responsive, high-performance websites tailored to your
            brand, from corporate sites to e-commerce platforms.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Build</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Corporate and business websites</li>
            <li>E-commerce platforms with secure payment gateways</li>
            <li>Landing pages and marketing sites</li>
            <li>Content-managed sites your team can update easily</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Built to Perform</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Fast load times, optimised images, and clean code</li>
            <li>Mobile-first, responsive on every device</li>
            <li>SEO-ready structure from day one</li>
            <li>Secure hosting and ongoing maintenance available</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">FAQs</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <p className="font-semibold">How long does a website take to build?</p>
              <p>Simple business sites typically take 2 to 4 weeks; e-commerce or custom builds take longer depending on scope.</p>
            </div>
            <div>
              <p className="font-semibold">Do you offer ongoing maintenance?</p>
              <p>Yes, we offer maintenance and support packages after launch.</p>
            </div>
            <div>
              <p className="font-semibold">Can you redesign our existing site?</p>
              <p>Yes, we handle both new builds and full redesigns.</p>
            </div>
          </div>

          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Get a Website Quote</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
