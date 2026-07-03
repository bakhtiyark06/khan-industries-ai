import type { FeatureItem } from "@/components/marketing/FeatureGrid";

export interface PrinciplesStripProps {
  principles: FeatureItem[];
}

export function PrinciplesStrip({ principles }: PrinciplesStripProps) {
  return (
    <section className="py-24 md:py-32" aria-label="Principles">
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 divide-y divide-chrome md:grid-cols-3 md:divide-x md:divide-y-0">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className="px-8 py-10 md:px-12 md:py-0 motion-safe:animate-reveal-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <p className="text-mono-label text-champagne">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="text-h2 mt-4 text-foreground">{principle.title}</h3>
            <p className="mt-4 text-body text-silver">{principle.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
