import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ProductCard } from "@/components/marketing/ProductCard";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { products } from "@/content/products";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Products",
  description:
    "Khan Industries product concepts — AI agents and SaaS platforms in development. Every product shows honest status labels.",
  path: routes.products,
});

export default function ProductsPage() {
  return (
    <>
      <Hero
        variant="interior"
        eyebrow="Products"
        title="Scalable software we are building"
        description="These are Khan Industries product concepts — not launched offerings unless explicitly marked. We label status honestly on every page."
        primaryCta={contactCta}
        secondaryCta={{ label: "View solutions", href: routes.solutions }}
      />

      <Section aria-labelledby="products-heading">
        <SectionHeader
          id="products-heading"
          title="Product portfolio"
          description="Concept status means the idea is defined and sequenced — not yet a publicly supported product."
        />
        <Grid cols={3}>
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Section>

      <CallToAction
        title="Interested in early access or a custom deployment?"
        description="Consultation is the right first step. We will be direct about what exists today and what would need to be built."
        primaryCta={contactCta}
      />
    </>
  );
}
