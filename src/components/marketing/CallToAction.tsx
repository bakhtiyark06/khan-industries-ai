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
    <section className="border-y border-border-subtle bg-navy-elevated py-16 md:py-20">
      <Container className="text-center">
        <h2 className="text-2xl font-semibold text-foreground md:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-silver leading-relaxed">
          {description}
        </p>
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
