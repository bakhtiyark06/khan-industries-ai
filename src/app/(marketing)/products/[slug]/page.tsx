import { notFound } from "next/navigation";
import Link from "next/link";
import { Hero } from "@/components/marketing/Hero";
import { Badge } from "@/components/ui/Badge";
import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";
import { StickyCta } from "@/components/marketing/StickyCta";
import { Section } from "@/components/layout/Section";
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

      <Section variant="default" containerSize="narrow">
        <div className="mb-8 flex items-center gap-3">
          <Badge status={product.status} />
        </div>

        <div className="surface-plate overflow-hidden rounded-2xl">
          <table className="w-full text-left text-small">
            <tbody className="divide-y divide-chrome/50">
              <tr>
                <th className="w-40 px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-champagne">
                  Status
                </th>
                <td className="px-6 py-4 text-silver">
                  {product.status}
                  {product.status === "Concept" &&
                    " — not publicly launched or available for purchase."}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-champagne">
                  Category
                </th>
                <td className="px-6 py-4 text-silver">{product.category}</td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-champagne">
                  Target customer
                </th>
                <td className="px-6 py-4 text-silver">
                  {product.targetCustomer}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-4 font-mono text-[11px] uppercase tracking-wide text-champagne">
                  Outcomes
                </th>
                <td className="px-6 py-4 text-silver">
                  {product.outcomes.join(" · ")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="surface-plate mt-8 rounded-2xl p-8 champagne-accent-top">
          <p className="text-mono-label">System architecture</p>
          <p className="mt-4 text-body text-silver">
            Architecture and interface designs will be shared as this product
            moves beyond Concept status. We do not present mockups as shipped
            products.
          </p>
          <div className="mt-6 flex h-32 items-center justify-center rounded-xl border border-chrome/50 bg-steel/50">
            <div className="hero-grid-bg h-full w-full opacity-30" />
          </div>
        </div>
      </Section>

      {relatedProducts.length > 0 && (
        <Section variant="muted" containerSize="wide">
          <p className="text-mono-label">Related technologies</p>
          <div className="product-filmstrip mt-6 flex gap-4 overflow-x-auto pb-2">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={routes.product(related.slug)}
                className="surface-steel min-w-[200px] shrink-0 rounded-xl px-6 py-4 hover:border-champagne/30"
              >
                <p className="text-small font-medium text-foreground">
                  {related.name}
                </p>
                <p className="mt-1 text-caption text-silver">
                  {related.category}
                </p>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <div className="pb-20">
        <ConsultationInvitation
          title={`Discuss ${product.name}`}
          description="We do not sell what does not exist. If this concept fits your needs, we can explore consultation, waitlist interest, or a custom build path."
        />
      </div>

      <StickyCta label="Request consultation" href={consultationHref} />
    </>
  );
}
