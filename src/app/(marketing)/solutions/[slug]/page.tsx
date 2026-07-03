import { notFound } from "next/navigation";
import { Hero } from "@/components/marketing/Hero";
import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";
import { StickyCta } from "@/components/marketing/StickyCta";
import { Section } from "@/components/layout/Section";
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

  const consultationHref = `${routes.contact}?interest=${encodeURIComponent(service.name)}`;

  return (
    <>
      <Hero
        variant="interior"
        eyebrow="Business transformation"
        title={service.name}
        description={service.description}
        primaryCta={contactCta}
      />

      <Section containerSize="narrow">
        <div className="space-y-10">
          <div>
            <p className="text-mono-label">What changes</p>
            <ul className="mt-4 space-y-3">
              {service.outcomes.map((outcome) => (
                <li
                  key={outcome}
                  className="flex items-start gap-3 text-body text-silver"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-plate rounded-2xl p-8">
            <h2 className="text-h3 text-foreground">Purpose</h2>
            <p className="mt-3 text-body text-silver">{service.purpose}</p>
          </div>

          <div className="surface-plate rounded-2xl p-8">
            <h2 className="text-h3 text-foreground">Ideal customer</h2>
            <p className="mt-3 text-body text-silver">{service.idealCustomer}</p>
          </div>

          <div className="surface-plate rounded-2xl p-8 champagne-accent-top">
            <p className="text-mono-label">Engagement shape</p>
            <p className="mt-3 text-body text-silver">
              Engagements are scoped honestly — from focused Starter projects to
              Growth and Enterprise partnerships. We recommend the shape that
              fits your goals, not the largest contract.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Starter", "Growth", "Enterprise"].map((tier) => (
                <span
                  key={tier}
                  className="rounded-full border border-chrome px-4 py-1.5 font-mono text-[11px] uppercase tracking-wide text-silver"
                >
                  {tier}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <div className="pb-20">
        <ConsultationInvitation
          title={`Discuss ${service.name}`}
          description="We scope every engagement honestly — with clear deliverables, assumptions, and next steps."
        />
      </div>

      <StickyCta label="Request consultation" href={consultationHref} />
    </>
  );
}
