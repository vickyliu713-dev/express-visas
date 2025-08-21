"use client";
import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

export default function GlobalTalentFAQ({ title = "Global Talent Visa FAQs" }: { title?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const contentStyle: CSSProperties = {
    ["--radix-accordion-content-height" as string]:
      "var(--radix-collapsible-content-height)",
    ["--radix-accordion-content-width" as string]:
      "var(--radix-collapsible-content-width)",
  } as CSSProperties;

  const Item = (
    id: string,
    q: string,
    a: ReactNode
  ) => (
    <div data-state={openId === id ? "open" : "closed"} data-orientation="vertical" className="border border-border rounded-lg px-6 bg-background shadow-sm">
      <h3 data-orientation="vertical" data-state="closed" className="flex">
        <button
          type="button"
          aria-controls={`gtfaq-${id}`}
          aria-expanded={openId === id}
          data-state={openId === id ? "open" : "closed"}
          data-orientation="vertical"
          id={`gtfaq-trigger-${id}`}
          className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
          onClick={() => setOpenId(openId === id ? null : id)}
        >
          {q}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
      </h3>
      <div
        data-state={openId === id ? "open" : "closed"}
        id={`gtfaq-${id}`}
        hidden={openId !== id}
        role="region"
        aria-labelledby={`gtfaq-trigger-${id}`}
        data-orientation="vertical"
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style={contentStyle}
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
            "Do your fees include Home Office visa charges?",
            <>
              No—our fee covers professional services only. You will pay the endorsement fee (£561), visa application (from £205), and the Immigration Health Surcharge (typically £1,035 per person per year) separately.
            </>
          )}
          {Item(
            "2",
            "Which endorsing bodies are included?",
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Academia/Research</strong>: Royal Society, British Academy, UKRI, Royal Academy of Engineering</li>
              <li><strong>Arts & Culture</strong>: Arts Council England</li>
              <li><strong>Digital Technology</strong>: Tech Nation or similar</li>
            </ul>
          )}
          {Item(
            "3",
            "What if I’ve already won a prestigious prize?",
            <>
              If your prize is on the eligible Home Office list, you may apply directly without an endorsement. Standard visa fees and surcharge still apply.
            </>
          )}
          {Item(
            "4",
            "How long does the Global Talent visa take?",
            <>
              <strong>Endorsement:</strong> Varies by endorsing body, typically a few weeks to a couple of months.<br/>
              <strong>Visa decision:</strong> ~3 weeks from abroad or ~8 weeks inside the UK.
            </>
          )}
          {Item(
            "5",
            "Can I bring family?",
            <>
              Yes. Partners and children can join. Each pays the visa fee (from £766) and the Immigration Health Surcharge per person.
            </>
          )}
        </div>
      </div>
    </section>
  );
}


