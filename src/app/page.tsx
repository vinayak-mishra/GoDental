// import Image from "next/image";

import About from "@/components/About";
import FreeConsultationSection from "@/components/Consultation";
// import ContactForm from "@/components/Contacts";
import FaqAccordion from "@/components/FaqAccordion";
// import Features from "@/components/Features";
import Footer from "@/components/footer";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
// import Stats from "@/components/State";
// import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <FreeConsultationBanner />
      <About />
      <FreeConsultationSection />

      {/* <Testimonials /> */}
      {/* <ContactForm /> */}
      <FaqAccordion />
      <Footer />
    </main>
  );
}
