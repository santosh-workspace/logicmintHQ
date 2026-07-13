import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Portfolio from "@/components/Portfolio";
import StatsBand from "@/components/StatsBand";
import Why from "@/components/Why";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Showcase />
        <Portfolio />
        <StatsBand />
        <Why />
        <Process />
        <TechStack />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
