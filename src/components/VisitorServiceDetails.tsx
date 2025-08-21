import Link from "next/link";

export default function VisitorServiceDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3">UK Visitor Visa – From £100</h2>
          <p className="text-[18px] text-black mb-4">
            Whether you’re visiting the UK for a holiday, to see family, or for business, we provide complete support with your visa application.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center mb-6">
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black w-full h-full">
              <div className="text-4xl mb-3">🧾</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Eligibility Guidance</h3>
              <p className="text-muted-foreground">Guidance on eligibility and requirements.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black w-full h-full">
              <div className="text-4xl mb-3">📂</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Document Review</h3>
              <p className="text-muted-foreground">Finances, ties to home country, and travel plans reviewed.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black w-full h-full">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Strong Application</h3>
              <p className="text-muted-foreground">We prepare a strong application to reduce refusal risk.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black w-full h-full">
              <div className="text-4xl mb-3">📬</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Submission & Updates</h3>
              <p className="text-muted-foreground">We submit your application and keep you updated until decision.</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-2 rounded-xl border border-gray-200 bg-accent/10 ring-1 ring-accent/30 p-6 text-left">
            <h3 className="text-lg font-semibold text-navy mb-3">Our service includes:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Guidance on eligibility and requirements</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Review of supporting documents (finances, ties to home country, travel plans)</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Preparation of a strong application to reduce the risk of refusal</span></li>
              <li className="flex items-start gap-2"><span className="text-green-600">✔</span><span className="text-[18px] text-black">Submission and updates until your decision arrives</span></li>
            </ul>
          </div>

          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] font-semibold ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 btn-cta transform shadow-lg h-11 rounded-md px-6"
            >
              Apply for a Visitor Visa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


