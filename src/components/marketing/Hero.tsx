import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="border-b border-border-subtle py-20 md:py-28">
      <Container size="narrow" className="text-center md:text-left">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-wider text-silver">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-tight">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-silver max-w-2xl">
          {description}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-start">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondary" size="lg">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
