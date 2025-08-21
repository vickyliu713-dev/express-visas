import Hero from "@/components/Hero";
import HealthCareServiceDetails from "@/components/HealthCareServiceDetails";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import HealthCareFAQ from "@/components/HealthCareFAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function HealthAndCareWorkerPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Health and Care Visa Experts</span>}
        subtitle="The Health and Care visa makes it easier for medical and social care professionals to work in the UK. We prepare and submit your application accurately, ensuring you meet Home Office requirements and avoid delays."
        ctaText="Start Your Health and Care Visa Application"
        imageSrc="/health-care-hero.jpg"
      />

      <HealthCareServiceDetails />

      <WhyUs />

      <HowItWorks
        step1Title="Eligibility Check"
        step1Desc="We confirm your role is on the list of eligible health & social care occupations and that you meet requirements."
        step2Title="Document Review"
        step2Desc="We carefully check your CoS, qualifications, and supporting evidence to reduce risk of refusal."
        step3Title="Application Submission"
        step3Desc="We prepare and submit your application, keeping you updated until a decision is made."
      />

      <Testimonials
        aQuote="Express Visas handled my Health and Care visa quickly. The whole process was stress-free and approved in 3 weeks."
        aName="Maria"
        aRole="Nurse"
        bQuote="Very clear advice and reliable support. They guided me from my CoS to final approval without any issues."
        bName="Ahmed"
        bRole="Care Worker"
        cQuote="Excellent service. They made sure all my documents were right the first time — visa granted smoothly."
        cName="Dr. Patel"
        cRole="GP"
      />

      <HealthCareFAQ />

      <div id="contact">
        <ContactForm
          title="Health and Care Visa Application"
          submitLabel="Submit Health and Care Visa Application"
          placeholder="Tell us about your Health and Care visa (role, CoS, timing, dependants)"
        />
      </div>
    </main>
  );
}


