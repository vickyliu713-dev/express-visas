"use client";
import type { CSSProperties } from "react";
import { useState } from "react";

export default function HealthCareFAQ({ title = "Health and Care Visa FAQs" }: { title?: string }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const styleVars: CSSProperties = {
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
          aria-controls={`hcf-${id}`}
          aria-expanded={openId === id}
          id={`hcf-t-${id}`}
          data-state={openId === id ? "open" : "closed"}
          className="flex flex-1 items-center justify-between hover:underline [&[data-state=open]>svg]:rotate-180 text-left font-semibold text-navy hover:text-accent transition-colors py-6"
          onClick={() => setOpenId(openId === id ? null : id)}
        >
          {q}
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 shrink-0 transition-transform duration-200"><path d="m6 9 6 6 6-6"></path></svg>
        </button>
      </h3>
      <div
        id={`hcf-${id}`}
        hidden={openId !== id}
        role="region"
        aria-labelledby={`hcf-t-${id}`}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        style={styleVars}
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
            "Do your fees include Home Office visa charges?",
            <>
              No. Our fee is for professional services only. The Home Office fee for a Health and Care visa is <strong>lower than a standard Skilled Worker visa</strong> (from £284 for up to 3 years, £551 for more than 3 years).
            </>
          )}
          {Item(
            "2",
            "Do I need to pay the Immigration Health Surcharge (IHS)?",
            <>No. Health and Care visa holders and their dependants are exempt from paying the IHS.</>
          )}
          {Item(
            "3",
            "How long does it take to get a Health and Care visa?",
            <>Most applications are processed within <strong>3 weeks</strong> from outside the UK and <strong>8 weeks</strong> inside the UK.</>
          )}
          {Item(
            "4",
            "Can I bring my family with me?",
            <>Yes. Partners and children can apply as your dependants under this visa.</>
          )}
          {Item(
            "5",
            "Which jobs qualify for a Health and Care visa?",
            <>Eligible roles include doctors, nurses, health professionals, and adult social care workers (such as senior care workers and care assistants).</>
          )}
        </div>
      </div>
    </section>
  );
}


