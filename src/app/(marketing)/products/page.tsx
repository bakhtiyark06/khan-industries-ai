import { Hero } from "@/components/marketing/Hero";
import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";
import { ProductReveal } from "@/components/marketing/ProductReveal";
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
        title="Technologies we are building"
        description="These are Khan Industries product concepts — not launched offerings unless explicitly marked. We label status honestly on every page."
        primaryCta={contactCta}
        secondaryCta={{ label: "View solutions", href: routes.solutions }}
      />

      {products.map((product, index) => (
        <ProductReveal key={product.slug} product={product} index={index} />
      ))}

      <ConsultationInvitation
        title="Interested in early access or a custom deployment?"
        description="Consultation is the right first step. We will be direct about what exists today and what would need to be built."
      />
    </>
  );
}
