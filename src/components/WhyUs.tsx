export default function WhyUs() {
  return (
    <div id="why-choose-us">
      <section className="py-16 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-navy/5 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-accent/5 to-navy/5 rounded-full blur-2xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6 leading-tight">
              Trusted Visa Experts
            </h2>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent"></div>
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-accent"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:border-accent/20 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-8 w-8 text-black relative z-10"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                </div>
                <h3 className="text-xs font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors duration-300">2,000+ Successful Visa Applications</h3>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:border-accent/20 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-8 w-8 text-black relative z-10"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                </div>
                <h3 className="text-xs font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors duration-300">4.9/5 Rating (200+ Reviews)</h3>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:border-accent/20 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe h-8 w-8 text-black relative z-10"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
                </div>
                <h3 className="text-xs font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors duration-300">Clients from 30+ Countries</h3>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:border-accent/20 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up h-8 w-8 text-black relative z-10"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                </div>
                <h3 className="text-xs font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors duration-300">98% Success Rate</h3>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Card 5 */}
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100/50 hover:border-accent/20 hover:shadow-xl transition-all duration-500 text-center transform hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-accent/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-accent via-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-crown h-8 w-8 text-black relative z-10"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
                </div>
                <h3 className="text-xs font-bold text-navy leading-tight tracking-tight group-hover:text-navy/80 transition-colors duration-300">#1 Rated UK Visa Service</h3>
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


