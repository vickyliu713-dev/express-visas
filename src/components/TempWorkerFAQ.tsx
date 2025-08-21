"use client";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function TempWorkerFAQ({ title = "Temporary Worker Visa FAQs" }: { title?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const vars: CSSProperties = {
    ["--radix-accordion-content-height" as string]:
      "var(--radix-collapsible-content-height)",
    ["--radix-accordion-content-width" as string]:
      "var(--radix-collapsible-content-width)",
  } as CSSProperties;

  const Item = (id: string, q: string, a: React.ReactNode) => (
    <div data-state={openId === id ? "open" : "closed"} className="border border-border rounded-lg px-6 bg-background shadow-sm">
      <h3 className="flex">
        <button
          type="button"
          aria-controls={`tw-${id}`}
          aria-expanded={openId === id}
          id={`tw-t-${id}`}
          data-state={openId === id ? "open" : "closed"}
          className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
          onClick={() => setOpenId(openId === id ? null : id)}
        >
          {q}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
      </h3>
      <div
        id={`tw-${id}`}
        hidden={openId !== id}
        role="region"
        aria-labelledby={`tw-t-${id}`}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style={vars}
        data-state={openId === id ? "open" : "closed"}
      >
        <div className="pb-6 text-muted-foreground leading-relaxed">{a}</div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-navy mb-4">{title}</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {Item(
            "1",
            "Do your fees include Home Office charges?",
            <>No, our fee is for professional services only. Home Office visa fees (usually <strong>£298</strong>) and the Immigration Health Surcharge (IHS) are paid separately.</>
          )}
          {Item(
            "2",
            "What types of Temporary Worker visas are there?",
            <ul className="list-disc pl-5 space-y-1">
              <li>Creative Worker</li>
              <li>Charity Worker</li>
              <li>Religious Worker</li>
              <li>Government Authorised Exchange</li>
              <li>International Agreement</li>
              <li>Seasonal Worker</li>
            </ul>
          )}
          {Item(
            "3",
            "How long can I stay on a Temporary Worker visa?",
            <>Most routes allow up to <strong>12 months</strong>, though some may differ. Seasonal Worker visas are capped at <strong>6 months</strong>.</>
          )}
          {Item(
            "4",
            "Can I bring my family with me?",
            <>Yes, dependants may be eligible depending on the route. Each dependant pays the visa fee and IHS separately.</>
          )}
          {Item(
            "5",
            "Do I need a Certificate of Sponsorship (CoS)?",
            <>Yes, for most Temporary Worker categories you must have a CoS from a licensed sponsor before applying.</>
          )}
        </div>
      </div>
    </section>
  );
}


