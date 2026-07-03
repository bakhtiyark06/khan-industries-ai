import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { routes } from "@/config/routes";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const href = service.featured
    ? routes.solution(service.slug)
    : `${routes.contact}?interest=${encodeURIComponent(service.name)}`;

  const actionLabel = service.featured ? "View service" : "Request consultation";

  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <p className="text-caption font-medium text-silver">{service.category}</p>
      <h3 className="text-h3 mt-2 text-foreground">
        <Link
          href={href}
          className="hover:text-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-small leading-relaxed text-silver">
        {service.description}
      </p>
      <Button href={href} variant="secondary" size="sm" className="mt-6 w-full sm:w-auto">
        {actionLabel}
      </Button>
    </Card>
  );
}
