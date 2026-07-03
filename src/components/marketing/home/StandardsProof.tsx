import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { routes } from "@/config/routes";

export function StandardsProof() {
  return (
    <section className="border-y border-chrome/50 py-20 md:py-24">
      <Container size="wide">
        <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr] lg:items-start">
          <p className="text-mono-label">Proof of craft</p>
          <div>
            <p className="text-h2 text-foreground">
              Built to our own standards
            </p>
            <p className="mt-4 max-w-2xl text-body text-silver">
              This website is part of how we practice what we recommend —
              metallic-dark design, honest positioning, accessible forms, and
              architecture built to scale. We show craft through execution, not
              invented case studies.
            </p>
            <Link
              href={routes.about}
              className="mt-6 inline-block text-small text-champagne hover:text-foreground"
            >
              Our engineering philosophy →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
