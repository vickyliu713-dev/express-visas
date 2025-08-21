"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Express Visas home" className="flex items-center gap-3">
            <div className="relative w-28 h-12 md:w-36 md:h-14 rounded-xl overflow-hidden shadow bg-white p-1">
              <Image
                src="/logo.jpg"
                alt="Express Visas logo"
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 768px) 144px, 112px"
                className="object-contain"
                quality={90}
              />
            </div>
          </Link>

          {/* Services links */}
          <nav className="hidden md:flex items-center justify-center gap-6">
            <Link href="/student-visa" className="px-3 py-2 text-sm text-navy rounded-md hover:bg-accent hover:text-white transition-colors">Student Visa</Link>
            <Link href="/family-visa" className="px-3 py-2 text-sm text-navy rounded-md hover:bg-accent hover:text-white transition-colors">Family Visa</Link>
            <Link href="/skilled-worker" className="px-3 py-2 text-sm text-navy rounded-md hover:bg-accent hover:text-white transition-colors">Skilled Worker Visa</Link>
            <Link href="/visitor-visa" className="px-3 py-2 text-sm text-navy rounded-md hover:bg-accent hover:text-white transition-colors">Visitor Visa</Link>
          </nav>

          {/* CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 whitespace-normal sm:whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:scale-105 transform shadow-lg h-auto sm:h-10 px-3 sm:px-4 py-2 text-center leading-snug max-w-[60vw] sm:max-w-none"
          >
            Start Your Visa Application
          </Link>
        </div>
      </nav>
    </header>
  );
}


