import { Container } from "@/components/layout/Container";

export function TechnologyThesis() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-40" />
      <Container size="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-eyebrow">Engineering thesis</p>
            <h2 className="text-display mt-4 text-foreground">
              Engineering intelligence for real operations
            </h2>
          </div>
          <div className="space-y-6 text-body text-silver">
            <p>
              Khan Industries builds AI agents, automation, premium websites, and
              software with the discipline of engineers and the standards of a
              long-term partner.
            </p>
            <p>
              Every system maps to measurable outcomes — time saved, revenue
              enabled, stress reduced — not hype, not activity for its own sake.
            </p>
            <p>
              We design for clarity, reliability, and honest positioning at every
              stage of development.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
