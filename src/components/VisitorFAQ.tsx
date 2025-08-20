"use client";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function VisitorFAQ({ title = "Visitor Visa FAQs" }: { title?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const faqContentStyle: CSSProperties = {
    ["--radix-accordion-content-height" as string]:
      "var(--radix-collapsible-content-height)",
    ["--radix-accordion-content-width" as string]:
      "var(--radix-collapsible-content-width)",
  } as CSSProperties;

  return (
    <div id="faq">
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4" data-orientation="vertical">
              {/* Q1 */}
              <div data-state={openId === "1" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="vfaq-1"
                    aria-expanded={openId === "1"}
                    data-state={openId === "1" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="vfaq-trigger-1"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "1" ? null : "1")}
                  >
                    Do your fees include Home Office charges?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "1" ? "open" : "closed"}
                  id="vfaq-1"
                  hidden={openId !== "1"}
                  role="region"
                  aria-labelledby="vfaq-trigger-1"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    No, our fee is for professional services. Home Office visa fees are paid separately.
                  </div>
                </div>
              </div>

              {/* Q2 */}
              <div data-state={openId === "2" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="vfaq-2"
                    aria-expanded={openId === "2"}
                    data-state={openId === "2" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="vfaq-trigger-2"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "2" ? null : "2")}
                  >
                    Can I extend a visitor visa once I’m in the UK?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "2" ? "open" : "closed"}
                  id="vfaq-2"
                  hidden={openId !== "2"}
                  role="region"
                  aria-labelledby="vfaq-trigger-2"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    Visitor visas cannot normally be extended beyond 6 months. We’ll advise on your options if you want to stay longer.
                  </div>
                </div>
              </div>

              {/* Q3 */}
              <div data-state={openId === "3" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="vfaq-3"
                    aria-expanded={openId === "3"}
                    data-state={openId === "3" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="vfaq-trigger-3"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "3" ? null : "3")}
                  >
                    How much money do I need to show for a visitor visa?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "3" ? "open" : "closed"}
                  id="vfaq-3"
                  hidden={openId !== "3"}
                  role="region"
                  aria-labelledby="vfaq-trigger-3"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    There’s no fixed amount, but you must prove you can support yourself and your trip. We’ll guide you on the correct evidence.
                  </div>
                </div>
              </div>

              {/* Q4 */}
              <div data-state={openId === "4" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="vfaq-4"
                    aria-expanded={openId === "4"}
                    data-state={openId === "4" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="vfaq-trigger-4"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "4" ? null : "4")}
                  >
                    How long does a UK visitor visa take to process?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "4" ? "open" : "closed"}
                  id="vfaq-4"
                  hidden={openId !== "4"}
                  role="region"
                  aria-labelledby="vfaq-trigger-4"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    Most applications are processed within 3 weeks, though priority services may be faster.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



