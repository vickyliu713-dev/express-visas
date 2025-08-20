import Link from "next/link";

export default function SkilledServiceDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3">UK Skilled Worker Visa – From £800</h2>
          <p className="text-[18px] text-black mb-4">
            We provide complete support for individuals applying for a UK Skilled Worker visa.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">🧭</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Eligibility Check</h3>
              <p className="text-muted-foreground">Eligibility assessment and requirements check.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-lg font-semibold text-navy mb-2">CoS & Evidence</h3>
              <p className="text-muted-foreground">Review of Certificate of Sponsorship and supporting documents.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Application Prep</h3>
              <p className="text-muted-foreground">Preparation and submission of your Skilled Worker visa application.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">📬</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Updates</h3>
              <p className="text-muted-foreground">Ongoing updates until your visa decision is made.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-6 rounded-xl border border-gray-200 bg-accent/10 ring-1 ring-accent/30 p-6 text-left">
            <h3 className="text-lg font-semibold text-navy mb-3">Our service includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Eligibility assessment and requirements check</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Review of your Certificate of Sponsorship and supporting documents</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Preparation and submission of your Skilled Worker visa application</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Ongoing updates until your visa decision is made</span></li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 btn-cta transform shadow-lg h-11 rounded-md px-6"
            >
              Apply for a Skilled Worker Visa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


