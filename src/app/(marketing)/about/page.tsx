import { CallToAction } from "@/components/marketing/CallToAction";
import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "About",
  description:
    "Khan Industries is an early-stage technology company building AI-powered business solutions, automation, and premium software.",
  path: routes.about,
});

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About"
        title="A technology company built on quality and honesty"
        description="Khan Industries exists to build intelligent technology that helps businesses and people operate better — with premium execution and transparent positioning."
        primaryCta={contactCta}
      />

      <Section>
        <Container size="narrow">
          <div className="prose prose-invert max-w-none space-y-6 text-silver">
            <h2 className="text-2xl font-semibold text-foreground">Our mission</h2>
            <p>
              To empower businesses and people through practical, reliable, and
              premium technology that saves time, improves operations, and
              creates long-term value.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Who we are today</h2>
            <p>
              Khan Industries is an early-stage technology company founded by
              Bakhtiyar Khan. We focus on AI agents, business automation, modern
              websites, and software tools. We do not claim years of enterprise
              clients, awards, or fabricated history — we earn trust through
              real execution.
            </p>

            <h2 className="text-2xl font-semibold text-foreground">Our values</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong className="text-foreground">Quality</strong> — we build
                with care, precision, and long-term reliability.
              </li>
              <li>
                <strong className="text-foreground">Integrity</strong> — we do
                not fake clients, testimonials, or results.
              </li>
              <li>
                <strong className="text-foreground">Innovation</strong> — we use
                technology to solve real problems.
              </li>
              <li>
                <strong className="text-foreground">Premium execution</strong> —
                every product and system should feel polished and valuable.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground">Long-term direction</h2>
            <p>
              We aim to grow into a diversified technology company — AI
              platforms, SaaS products, client solutions, and eventually
              marketplace and enterprise surfaces — built on the same standards
              we apply today.
            </p>
          </div>
        </Container>
      </Section>

      <CallToAction
        title="Let's talk about your goals"
        description="Whether you need a custom build or want to explore our product roadmap, we start with an honest conversation."
        primaryCta={contactCta}
      />
    </>
  );
}
