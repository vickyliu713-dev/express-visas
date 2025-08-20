import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import FamilyServiceDetails from "@/components/FamilyServiceDetails";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "UK Family Visa Support | Express Visas",
  description:
    "Expert help for spouse, partner and dependant UK family visas with fixed fees and clear advice.",
};

export default function FamilyVisaPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Family Visa Experts</span>}
        subtitle="We provide expert guidance for UK spouse, partner, and dependant visa applications. With fixed fees and clear advice, we help families avoid costly refusals and reunite quickly."
        imageSrc="/family-visa-hero.jpg"
        ctaText="Start Your Family Visa Application"
      />
      <FamilyServiceDetails />
      <WhyUs />
      <HowItWorks
        step1Title="Initial Review"
        step1Desc="We assess your situation and confirm eligibility."
        step2Title="Document Preparation"
        step2Desc="We check every requirement to avoid refusal."
        step3Title="Application Submission"
        step3Desc="We submit your application and guide you until decision."
      />
      <FAQ title="Family Visa FAQs" />
      <Testimonials
        aQuote="Express Visas made my spouse visa application smooth and stress-free. I had been nervous about refusals, but everything went through first time."
        aName="Farah"
        aRole="Family Visa Client"
        bQuote="Thanks to Express Visas, my partner joined me in the UK within 3 months. Clear advice and excellent service."
        bName="James"
        bRole="Family Visa Client"
        cQuote=""
        cName=""
        cRole=""
      />
      <ContactForm />
    </main>
  );
}


