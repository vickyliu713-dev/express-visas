import Link from "next/link";

type HowItWorksProps = {
  step1Title?: string;
  step1Desc?: string;
  step2Title?: string;
  step2Desc?: string;
  step3Title?: string;
  step3Desc?: string;
};

export default function HowItWorks({
  step1Title = "Eligibility & Strategy",
  step1Desc = "We confirm your visa route, check requirements, and outline the best approach.",
  step2Title = "Expert Preparation",
  step2Desc = "We prepare and review your application in detail, ensuring accuracy and compliance.",
  step3Title = "Submission & Ongoing Support",
  step3Desc = "We manage the submission and keep you fully updated until your decision is made.",
}: HowItWorksProps) {
  return (
    <div id="how-it-works">
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Proven Visa Application Process
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle h-8 w-8 text-black"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
                  </div>
                  <div className="absolute top-4 left-8 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">1</span>
                  </div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl lg:text-2xl font-semibold text-navy mb-2">{step1Title}</h3>
                  <p className="text-lg text-foreground">{step1Desc}</p>
                </div>
              </div>
              <div className="absolute left-8 top-16 w-0.5 h-12 bg-accent/30"></div>
              <div className="hidden lg:block absolute right-0 top-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-6 w-6 text-accent/50"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-8 w-8 text-black"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  </div>
                  <div className="absolute top-4 left-8 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">2</span>
                  </div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl lg:text-2xl font-semibold text-navy mb-2">{step2Title}</h3>
                  <p className="text-lg text-foreground">{step2Desc}</p>
                </div>
              </div>
              <div className="absolute left-8 top-16 w-0.5 h-12 bg-accent/30"></div>
              <div className="hidden lg:block absolute right-0 top-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-6 w-6 text-accent/50"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-start gap-6 lg:gap-8">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-8 w-8 text-black"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                  </div>
                  <div className="absolute top-4 left-8 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">3</span>
                  </div>
                </div>
                <div className="flex-1 pb-12">
                  <h3 className="text-xl lg:text-2xl font-semibold text-navy mb-2">{step3Title}</h3>
                  <p className="text-lg text-foreground">{step3Desc}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 transform shadow-lg h-11 rounded-md px-8"
            >
              Start Your Application Today
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 h-5 w-5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


