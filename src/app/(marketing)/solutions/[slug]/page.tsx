import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/Hero";
import { CallToAction } from "@/components/marketing/CallToAction";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { getServiceBySlug } from "@/features/catalog";
import { getAllServiceSlugs } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo/metadata";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs()
    .map((slug) => getServiceBySlug(slug))
    .filter((service) => service?.featured)
    .map((service) => ({ slug: service!.slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !service.featured) {
    return buildPageMetadata({
      title: "Service not found",
      path: routes.solution(slug),
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: service.name,
    description: service.description,
    path: routes.solution(slug),
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service || !service.featured) {
    notFound();
  }

  return (
    <>
      <Hero
        eyebrow={service.category}
        title={service.name}
        description={service.description}
        primaryCta={contactCta}
      />

      <Section>
        <Container size="narrow">
          <div className="space-y-8 text-silver">
            <div>
              <h2 className="text-xl font-semibold text-foreground">Purpose</h2>
              <p className="mt-2 leading-relaxed">{service.purpose}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Ideal customer
              </h2>
              <p className="mt-2 leading-relaxed">{service.idealCustomer}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                Outcomes we target
              </h2>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {service.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <CallToAction
        title={`Discuss ${service.name}`}
        description="We scope every engagement honestly — with clear deliverables, assumptions, and next steps."
        primaryCta={{
          ...contactCta,
          href: `${routes.contact}?interest=${encodeURIComponent(service.name)}`,
        }}
      />
    </>
  );
}
