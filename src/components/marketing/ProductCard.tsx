import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CubeIcon } from "@/components/icons";
import { routes } from "@/config/routes";
import type { Product } from "@/types";

export interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-border-subtle pb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-slate text-silver">
          <CubeIcon className="h-5 w-5" />
        </div>
        <p className="text-caption font-medium text-silver">{product.category}</p>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <h3 className="text-h3 text-foreground">
          <Link
            href={routes.product(product.slug)}
            className="hover:text-accent-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted"
          >
            {product.name}
          </Link>
        </h3>
        <Badge status={product.status} />
      </div>

      <p className="mt-3 flex-1 text-small leading-relaxed text-silver">
        {product.description}
      </p>

      <Button
        href={routes.product(product.slug)}
        variant="secondary"
        size="sm"
        className="mt-6 w-full sm:w-auto"
      >
        Learn more
      </Button>
    </Card>
  );
}
