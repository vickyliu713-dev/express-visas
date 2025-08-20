type WhyBulletsProps = {
  title?: string;
  bullets: string[];
};

export default function WhyBullets({ title = "Why Choose Us", bullets }: WhyBulletsProps) {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-navy mb-6">{title}</h2>
          <ul className="grid gap-3 text-left sm:text-center">
            {bullets.map((b, i) => (
              <li key={i} className="inline-flex items-start sm:items-center gap-2 justify-start sm:justify-center">
                <span className="text-accent text-xl">⭐</span>
                <span className="text-navy font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


