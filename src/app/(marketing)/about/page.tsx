import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";
import { Hero } from "@/components/marketing/Hero";
import { PhilosophyGrid } from "@/components/marketing/PhilosophyGrid";
import { Section } from "@/components/layout/Section";
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
        variant="interior"
        eyebrow="Philosophy"
        title="We build systems that earn trust through precision"
        description="Khan Industries exists to build intelligent technology that helps businesses and people operate better — with premium execution and transparent positioning."
        primaryCta={contactCta}
      />

      <Section variant="plate" containerSize="narrow">
        <p className="text-display text-center text-foreground">
          Engineering excellence is our message. Quality is how we communicate
          it.
        </p>
      </Section>

      <Section containerSize="wide">
        <p className="text-eyebrow">Principles</p>
        <h2 className="text-h1 mt-4 text-foreground">How we think</h2>
        <div className="mt-12">
          <PhilosophyGrid />
        </div>
      </Section>

      <Section variant="muted" containerSize="narrow">
        <p className="text-eyebrow">How we engineer</p>
        <h2 className="text-h2 mt-4 text-foreground">Our standards</h2>
        <ul className="mt-8 space-y-4">
          {[
            "Honest positioning — we never imply traction we do not have.",
            "Accessibility by default — WCAG-aligned, keyboard navigable.",
            "Long-term architecture — built to scale without restructuring.",
            "No dark patterns — calm interfaces, no manufactured urgency.",
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-body text-silver"
            >
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section containerSize="narrow">
        <p className="text-eyebrow">Today</p>
        <h2 className="text-h2 mt-4 text-foreground">Who we are</h2>
        <p className="mt-6 text-body text-silver">
          Khan Industries is an early-stage technology company founded by
          Bakhtiyar Khan. We focus on AI agents, business automation, modern
          websites, and software tools. We do not claim years of enterprise
          clients, awards, or fabricated history — we earn trust through real
          execution.
        </p>
      </Section>

      <Section variant="divider" containerSize="wide">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="text-mono-label">Proof of craft</p>
          <div>
            <h2 className="text-h2 text-foreground">Built to our own standards</h2>
            <p className="mt-4 text-body text-silver">
              This website is part of how we practice what we recommend —
              metallic-dark design, honest positioning, accessible forms, and
              architecture built to scale. We show craft through execution, not
              invented case studies.
            </p>
          </div>
        </div>
      </Section>

      <Section containerSize="narrow">
        <p className="text-eyebrow">Direction</p>
        <h2 className="text-h2 mt-4 text-foreground">Long-term ambition</h2>
        <p className="mt-6 text-body text-silver">
          We aim to grow into a diversified technology company — AI platforms,
          SaaS products, client solutions, and eventually marketplace and
          enterprise surfaces — built on the same standards we apply today.
        </p>
      </Section>

      <ConsultationInvitation
        title="Let's talk about your goals"
        description="Whether you need a custom build or want to explore our product roadmap, we start with an honest conversation."
      />
    </>
  );
}
