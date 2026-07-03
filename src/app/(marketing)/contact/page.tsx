import { ContactForm } from "@/components/forms/ContactForm";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request a consultation with Khan Industries. Tell us about your business goals and we will respond with honest guidance.",
  path: routes.contact,
});

interface ContactPageProps {
  searchParams: Promise<{ interest?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { interest } = await searchParams;

  return (
    <>
      <section className="border-b border-chrome/50 bg-graphite py-16 md:py-20">
        <Container size="wide">
          <p className="text-eyebrow">Contact</p>
          <h1 className="text-display mt-4 text-foreground">
            Begin a professional engagement
          </h1>
        </Container>
      </section>

      <Section containerSize="wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-h2 text-foreground">Consultation</h2>
            <p className="mt-4 text-body text-silver">
              A structured discovery conversation — consultative, not a product
              pitch. We listen first, then recommend honestly.
            </p>
            <ul className="mt-8 space-y-4 text-body text-silver">
              <li className="flex gap-3">
                <span className="font-mono text-champagne">30–45</span>
                <span>minutes for most initial consultations</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-champagne">01</span>
                <span>No pressure — we advise even if we are not the right fit</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-champagne">02</span>
                <span>{contactConfig.responseSla}</span>
              </li>
            </ul>
          </div>

          <div id="contact-form" className="surface-plate rounded-2xl p-8 md:p-10 champagne-accent-top">
            <h2 className="sr-only">Consultation request form</h2>
            <ContactForm
              defaultInterest={interest}
              sourcePage={routes.contact}
            />
          </div>
        </div>
      </Section>
    </>
  );
}
