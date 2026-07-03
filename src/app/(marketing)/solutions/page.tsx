import { Hero } from "@/components/marketing/Hero";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Grid } from "@/components/layout/Grid";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { services } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Custom technology services from Khan Industries — AI agents, chatbots, websites, automation, APIs, and consulting.",
  path: routes.solutions,
});

export default function SolutionsPage() {
  return (
    <>
      <Hero
        eyebrow="Solutions"
        title="Custom engagements that solve real business problems"
        description="Services are hands-on and tailored. Products are scalable software. We keep that distinction clear so you always know what you are buying."
        primaryCta={contactCta}
        secondaryCta={{ label: "View products", href: routes.products }}
      />

      <Section aria-labelledby="services-heading">
        <SectionHeader
          id="services-heading"
          title="Current services"
          description="All services are offered and available for engagement. We do not claim prior delivery unless documented in a specific client record."
        />
        <Grid cols={3}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </Grid>
      </Section>

      <CallToAction
        title="Not sure which service fits?"
        description="Book a consultation. We will map your goals to the right engagement shape — Starter through Enterprise scope."
        primaryCta={contactCta}
      />
    </>
  );
}
