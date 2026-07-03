import { Container } from "@/components/layout/Container";

export interface ManifestoSectionProps {
  statement: string;
}

export function ManifestoSection({ statement }: ManifestoSectionProps) {
  return (
    <section className="border-y border-chrome/50 bg-graphite py-32 md:py-40">
      <Container size="narrow" className="text-center">
        <p className="text-display mx-auto max-w-4xl text-foreground motion-safe:animate-reveal-up">
          {statement}
        </p>
      </Container>
    </section>
  );
}
