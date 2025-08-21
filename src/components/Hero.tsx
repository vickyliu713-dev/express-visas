import Link from "next/link";
import Image, { type StaticImageData } from "next/image";

type HeroProps = {
  title?: React.ReactNode;
  subtitle?: string;
  imageSrc?: string | StaticImageData;
  ctaText?: string;
};

export default function Hero({
  title = "UK Visa Experts",
  subtitle =
    "Fast, reliable UK visa support for study, work, family, and visitor applications with expert guidance.",
  imageSrc = "/hero-visa-consultation-w-BVZME7.jpg",
  ctaText = "Start Your Visa Application",
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
                className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 btn-cta transform shadow-lg rounded-md group text-[18px] px-4 sm:px-12 py-3 sm:py-4 h-auto font-semibold border-2 border-accent/30 hover:border-accent/60 text-center leading-snug max-w-[80vw] sm:max-w-none"
              >
                {ctaText}
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
          <div className="relative lg:block hidden max-w-[560px] w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-[400px]">
              <Image
                src={imageSrc}
                alt="Professional UK visa experts office"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                priority
                fetchPriority="high"
                placeholder={typeof imageSrc === "string" ? undefined : "blur"}
                quality={90}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


