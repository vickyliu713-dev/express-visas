import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import VisitorServiceDetails from "@/components/VisitorServiceDetails";
import VisitorFAQ from "@/components/VisitorFAQ";

export const metadata = {
  title: "UK Visitor Visa Support | Express Visas",
  description:
    "Expert help for UK Visitor visas – eligibility guidance, document review, application preparation and submission for tourism, family visits and business trips.",
};

export default function VisitorVisaPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Visitor Visa Services</span>}
        subtitle="Strong, well-documented applications for tourism, family visits, and business trips to reduce refusal risks."
        imageSrc="/visitor-visa-hero.jpg"
        ctaText="Start Your Visitor Visa Application"
      />

      <VisitorServiceDetails />

      <WhyUs />

      <HowItWorks
        step1Title="Eligibility Check"
        step1Desc="We confirm you meet the requirements for a visitor visa."
        step2Title="Document Review"
        step2Desc="We check your financial and travel documents to ensure they meet standards."
        step3Title="Application Preparation"
        step3Desc="We prepare and submit your application for the best chance of success."
      />

      <VisitorFAQ title="Visitor Visa FAQs" />

      <Testimonials
        aQuote="I was worried about my visitor visa being refused, but Express Visas prepared everything perfectly. I got my visa in just 2 weeks."
        aName="Maria"
        aRole="Visitor Visa Client"
        bQuote="Professional and efficient service. They checked all my documents and my application was approved first time."
        bName="Ahmed"
        bRole="Visitor Visa Client"
        cQuote=""
        cName=""
        cRole=""
      />

      <ContactForm />
    </main>
  );
}


