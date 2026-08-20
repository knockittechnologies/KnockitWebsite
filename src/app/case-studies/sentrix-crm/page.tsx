import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Sentrix Custom CRM Case Study | Knockit Technology",
  description:
    "How Knockit built a fully custom CRM for Sentrix, approved at every stage, with zero feature compromises.",
};

export default function SentrixCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white text-black">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Sentrix: Custom CRM Development</h1>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Client</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Sentrix needed a CRM that matched their exact operational workflow, not a
            generic tool with workarounds.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Challenge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Off-the-shelf CRM options did not support Sentrix's specific processes,
            forcing constant manual workarounds and lost time.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Solution</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Knockit built a fully custom CRM with every feature Sentrix requested,
            covering lead tracking, workflow automation, and reporting, designed
            entirely around their existing process rather than forcing them to adapt
            to the software.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Process</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Every production phase was reviewed and approved directly with Sentrix,
            keeping the build aligned with their needs throughout.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">The Result</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A hassle-free CRM that fits the business exactly as it operates, with no
            compromise on requested functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Client Testimonial</h2>
          <blockquote className="text-lg text-gray-700 italic border-l-4 pl-4" style={{ borderColor: "#2B2058" }}>
            They built a fully customised CRM exactly how we needed it, involving us
            at every stage. The whole process was smooth, and it has made running our
            business much more efficient.
            <footer className="mt-2 not-italic font-semibold">Bobby Dhunay, Sentrix Director</footer>
          </blockquote>

          <a href="/services/crm-development" className="inline-block mt-12 px-8 py-4 rounded-full text-white font-semibold" style={{ backgroundColor: "#2B2058" }}>Explore CRM Development</a>
        </section>
      </main>
      <Footer />
    </>
  );
}
