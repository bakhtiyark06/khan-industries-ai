import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { FeatureGrid } from "@/components/marketing/FeatureGrid";
import { ProductCard } from "@/components/marketing/ProductCard";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Home",
  description:
    "Khan Industries builds intelligent technology — AI agents, automation, premium websites, and software that helps businesses operate better.",
  path: routes.home,
});

const valueFeatures = [
  {
    title: "Save time",
    description:
      "Automation and intelligent systems that remove repetitive work so your team can focus on what matters.",
    icon: "clock" as const,
  },
  {
    title: "Increase revenue",
    description:
      "Products and services designed to capture leads, convert interest, and support growth — honestly scoped.",
    icon: "chart" as const,
  },
  {
    title: "Build with confidence",
    description:
      "Premium execution, clear communication, and technology you can trust for the long term.",
    icon: "shield" as const,
  },
];

export default function HomePage() {
  const featuredServices = services.filter((s) => s.featured).slice(0, 3);
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Hero
        variant="home"
        eyebrow="Intelligent technology"
        title="Practical systems that help businesses operate better"
        description="Khan Industries builds AI agents, automation, premium websites, and software — with honest positioning, premium quality, and a long-term partnership mindset."
        primaryCta={contactCta}
        secondaryCta={{ label: "Explore products", href: routes.products }}
        tertiaryPaths={[
          { label: "View solutions", href: routes.solutions },
          { label: "Explore products", href: routes.products },
          { label: "About us", href: routes.about },
        ]}
      />

      <Section aria-labelledby="values-heading">
        <SectionHeader
          id="values-heading"
          eyebrow="What we deliver"
          title="Technology aligned to real business outcomes"
          description="Every engagement maps to measurable value — not hype, not activity for its own sake."
        />
        <FeatureGrid features={valueFeatures} />
      </Section>

      <Section variant="muted" aria-labelledby="solutions-heading">
        <SectionHeader
          id="solutions-heading"
          eyebrow="Solutions"
          title="Custom services for your business"
          description="Hands-on engagements — from AI agents to websites and automation — tailored to your goals."
        />
        <Grid cols={3}>
          {featuredServices.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Grid>
      </Section>

      <Section aria-labelledby="products-heading">
        <SectionHeader
          id="products-heading"
          eyebrow="Products"
          title="Scalable software in development"
          description="Our product concepts are in active development. Every page shows honest status — we never imply traction we do not have."
        />
        <Grid cols={3}>
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </Grid>
      </Section>

      <CallToAction
        title="Ready to discuss your project?"
        description="Book a consultation. We will listen first, recommend honestly, and scope work you can trust."
        primaryCta={contactCta}
        secondaryCta={{ label: "View all solutions", href: routes.solutions }}
      />
    </>
  );
}
