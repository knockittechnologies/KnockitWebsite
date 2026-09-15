import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ExpertiseList } from "@/components/sections/ExpertiseList";
import { About } from "@/components/sections/About";
import { ServicesShowcase } from "@/components/sections/ServicesShowcase";
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
        <ExpertiseList />
        <About />
        <ServicesShowcase />
        <Projects />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
