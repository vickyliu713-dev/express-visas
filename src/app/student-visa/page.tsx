import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import ServiceDetails from "@/components/ServiceDetails";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "UK Student Visa Support | Express Visas",
  description:
    "Expert help for UK Student (Tier 4) visas – eligibility check, document prep, submission and support. Fast, reliable and compliant.",
};

export default function StudentVisaPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Student Visa Experts</span>}
        subtitle="Applying for a UK student visa can be confusing — from financial documents to your CAS letter. We make the process simple, accurate, and stress-free, so you can focus on your studies."
        imageSrc="/hero-visa-consultation-w-BVZME7.jpg"
        ctaText="Start Your Student Visa Application"
      />
      <ServiceDetails />
      <WhyUs />
      <HowItWorks
        step1Title="Eligibility Check"
        step1Desc="We confirm your CAS and financial evidence meet requirements."
        step2Title="Application Preparation"
        step2Desc="We prepare your application and review all documents."
        step3Title="Submission & Updates"
        step3Desc="We submit and monitor your application until a decision is made."
      />
      <FAQ title="Student Visa FAQs" />
      <Testimonials
        aQuote="Express Visas helped me get my student visa approved without stress. They explained everything clearly and handled the whole process."
        aName="Rahul"
        aRole="Student Visa Client"
        bQuote="I was worried about my financial evidence, but Express Visas checked everything for me and my visa was approved quickly."
        bName="Chen"
        bRole="Student Visa Client"
        cQuote=""
        cName=""
        cRole=""
      />
      <ContactForm />
    </main>
  );
}


