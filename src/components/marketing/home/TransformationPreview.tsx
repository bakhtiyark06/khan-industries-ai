import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/config/routes";
import type { Service } from "@/types";

export interface TransformationPreviewProps {
  services: Service[];
}

export function TransformationPreview({ services }: TransformationPreviewProps) {
  return (
    <section className="border-y border-chrome/50 bg-titanium py-24 md:py-32">
      <Container size="wide">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-eyebrow">Solutions</p>
            <h2 className="text-display mt-4 text-foreground">
              Business transformation
            </h2>
          </div>
          <Link
            href={routes.solutions}
            className="text-small text-silver hover:text-foreground"
          >
            View all solutions →
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((service) => {
            const href = service.featured
              ? routes.solution(service.slug)
              : `${routes.contact}?interest=${encodeURIComponent(service.name)}`;

            return (
              <Link
                key={service.slug}
                href={href}
                className="group surface-plate rounded-2xl p-8 md:p-10 champagne-accent-top card-interactive block"
              >
                <p className="text-mono-label">{service.category}</p>
                <h3 className="text-h2 mt-4 text-foreground group-hover:text-titanium-light">
                  {service.name}
                </h3>
                <p className="mt-4 text-body text-silver">{service.description}</p>
                <p className="mt-6 text-small text-champagne">
                  Explore transformation →
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
