import Link from "next/link";

export default function ServiceDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-3">Student Visa Services – From £650</h2>
          <p className="text-[18px] text-black mb-4">We help international students secure their UK student visas successfully.</p>
          <p className="text-[18px] text-black mb-6">Our service includes:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">🧭</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Guided Process</h3>
              <p className="text-muted-foreground">Step-by-step guidance through the entire visa process.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">📄</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Document Review</h3>
              <p className="text-muted-foreground">Financial evidence, CAS, and English language proof checked.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Dependants</h3>
              <p className="text-muted-foreground">Applications for partners and children prepared alongside yours.</p>
            </div>
            <div className="group rounded-xl border border-gray-200 p-6 bg-white shadow-sm flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/50 hover:scale-[1.02] hover:bg-accent [&_*]:transition-colors [&_*]:duration-300 hover:text-black">
              <div className="text-4xl mb-3">📬</div>
              <h3 className="text-lg font-semibold text-navy mb-2">Submission & Updates</h3>
              <p className="text-muted-foreground">We submit your application and provide updates until your decision arrives.</p>
            </div>
          </div>

          <div className="mt-8 mx-auto w-full sm:w-auto max-w-[680px] text-center px-5 py-3 rounded-full bg-accent/10 ring-1 ring-accent/30 text-navy font-semibold text-lg sm:text-xl">
            🚀 Our goal: <span className="font-bold">maximise your chances of approval</span> and get your visa <span className="font-bold">right the first time</span>.
          </div>
          
          <div className="mt-6">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-[18px] font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg transform shadow-lg h-11 rounded-md px-6"
            >
              Apply for a Student Visa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


