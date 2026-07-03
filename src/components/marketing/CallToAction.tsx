import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export interface CallToActionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function CallToAction({
  title,
  description,
  primaryCta,
  secondaryCta,
}: CallToActionProps) {
  return (
    <section className="cta-gold-accent border-y border-border-subtle bg-navy-elevated py-16 md:py-20">
      <Container className="text-center motion-safe:animate-fade-in">
        <h2 className="text-h2 text-foreground">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-body text-silver">{description}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
