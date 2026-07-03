import Link from "next/link";
import { routes } from "@/config/routes";
import type { Service } from "@/types";

export interface TransformationChapterProps {
  category: string;
  thesis: string;
  services: Service[];
}

export function TransformationChapter({
  category,
  thesis,
  services,
}: TransformationChapterProps) {
  return (
    <section className="border-b border-chrome/40 py-20 md:py-28">
      <div className="mx-auto max-w-[90rem] px-6">
        <p className="text-eyebrow">{category}</p>
        <h2 className="text-display mt-4 max-w-3xl text-foreground">{thesis}</h2>

        <div className="mt-12 divide-y divide-chrome/50">
          {services.map((service) => {
            const href = service.featured
              ? routes.solution(service.slug)
              : `${routes.contact}?interest=${encodeURIComponent(service.name)}`;

            return (
              <Link
                key={service.slug}
                href={href}
                className="group flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between"
              >
                <div className="max-w-2xl">
                  <h3 className="text-h2 text-foreground group-hover:text-titanium-light">
                    {service.name}
                  </h3>
                  <p className="mt-3 text-body text-silver">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.outcomes.slice(0, 2).map((outcome) => (
                      <span
                        key={outcome}
                        className="font-mono text-[11px] uppercase tracking-wide text-champagne"
                      >
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-small text-champagne shrink-0">
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
