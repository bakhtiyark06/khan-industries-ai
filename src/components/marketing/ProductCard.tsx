import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { routes } from "@/config/routes";
import type { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card as="article" className="flex h-full flex-col hover:border-slate-muted motion-safe:transition-colors">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-foreground">
          <Link
            href={routes.product(product.slug)}
            className="hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {product.name}
          </Link>
        </h3>
        <Badge status={product.status} />
      </div>
      <p className="mt-2 text-xs text-silver">{product.category}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-silver">
        {product.description}
      </p>
      <Link
        href={routes.product(product.slug)}
        className="mt-4 text-sm font-medium text-accent hover:text-accent-hover"
      >
        Learn more
      </Link>
    </Card>
  );
}
