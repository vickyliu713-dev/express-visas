"use client";
import type { CSSProperties } from "react";
import { useState } from "react";

type FAQProps = { title?: string };
export default function FAQ({ title = "FAQ" }: FAQProps) {
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
              {/* Item 1 */}
              <div data-state={openId === "1" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="faq-1"
                    aria-expanded={openId === "1"}
                    data-state={openId === "1" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="faq-trigger-1"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "1" ? null : "1")}
                  >
                    Do your fees include Home Office visa charges?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "1" ? "open" : "closed"}
                  id="faq-1"
                  hidden={openId !== "1"}
                  role="region"
                  aria-labelledby="faq-trigger-1"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    No, our fee is for professional services. Home Office visa fees and the Immigration Health Surcharge are paid separately.
                  </div>
                </div>
              </div>

              {/* Item 2 removed per request */}

              {/* Item 3 */}
              <div data-state={openId === "3" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="faq-3"
                    aria-expanded={openId === "3"}
                    data-state={openId === "3" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="faq-trigger-3"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "3" ? null : "3")}
                  >
                    Can you help employers apply for sponsorship licences?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "3" ? "open" : "closed"}
                  id="faq-3"
                  hidden={openId !== "3"}
                  role="region"
                  aria-labelledby="faq-trigger-3"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    No, we only handle individual Skilled Worker applications with a Certificate of Sponsorship.
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div data-state={openId === "4" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="faq-4"
                    aria-expanded={openId === "4"}
                    data-state={openId === "4" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="faq-trigger-4"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "4" ? null : "4")}
                  >
                    How long does a Skilled Worker visa take?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "4" ? "open" : "closed"}
                  id="faq-4"
                  hidden={openId !== "4"}
                  role="region"
                  aria-labelledby="faq-trigger-4"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    Most applications are processed within 3–8 weeks. Priority services may be available depending on your country.
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div data-state={openId === "5" ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
                <h3 data-orientation="vertical" data-state="closed" className="flex">
                  <button
                    type="button"
                    aria-controls="faq-5"
                    aria-expanded={openId === "5"}
                    data-state={openId === "5" ? "open" : "closed"}
                    data-orientation="vertical"
                    id="faq-trigger-5"
                    className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
                    data-radix-collection-item=""
                    onClick={() => setOpenId(openId === "5" ? null : "5")}
                  >
                    Can I bring my family with me on a Skilled Worker visa?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
                  </button>
                </h3>
                <div
                  data-state={openId === "5" ? "open" : "closed"}
                  id="faq-5"
                  hidden={openId !== "5"}
                  role="region"
                  aria-labelledby="faq-trigger-5"
                  data-orientation="vertical"
                  className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  style={faqContentStyle}
                >
                  <div className="pb-6 text-muted-foreground leading-relaxed">
                    Yes. We can also prepare dependant applications for your partner and children.
                  </div>
                </div>
              </div>

              {/* Item 6 removed per request */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


