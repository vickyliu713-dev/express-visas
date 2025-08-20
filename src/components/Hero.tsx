import Link from "next/link";

type HeroProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
};

export default function Hero({
  title = "UK Visa Experts",
  subtitle =
    "Fast, reliable UK visa support for study, work, family, and visitor applications with expert guidance.",
  imageSrc = "/hero-visa-consultation-w-BVZME7.jpg",
}: HeroProps) {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container relative z-10 mx-auto px-4 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                {title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 transform shadow-lg rounded-md group text-base sm:text-lg px-4 sm:px-12 py-3 sm:py-4 h-auto font-semibold border-2 border-accent/30 hover:border-accent/60 transition-all duration-300 text-center leading-snug max-w-[80vw] sm:max-w-none"
              >
                Start Your Visa Application
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-5 w-5 text-accent"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-sm font-medium">#1 Rated Visa Service</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-5 w-5 text-accent"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-sm font-medium">2,000+ UK Visas Approved</span>
              </div>
              <div className="flex items-center gap-2 text-white/90">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-big h-5 w-5 text-accent"
                >
                  <path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
                  <path d="m9 11 3 3L22 4"></path>
                </svg>
                <span className="text-sm font-medium">98% Success Rate</span>
              </div>
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={imageSrc}
                alt="Professional UK visa experts office"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


