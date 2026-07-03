import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/layout/Container";
import { routes } from "@/config/routes";
import type { Product } from "@/types";

export interface ProductSpotlightProps {
  featured: Product;
  others: Product[];
}

export function ProductSpotlight({ featured, others }: ProductSpotlightProps) {
  return (
    <section className="py-24 md:py-32" aria-labelledby="spotlight-heading">
      <Container size="wide">
        <p className="text-eyebrow">Products</p>
        <h2 id="spotlight-heading" className="text-display mt-4 text-foreground">
          Technologies in development
        </h2>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <p className="text-mono-label">{featured.category}</p>
              <Badge status={featured.status} />
            </div>
            <h3 className="text-display mt-6 text-foreground">{featured.name}</h3>
            <p className="mt-6 max-w-lg text-body text-silver">
              {featured.description}
            </p>
            <Link
              href={routes.product(featured.slug)}
              className="mt-8 inline-block text-small text-champagne hover:text-foreground"
            >
              Explore technology →
            </Link>
          </div>

          <div className="surface-plate relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl">
            <div className="absolute inset-0 hero-grid-bg opacity-50" />
            <div className="relative text-center">
              <p className="text-mono-label">Concept interface</p>
              <p className="mt-2 text-caption text-silver">
                Honest status — not publicly launched
              </p>
            </div>
          </div>
        </div>

        {others.length > 0 && (
          <div className="mt-16">
            <p className="text-mono-label mb-4">More technologies</p>
            <div className="product-filmstrip flex gap-4 overflow-x-auto pb-2">
              {others.map((product) => (
                <Link
                  key={product.slug}
                  href={routes.product(product.slug)}
                  className="surface-steel min-w-[200px] shrink-0 rounded-xl px-6 py-4 hover:border-champagne/30"
                >
                  <p className="text-small font-medium text-foreground">
                    {product.name}
                  </p>
                  <p className="mt-1 text-caption text-silver">{product.category}</p>
                </Link>
              ))}
              <Link
                href={routes.products}
                className="surface-steel flex min-w-[160px] shrink-0 items-center justify-center rounded-xl px-6 py-4 text-small text-champagne"
              >
                View all →
              </Link>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
