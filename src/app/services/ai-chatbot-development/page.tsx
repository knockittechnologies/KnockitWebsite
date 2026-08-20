import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AI Chatbot Development for Business | Knockit Technology",
  description:
    "Custom AI chatbots for websites, apps, and WhatsApp. Automate support, capture leads, and cut response times. Built by a UK development team.",
};

export default function AIChatbotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "AI Chatbot Development",
            "provider": {
              "@type": "Organization",
              "name": "Knockit Technology",
            },
            "areaServed": "GB",
            "description": "Custom AI chatbots for websites, apps, and WhatsApp Business.",
          }),
        }}
      />
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">AI Chatbot and Automation Development</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            Give Customers Instant Answers, 24/7
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We build AI-driven chatbots that handle support queries, qualify leads, and
            automate repetitive tasks, integrated directly into your website, app, or
            WhatsApp Business.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">What We Build</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Website and in-app AI chatbots</li>
            <li>WhatsApp Business automation</li>
            <li>Lead qualification and booking bots</li>
            <li>Workflow automation connecting your chatbot to your CRM</li>
            <li>AI-driven insights from customer conversations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Why Businesses Choose AI Chatbots</h2>
          <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2">
            <li>Reduce response times from hours to seconds</li>
            <li>Free up staff from repetitive queries</li>
            <li>Capture and qualify leads outside business hours</li>
            <li>Scale support without scaling headcount</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">FAQs</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <div>
              <p className="font-semibold">Can the chatbot integrate with WhatsApp?</p>
              <p>Yes, we build chatbots for WhatsApp Business alongside website and app deployments.</p>
            </div>
            <div>
              <p className="font-semibold">Will it sound robotic?</p>
              <p>No, we tune tone and responses to match your brand voice, not generic scripted replies.</p>
            </div>
            <div>
              <p className="font-semibold">Can it connect to our CRM?</p>
              <p>Yes, chatbot-to-CRM integration is one of our most requested builds, leads and queries flow straight into your pipeline.</p>
            </div>
          </div>

          <a href="/#contact" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Get an AI Chatbot Quote</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
