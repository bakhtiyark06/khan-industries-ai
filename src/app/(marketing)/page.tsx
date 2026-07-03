import { routes } from "@/config/routes";
import { products } from "@/content/products";
import { services } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { CinematicHero } from "@/components/marketing/home/CinematicHero";
import { ManifestoSection } from "@/components/marketing/home/ManifestoSection";
import { PrinciplesStrip } from "@/components/marketing/home/PrinciplesStrip";
import { TechnologyThesis } from "@/components/marketing/home/TechnologyThesis";
import { TransformationPreview } from "@/components/marketing/home/TransformationPreview";
import { ProductSpotlight } from "@/components/marketing/home/ProductSpotlight";
import { StandardsProof } from "@/components/marketing/home/StandardsProof";
import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";

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
  const featuredServices = services.filter((s) => s.featured).slice(0, 2);
  const featuredProduct = products[0];
  const otherProducts = products.slice(1, 5);

  return (
    <>
      <CinematicHero
        title="Systems that operate the future"
        description="Khan Industries builds AI agents, automation, premium websites, and software — with honest positioning, premium quality, and a long-term partnership mindset."
        tertiaryPaths={[
          { label: "View solutions", href: routes.solutions },
          { label: "Explore products", href: routes.products },
          { label: "About us", href: routes.about },
        ]}
      />

      <ManifestoSection statement="We build intelligent technology with the discipline of engineers and the standards of a long-term partner." />

      <PrinciplesStrip principles={valueFeatures} />

      <TechnologyThesis />

      <TransformationPreview services={featuredServices} />

      <ProductSpotlight featured={featuredProduct} others={otherProducts} />

      <StandardsProof />

      <ConsultationInvitation
        title="Ready to discuss your project?"
        description="Book a consultation. We will listen first, recommend honestly, and scope work you can trust."
      />
    </>
  );
}
