import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { getServicesGroupedByCategory } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Custom technology services from Khan Industries — AI agents, chatbots, websites, automation, APIs, and consulting.",
  path: routes.solutions,
});

export default function SolutionsPage() {
  const grouped = getServicesGroupedByCategory();

  return (
    <>
      <Hero
        variant="interior"
        eyebrow="Solutions"
        title="Custom engagements that solve real business problems"
        description="Services are hands-on and tailored. Products are scalable software. We keep that distinction clear so you always know what you are buying."
        primaryCta={contactCta}
        secondaryCta={{ label: "View products", href: routes.products }}
      />

      {grouped.map((group) => (
        <Section
          key={group.category}
          variant={group.category === "Digital Presence" ? "muted" : "default"}
          aria-labelledby={`category-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <SectionHeader
            id={`category-${group.category.replace(/\s+/g, "-").toLowerCase()}`}
            title={group.category}
            description={
              group.category === "Intelligent Systems"
                ? "AI agents, chatbots, and consulting for intelligent automation."
                : group.category === "Digital Presence"
                  ? "Premium web experiences that establish trust and drive growth."
                  : group.category === "Business Operations"
                    ? "Workflow automation, email systems, and operational visibility."
                    : "APIs, cloud infrastructure, and integration foundations."
            }
          />
          <Grid cols={3}>
            {group.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </Grid>
        </Section>
      ))}

      <CallToAction
        title="Not sure which service fits?"
        description="Book a consultation. We will map your goals to the right engagement shape — Starter through Enterprise scope."
        primaryCta={contactCta}
      />
    </>
  );
}
