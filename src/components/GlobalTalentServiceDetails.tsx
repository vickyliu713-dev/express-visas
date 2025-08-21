import Link from "next/link";

export default function GlobalTalentServiceDetails() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-3">
            UK Global Talent Visa – From £800
          </h2>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            We provide complete support for individuals applying for a UK Global Talent visa.
          </p>
        </div>

        {/* 2x2 feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center max-w-4xl mx-auto">
          <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
            <div className="text-4xl mb-3">🎯</div>
            <div className="text-xl font-semibold text-navy mb-2">Endorsement Management</div>
            <p className="text-muted-foreground">
              We handle endorsement applications to approved bodies in academia, research, arts & culture, or digital tech.
            </p>
          </div>
          <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
            <div className="text-4xl mb-3">🏆</div>
            <div className="text-xl font-semibold text-navy mb-2">Profile Review</div>
            <p className="text-muted-foreground">
              Detailed review of achievements, portfolio, publications, awards, and impact to build a strong case.
            </p>
          </div>
          <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
            <div className="text-4xl mb-3">📝</div>
            <div className="text-xl font-semibold text-navy mb-2">Application Preparation</div>
            <p className="text-muted-foreground">
              Assistance with submitting both endorsement and visa applications with precise documentation.
            </p>
          </div>
          <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
            <div className="text-4xl mb-3">📬</div>
            <div className="text-xl font-semibold text-navy mb-2">End‑to‑End Guidance</div>
            <p className="text-muted-foreground">
              Clear guidance at every step from strategy to decision, with responsive updates throughout.
            </p>
          </div>
        </div>

        {/* Bullet box */}
        <div className="max-w-4xl mx-auto mt-6 rounded-xl border border-gray-200 bg-accent/10 ring-1 ring-accent/30 p-6 text-left">
          <h3 className="text-lg font-semibold text-navy mb-3">Our full‑service package includes:</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Endorsement application management (approved endorsing body): academia, research, arts, culture or digital tech</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Detailed review of your profile, achievements, and supporting documentation</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Assistance with submitting both endorsement and visa applications</span></li>
            <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Clear guidance through every step until your decision is made</span></li>
          </ul>
        </div>

        <div className="text-center mt-8">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 btn-cta transform shadow-lg rounded-md px-8 py-3"
          >
            Apply for a Global Talent Visa
          </Link>
        </div>
      </div>
    </section>
  );
}


