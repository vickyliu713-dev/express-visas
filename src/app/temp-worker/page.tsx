import Hero from "@/components/Hero";
import TempWorkerServiceDetails from "@/components/TempWorkerServiceDetails";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import TempWorkerFAQ from "@/components/TempWorkerFAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function TempWorkerPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Temporary Worker Visa Experts</span>}
        subtitle="Applying for a Temporary Worker visa can feel overwhelming. We handle your application with precision, making sure you meet Home Office requirements and avoid unnecessary delays or refusals."
        ctaText="Start Your Temporary Worker Visa Application"
        imageSrc="/temp-worker-hero.jpg"
      />

      <TempWorkerServiceDetails />

      <WhyUs />

      <HowItWorks
        step1Title="Eligibility Review"
        step1Desc="We confirm which Temporary Worker route applies (Creative Worker, Charity Worker, Religious Worker, Seasonal Worker, etc.) and ensure you meet the requirements."
        step2Title="Document Check"
        step2Desc="We carefully review your Certificate of Sponsorship and supporting documents to minimise risk of refusal."
        step3Title="Application Submission"
        step3Desc="We prepare and submit your application, updating you until a decision is made."
      />

      <Testimonials
        aQuote="I applied under the Creative Worker route. They made the process stress-free, and my visa was approved in just 3 weeks."
        aName="Daniel"
        aRole="Musician"
        bQuote="Professional and responsive. They explained the Charity Worker requirements clearly and guided me all the way."
        bName="Aisha"
        bRole="Non-Profit Volunteer"
        cQuote="Excellent support for my Religious Worker visa. Everything was handled with care, and I felt confident throughout."
        cName="Father Miguel"
        cRole="Religious Worker"
      />

      <TempWorkerFAQ />

      <div id="contact">
        <ContactForm
          title="Temporary Worker Visa Application"
          submitLabel="Submit Temporary Worker Visa Application"
          placeholder="Tell us your Temporary Worker route, CoS details, timing, and dependants"
        />
      </div>
    </main>
  );
}


