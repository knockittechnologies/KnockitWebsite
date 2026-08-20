import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Custom CRM Development Birmingham & UK",
  description:
    "Custom CRM software built around how your business actually works. Birmingham-based team, UK-wide delivery. Get a free quote today.",
};

export default function CRMDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "CRM Development",
            "provider": {
              "@type": "Organization",
              "name": "Knockit Technology",
            },
            "areaServed": "GB",
            "description": "Custom CRM software built around how your business actually works.",
          }),
        }}
      />
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Custom CRM Development</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Built Around Your Business, Not the Other Way Round
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Off-the-shelf CRM tools force your team to change how they work.
            We build custom CRM systems that fit your existing processes, so
            your staff adopt it faster and get more out of it from day one.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Build</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Custom customer and lead management dashboards</li>
            <li>Sales pipeline and workflow automation</li>
            <li>Role-based access for teams and departments</li>
            <li>Integrations with email, WhatsApp, and existing tools</li>
            <li>Reporting and analytics built into the CRM itself</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Our CRM Development Process
          </h2>
          <ol className="list-decimal pl-6 text-lg text-gray-700 space-y-2">
            <li><strong>Discovery</strong> - We map how your team currently works and where the friction is.</li>
            <li><strong>Design</strong> - Wireframes and UI mockups approved before a line of code is written.</li>
            <li><strong>Build</strong> - Agile development with staged approvals, so you see progress at every phase.</li>
            <li><strong>Launch and Support</strong> - Training, handover, and ongoing maintenance.</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-10 mb-4">FAQs</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <p className="font-semibold">How long does a custom CRM take to build?</p>
              <p>Most CRM projects take 6 to 12 weeks depending on complexity and integrations required.</p>
            </div>
            <div>
              <p className="font-semibold">Can you migrate our data from our old CRM?</p>
              <p>Yes, we handle data migration as part of the build so you do not lose historical records.</p>
            </div>
            <div>
              <p className="font-semibold">Do you offer ongoing support after launch?</p>
              <p>Yes, all CRM builds include a support package; extended maintenance plans are available.</p>
            </div>
          </div>

          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Get a Free CRM Quote</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
