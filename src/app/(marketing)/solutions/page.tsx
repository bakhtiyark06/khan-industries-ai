import { Hero } from "@/components/marketing/Hero";
import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";
import { TransformationChapter } from "@/components/marketing/TransformationChapter";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { getServicesGroupedByCategory } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";

const categoryThesis: Record<string, string> = {
  "Intelligent Systems":
    "Intelligent automation that removes repetitive work and scales judgment.",
  "Digital Presence":
    "Premium digital presence that establishes trust and drives growth.",
  "Business Operations":
    "Operational systems that reduce stress and improve clarity.",
  "Platform & Integration":
    "Integration foundations that connect systems and enable scale.",
};

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
        title="Business transformation through technology"
        description="Services are hands-on and tailored. Products are scalable software. We keep that distinction clear so you always know what you are buying."
        primaryCta={contactCta}
        secondaryCta={{ label: "View products", href: routes.products }}
      />

      {grouped.map((group) => (
        <TransformationChapter
          key={group.category}
          category={group.category}
          thesis={categoryThesis[group.category] ?? group.category}
          services={group.services}
        />
      ))}

      <ConsultationInvitation
        title="Not sure which service fits?"
        description="Book a consultation. We will map your goals to the right engagement shape — Starter through Enterprise scope."
      />
    </>
  );
}
