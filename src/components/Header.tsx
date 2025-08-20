"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
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
                className="lucide lucide-crown h-6 w-6 text-black"
              >
                <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path>
                <path d="M5 21h14"></path>
              </svg>
            </div>
            <div className="text-2xl font-bold text-navy">Express Visas</div>
          </Link>

          {/* Services dropdown (open on hover) */}
          <div
            className="relative group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent h-10 px-4 py-2 text-navy hover:text-white font-medium"
              type="button"
              aria-haspopup="menu"
              aria-expanded={isHovering}
            >
              Services
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
                className="lucide lucide-chevron-down ml-1 h-4 w-4"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>

            {/* Dropdown panel */}
            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded-md border border-border bg-white shadow-lg ring-1 ring-black/5 group-hover:translate-y-0 translate-y-1">
              <div className="py-2">
                <Link
                  href="/student-visa"
                  className="block px-4 py-2 text-sm text-navy hover:bg-accent hover:text-white transition-colors"
                >
                  UK Student Visa
                </Link>
              </div>
            </div>
          </div>

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


