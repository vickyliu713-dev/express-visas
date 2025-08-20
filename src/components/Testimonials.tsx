type TestimonialsProps = {
  aQuote?: string;
  aName?: string;
  aRole?: string;
  bQuote?: string;
  bName?: string;
  bRole?: string;
  cQuote?: string;
  cName?: string;
  cRole?: string;
};

export default function Testimonials({
  aQuote =
    "Express Visas made my UK spouse visa application stress-free. Clear guidance and no delays. Highly recommended!",
  aName = "Aisha",
  aRole = "Family Visa Client",
  bQuote =
    "Got my student visa approved first time. The team explained everything clearly and handled all the paperwork.",
  bName = "Rahul",
  bRole = "Student Visa Client",
  cQuote =
    "I was worried about my visitor visa being refused, but Express Visas guided me perfectly. Visa granted in 2 weeks!",
  cName = "Maria",
  cRole = "Visitor Visa Client",
}: TestimonialsProps) {
  return (
    <div id="testimonials">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-4">
              2,000+ Successful Visa Applications from Clients in 30+ Countries
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            {aQuote ? (
              <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm relative hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#08305e" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                <div className="mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic flex-1">&quot;{aQuote}&quot;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-accent text-black font-semibold">A</span>
                  </span>
                  <div>
                    <div className="font-semibold text-navy">{aName}</div>
                    <div className="text-sm text-muted-foreground">{aRole}</div>
                  </div>
                </div>
                </div>
              </div>
            ) : null}

            {/* Card 2 */}
            {bQuote ? (
              <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm relative hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#08305e" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                <div className="mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic flex-1">&quot;{bQuote}&quot;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-accent text-black font-semibold">R</span>
                  </span>
                  <div>
                    <div className="font-semibold text-navy">{bName}</div>
                    <div className="text-sm text-muted-foreground">{bRole}</div>
                  </div>
                </div>
                </div>
              </div>
            ) : null}

            {/* Card 3 */}
            {cQuote ? (
              <div className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm relative hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <div className="p-6 flex flex-col flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#08305e" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote h-8 w-8 mb-4"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                <div className="mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                    ))}
                  </div>
                </div>
                  <p className="text-foreground mb-6 leading-relaxed italic flex-1">&quot;{cQuote}&quot;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-accent text-black font-semibold">M</span>
                  </span>
                  <div>
                    <div className="font-semibold text-navy">{cName}</div>
                    <div className="text-sm text-muted-foreground">{cRole}</div>
                  </div>
                </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap">
              <div className="flex items-center gap-1">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-4 w-4 fill-yellow-400 text-yellow-400"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  ))}
                </div>
              </div>
              <span className="font-semibold text-navy ml-2">5.0/5</span>
              <span className="text-sm text-muted-foreground ml-2">Based on Google Reviews</span>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}


