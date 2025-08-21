import Link from "next/link";

export default function Services() {
  return (
    <div id="services">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">
              Our Visa Services & Prices
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialise exclusively in UK visa applications, with an experienced team of visa experts and a proven track record of thousands of successful approvals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Student */}
            <div className="rounded-lg border border-gray-200 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🎓</span>
                </div>
                <h3 className="tracking-tight text-xl text-navy font-semibold">UK Student Visa</h3>
                <p className="text-lg text-black font-semibold">from £250</p>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between space-y-4">
                <div className="text-gray-600 leading-relaxed text-sm">
                  <ul className="space-y-2 text-left">
                    <li>• Professional support for international students applying to study in the UK</li>
                    <li>• Full application handling from start to finish</li>
                    <li>• Guidance on CAS, financial requirements, and dependant visas</li>
                    <li>• Maximises your chances of approval</li>
                  </ul>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold h-auto sm:h-10 px-3 sm:px-4 py-2 w-full mt-auto text-center leading-snug"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Spouse */}
            <div className="rounded-lg border border-gray-200 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👥</span>
                </div>
                <h3 className="tracking-tight text-xl text-navy font-semibold">UK Spouse Visa</h3>
                <p className="text-lg text-black font-semibold">from £450</p>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between space-y-4">
                <div className="text-gray-600 leading-relaxed text-sm">
                  <ul className="space-y-2 text-left">
                    <li>• Expert preparation of spouse and partner visa applications</li>
                    <li>• Ensures your case meets all Home Office requirements</li>
                    <li>• Covers relationship evidence and financial criteria</li>
                    <li>• Includes dependant applications</li>
                  </ul>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold h-auto sm:h-10 px-3 sm:px-4 py-2 w-full mt-auto text-center leading-snug"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Skilled Worker */}
            <div className="rounded-lg border border-gray-200 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="tracking-tight text-xl text-navy font-semibold">UK Skilled Worker Visa</h3>
                <p className="text-lg text-black font-semibold">from £400</p>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between space-y-4">
                <div className="text-gray-600 leading-relaxed text-sm">
                  <ul className="space-y-2 text-left">
                    <li>• Full support for individuals with a Certificate of Sponsorship</li>
                    <li>• Eligibility and requirements check</li>
                    <li>• Document review and preparation</li>
                    <li>• Complete submission and management of your application</li>
                  </ul>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold h-auto sm:h-10 px-3 sm:px-4 py-2 w-full mt-auto text-center leading-snug"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Visitor */}
            <div className="rounded-lg border border-gray-200 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg bg-white h-full flex flex-col">
              <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">✈️</span>
                </div>
                <h3 className="tracking-tight text-xl text-navy font-semibold">UK Visitor Visa</h3>
                <p className="text-lg text-black font-semibold">from £100</p>
              </div>
              <div className="p-6 pt-0 flex-1 flex flex-col justify-between space-y-4">
                <div className="text-gray-600 leading-relaxed text-sm">
                  <ul className="space-y-2 text-left">
                    <li>• Support for tourism, family visits, and business trips</li>
                    <li>• Guidance on eligibility and requirements</li>
                    <li>• Preparation of clear, well-documented applications</li>
                    <li>• Reduces the risk of refusals</li>
                  </ul>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-yellow-400 text-black hover:bg-yellow-500 font-semibold h-auto sm:h-10 px-3 sm:px-4 py-2 w-full mt-auto text-center leading-snug"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


