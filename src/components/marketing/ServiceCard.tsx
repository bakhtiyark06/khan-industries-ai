import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { routes } from "@/config/routes";
import type { Service } from "@/types";

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const href = service.featured
    ? routes.solution(service.slug)
    : routes.solutions;

  return (
    <Card as="article" className="flex h-full flex-col hover:border-slate-muted motion-safe:transition-colors">
      <p className="text-xs font-medium uppercase tracking-wider text-silver">
        {service.category}
      </p>
      <h3 className="mt-2 text-lg font-medium text-foreground">
        <Link
          href={href}
          className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {service.name}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">
        {service.description}
      </p>
      <Link
        href={href}
        className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
      >
        {service.featured ? "View service" : "Browse solutions"}
      </Link>
    </Card>
  );
}
