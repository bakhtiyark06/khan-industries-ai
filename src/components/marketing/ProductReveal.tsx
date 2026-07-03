import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { routes } from "@/config/routes";
import type { Product } from "@/types";
import { cn } from "@/lib/utils";

export interface ProductRevealProps {
  product: Product;
  index: number;
}

export function ProductReveal({ product, index }: ProductRevealProps) {
  const reversed = index % 2 === 1;

  return (
    <section
      className={cn(
        "border-b border-chrome/40 py-24 md:py-32",
        index % 2 === 0 ? "bg-void" : "bg-graphite/50",
      )}
      aria-labelledby={`product-${product.slug}`}
    >
      <div className="mx-auto grid max-w-[90rem] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <div className={cn(reversed && "lg:order-2")}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-mono-label">{product.category}</p>
            <Badge status={product.status} />
          </div>
          <h2
            id={`product-${product.slug}`}
            className="text-display mt-6 text-foreground"
          >
            {product.name}
          </h2>
          <p className="mt-6 text-body text-silver">{product.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {product.outcomes.slice(0, 3).map((outcome) => (
              <span
                key={outcome}
                className="rounded-full border border-chrome bg-steel px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-silver"
              >
                {outcome}
              </span>
            ))}
          </div>
          <Link
            href={routes.product(product.slug)}
            className="mt-8 inline-block text-small text-champagne hover:text-foreground"
          >
            Explore technology →
          </Link>
        </div>

        <div
          className={cn(
            "surface-plate relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl",
            reversed && "lg:order-1",
          )}
        >
          <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-40" />
          <div className="relative text-center">
            <p className="text-mono-label">Concept interface</p>
            <p className="mt-2 text-caption text-silver">{product.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
