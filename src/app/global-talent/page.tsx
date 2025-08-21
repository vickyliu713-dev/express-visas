import Hero from "@/components/Hero";
import GlobalTalentServiceDetails from "@/components/GlobalTalentServiceDetails";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import GlobalTalentFAQ from "@/components/GlobalTalentFAQ";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function GlobalTalentPage() {
  return (
    <main>
      <Hero
        title={<span className="text-accent">UK Global Talent Visa Experts</span>}
        subtitle={
          "If you are a leader or potential leader in your field, the Global Talent visa is designed for you. We manage your endorsement and visa application with precision — letting you focus on being exceptional, not frustrated. "
        }
        ctaText="Start Your Global Talent Visa Application"
        imageSrc="/global-talent-hero.jpg"
      />

      <GlobalTalentServiceDetails />

      <WhyUs />

      <HowItWorks
        step1Title="Endorsement Strategy"
        step1Desc="Identify the right endorsing body (Royal Society, Arts Council, UKRI, Tech Nation, etc.) and compile your strongest case."
        step2Title="Document & Evidence Review"
        step2Desc="We check your achievements, awards, publications, or innovation with laser‑precision."
        step3Title="Submission & Tracking"
        step3Desc="Endorsement (typically £561) → Visa application (from £205) → Ongoing status updates and support."
      />

      <Testimonials
        aQuote="Working with these folks was a breeze. My endorsement came through fast, and the visa followed—effortless."
        aName="Jamie"
        aRole="Global Tech Lead"
        bQuote="They saw how my work in cultural design stacked up and applied it so convincingly my endorsement was a slam dunk."
        bName="Priya"
        bRole="Arts & Culture Specialist"
        cQuote="I was nervous about the endorsement process, but they simplified everything. My application was clear, compelling, and approved faster than I expected."
        cName="Luca"
        cRole="Academic Researcher"
      />

      <GlobalTalentFAQ />

      <div id="contact">
        <ContactForm />
      </div>
    </main>
  );
}


