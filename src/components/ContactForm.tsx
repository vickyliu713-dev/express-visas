export default function ContactForm({ title = "Ready to Apply for Your UK Visa?", submitLabel = "Submit Application", placeholder = "Specify visa type, purpose, urgency — include as much detail as possible" }: { title?: string; submitLabel?: string; placeholder?: string }) {
  return (
    <div id="contact">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Fill out the form below and one of our visa specialists will be in touch shortly.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-lg">
              <div className="p-6 pt-6">
                <form className="space-y-6" method="post" action="/api/contact">
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="fullName">
                      Full Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="fullName"
                      placeholder="Your full name"
                      required
                      name="fullName"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="country">
                      Country
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="country"
                      placeholder="Your country of residence"
                      required
                      name="country"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="phone">
                      Phone Number (with country code)
                    </label>
                    <input
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="phone"
                      placeholder="Your number with country code (e.g. +44)"
                      required
                      name="phone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      id="email"
                      placeholder="Your email address"
                      required
                      name="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="visaApplication">
                      Visa Application Details
                    </label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-gray-200 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="visaApplication"
                      placeholder={placeholder}
                      rows={4}
                      required
                      name="details"
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 transform shadow-lg h-11 rounded-md px-8 w-full"
                    type="submit"
                  >
                    {submitLabel}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send ml-2 h-5 w-5"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


