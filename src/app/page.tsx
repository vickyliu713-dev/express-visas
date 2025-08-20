import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      {/* Contact form anchor (placeholder for now) */}
      <ContactForm />
    </main>
  );
}
