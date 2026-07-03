import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/Hero";
import { Badge } from "@/components/ui/Badge";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CallToAction } from "@/components/marketing/CallToAction";
import { StickyCta } from "@/components/marketing/StickyCta";
import { CubeIllustration } from "@/components/marketing/HeroVisual";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Grid } from "@/components/layout/Grid";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { getProductBySlug, getRelatedProducts } from "@/features/catalog";
import { getAllProductSlugs } from "@/content/products";
import { buildPageMetadata } from "@/lib/seo/metadata";

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return buildPageMetadata({
      title: "Product not found",
      path: routes.product(slug),
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: product.name,
    description: product.description,
    path: routes.product(slug),
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const consultationHref = `${routes.contact}?interest=${encodeURIComponent(product.name)}`;
  const relatedProducts = getRelatedProducts(slug);

  return (
    <>
      <Hero
        variant="interior"
        eyebrow={product.category}
        title={product.name}
        description={product.description}
        primaryCta={{
          label: "Request consultation",
          href: consultationHref,
        }}
      />

      <Section>
        <Container size="narrow">
          <div className="mb-6">
            <Badge status={product.status} />
          </div>
          <div className="space-y-8 text-silver">
            <div>
              <h2 className="text-h3 text-foreground">Status</h2>
              <p className="mt-2 text-body leading-relaxed">
                This product is currently marked{" "}
                <strong className="text-foreground">{product.status}</strong>.
                {product.status === "Concept" &&
                  " It is not publicly launched or available for purchase."}
              </p>
            </div>
            <div>
              <h2 className="text-h3 text-foreground">Target customer</h2>
              <p className="mt-2 text-body leading-relaxed">
                {product.targetCustomer}
              </p>
            </div>
            <div>
              <h2 className="text-h3 text-foreground">Value outcomes</h2>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-body">
                {product.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-navy-elevated p-8">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <CubeIllustration className="h-14 w-14 shrink-0" />
                <div>
                  <h2 className="text-h3 text-foreground">System concept</h2>
                  <p className="mt-2 text-small leading-relaxed">
                    Architecture and interface designs will be shared as this
                    product moves beyond Concept status. We do not present
                    mockups as shipped products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {relatedProducts.length > 0 && (
        <Section variant="muted" aria-labelledby="related-heading">
          <SectionHeader
            id="related-heading"
            title="Related products"
            description="Other concepts in a similar space."
          />
          <Grid cols={3}>
            {relatedProducts.map((related) => (
              <ProductCard key={related.slug} product={related} />
            ))}
          </Grid>
        </Section>
      )}

      <div className="pb-20">
        <CallToAction
          title={`Discuss ${product.name}`}
          description="We do not sell what does not exist. If this concept fits your needs, we can explore consultation, waitlist interest, or a custom build path."
          primaryCta={{
            ...contactCta,
            href: consultationHref,
          }}
        />
      </div>

      <StickyCta label="Request consultation" href={consultationHref} />
    </>
  );
}
