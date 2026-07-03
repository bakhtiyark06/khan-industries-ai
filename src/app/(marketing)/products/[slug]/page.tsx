import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/Hero";
import { Badge } from "@/components/ui/Badge";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { getProductBySlug } from "@/features/catalog";
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

  return (
    <>
      <Hero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
        primaryCta={{
          label: "Request consultation",
          href: `${routes.contact}?interest=${encodeURIComponent(product.name)}`,
        }}
      />

      <Section>
        <Container size="narrow">
          <div className="mb-6">
            <Badge status={product.status} />
          </div>
          <div className="space-y-8 text-silver">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Status</h2>
              <p className="mt-2 leading-relaxed">
                This product is currently marked{" "}
                <strong className="text-foreground">{product.status}</strong>.
                {product.status === "Concept" &&
                  " It is not publicly launched or available for purchase."}
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Target customer
              </h2>
              <p className="mt-2 leading-relaxed">{product.targetCustomer}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Value outcomes
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {product.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CallToAction
        title={`Discuss ${product.name}`}
        description="We do not sell what does not exist. If this concept fits your needs, we can explore consultation, waitlist interest, or a custom build path."
        primaryCta={{
          ...contactCta,
          href: `${routes.contact}?interest=${encodeURIComponent(product.name)}`,
        }}
      />
    </>
  );
}
