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
        title="UK Student Visa Experts"
        subtitle="Professional support for international students – CAS guidance, eligibility check, document preparation and complete submission."
        imageSrc="/hero-visa-consultation-w-BVZME7.jpg"
      />
      <ServiceDetails />
      <WhyUs />
      <HowItWorks
        step1Title="Eligibility & Course Strategy"
        step1Desc="We confirm you meet Student route rules and align your documents with your offer and CAS."
        step2Title="Document Preparation"
        step2Desc="We assemble financial, academic, and tuberculosis (if needed) evidence and prepare your forms."
        step3Title="Submission & Decision Support"
        step3Desc="We submit your application and keep you updated through to decision and visa collection."
      />
      <FAQ title="Student Visa FAQs" />
      <Testimonials
        aQuote="Express Visas made my UK student visa straightforward. I got clear guidance on finances and CAS."
        aName="Lina"
        aRole="Student Visa Client"
        bQuote="I received my student visa in time for my intake. The checklist and reviews were detailed and helpful."
        bName="Ahmed"
        bRole="Student Visa Client"
        cQuote="Great service – they handled the forms and evidence and I felt confident throughout."
        cName="Chen"
        cRole="Student Visa Client"
      />
      <ContactForm />
    </main>
  );
}


