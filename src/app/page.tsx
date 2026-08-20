import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ServicesStrip } from "@/components/sections/ServicesStrip";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesStrip />
        <About />
        <Services />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <div
          style={{
            backgroundImage:
              "linear-gradient(180deg, #2B2058 0%, #000000 100%)",
          }}
        >
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
