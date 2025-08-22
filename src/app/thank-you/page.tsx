import Link from "next/link";
import Script from "next/script";

export default function ThankYouPage() {
  return (
    <>
      <Script id="gtag-conversion-thank-you" strategy="afterInteractive">
        {`
  gtag('event', 'conversion', {
      'send_to': 'AW-17483022528/NTAsCIf9gocbEMCBx5BB',
      'value': 1.0,
      'currency': 'GBP'
  });
        `}
      </Script>
      <main className="min-h-[70vh] flex items-center justify-center bg-secondary px-4 py-16">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl border border-gray-200 p-6 sm:p-8">
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg">
          <span className="text-black text-xl">✓</span>
        </div>
        <h1 className="mt-4 text-center text-2xl sm:text-3xl font-bold text-navy">
          ✅ Thank You – Your Application Has Been Submitted
        </h1>
        <p className="mt-4 text-center text-base sm:text-lg text-muted-foreground leading-relaxed">
          Our team will review your details and contact you as soon as possible.
        </p>
        <div className="mt-6 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg transform shadow-lg h-11 rounded-md px-6"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
      </main>
    </>
  );
}


