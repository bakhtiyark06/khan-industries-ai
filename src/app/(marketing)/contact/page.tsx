import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { routes } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Contact",
  description:
    "Request a consultation with Khan Industries. Tell us about your business goals and we will respond with honest guidance.",
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Request a consultation"
        description="Share your goals and constraints. We will listen first, then recommend an approach that fits — or tell you honestly if we are not the right fit."
        primaryCta={{ label: "Scroll to form", href: "#contact-form" }}
      />

      <Section id="contact-form" aria-labelledby="form-heading">
        <Container size="narrow">
          <h2 id="form-heading" className="sr-only">
            Consultation request form
          </h2>
          <ContactForm sourcePage={routes.contact} />
        </Container>
      </Section>
    </>
  );
}
