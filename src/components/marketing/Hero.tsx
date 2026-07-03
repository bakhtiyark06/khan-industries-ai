import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { HeroVisual } from "@/components/marketing/HeroVisual";

export interface HeroProps {
  variant?: "home" | "interior" | "compact";
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryPaths?: { label: string; href: string }[];
}

export function Hero({
  variant = "interior",
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryPaths,
}: HeroProps) {
  const isHome = variant === "home";
  const isCompact = variant === "compact";

  return (
    <section
      className={
        isCompact
          ? "border-b border-chrome/50 bg-graphite py-12 md:py-16"
          : isHome
            ? "relative overflow-hidden border-b border-chrome/50 py-20 md:py-28"
            : "border-b border-chrome/50 bg-void py-20 md:py-28"
      }
    >
      {isHome && (
        <>
          <div className="pointer-events-none absolute inset-0 studio-light" />
          <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-60" />
        </>
      )}

      <Container
        size={isHome ? "wide" : "narrow"}
        className={isHome ? "relative" : undefined}
      >
        <div
          className={
            isHome
              ? "grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
              : "text-center md:text-left"
          }
        >
          <div className="motion-safe:animate-reveal-up">
            {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
            <h1
              className={
                isHome
                  ? "text-display-xl mt-6 text-foreground"
                  : isCompact
                    ? "text-display mt-3 text-foreground"
                    : "text-display mt-6 text-foreground"
              }
            >
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-body text-silver">{description}</p>

            {!isCompact && primaryCta && (
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
            )}

            {isHome && tertiaryPaths && tertiaryPaths.length > 0 && (
              <nav
                className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
                aria-label="Quick paths"
              >
                {tertiaryPaths.map((path) => (
                  <Link
                    key={path.href}
                    href={path.href}
                    className="text-small text-silver hover:text-foreground motion-safe:transition-colors"
                  >
                    {path.label} →
                  </Link>
                ))}
              </nav>
            )}
          </div>

          {isHome && (
            <div className="motion-safe:animate-reveal-up flex justify-center lg:justify-end">
              <HeroVisual />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
