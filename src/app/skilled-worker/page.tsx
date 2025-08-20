import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import SkilledServiceDetails from "@/components/SkilledServiceDetails";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "UK Skilled Worker Visa Support | Express Visas",
  description:
    "We prepare and submit UK Skilled Worker visa applications accurately for individuals with a Certificate of Sponsorship.",
};

export default function SkilledWorkerPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Skilled Worker Visa Experts</span>}
        subtitle="Applying for a Skilled Worker visa can be complex. We prepare and submit your application accurately, ensuring you meet Home Office requirements and avoid costly mistakes. (For individuals applying with a Certificate of Sponsorship – not employer licence applications)."
        imageSrc="/skilled-worker-hero.jpg"
        ctaText="Start Your Skilled Worker Visa Application"
      />
      <SkilledServiceDetails />
      {/* Why section omitted as requested */}
      <HowItWorks
        step1Title="Eligibility Check"
        step1Desc="We review your Certificate of Sponsorship and ensure you meet all Skilled Worker requirements."
        step2Title="Document Review"
        step2Desc="We carefully check your supporting evidence to avoid refusal."
        step3Title="Application Submission"
        step3Desc="We prepare and submit your application, guiding you until a decision is made."
      />
      <FAQ title="Skilled Worker Visa FAQs" />
      <Testimonials
        aQuote="Express Visas handled my Skilled Worker visa quickly and professionally. Everything was approved without any issues."
        aName="Samuel"
        aRole="Skilled Worker Client"
        bQuote="Very reliable service. They reviewed my documents and submitted my Skilled Worker visa perfectly. Approved in 4 weeks."
        bName="Ana"
        bRole="Skilled Worker Client"
        cQuote=""
        cName=""
        cRole=""
      />
      <ContactForm />
    </main>
  );
}


