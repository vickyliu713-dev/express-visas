export default function ServiceDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">UK Student Visa (Tier 4) – What’s Included</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-navy mb-3">Our Service</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Eligibility check and document checklist tailored to your case</li>
                <li>Genuine Student route guidance and CAS readiness review</li>
                <li>Preparation of application forms and document formatting</li>
                <li>Advice on financial evidence and maintenance requirements</li>
                <li>Full submission and liaison until decision</li>
              </ul>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-navy mb-3">Fees & Timeline</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Professional fee: from £650</li>
                <li>Home Office and IHS fees paid separately</li>
                <li>Typical decision: 3–8 weeks; priority options available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


