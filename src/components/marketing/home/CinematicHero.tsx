import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { contactCta } from "@/config/navigation";
import { routes } from "@/config/routes";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";

export interface CinematicHeroProps {
  title: string;
  description: string;
  tertiaryPaths?: { label: string; href: string }[];
}

export function CinematicHero({
  title,
  description,
  tertiaryPaths,
}: CinematicHeroProps) {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-void">
      <div className="pointer-events-none absolute inset-0 studio-light" />
      <div className="pointer-events-none absolute inset-0 hero-grid-bg opacity-60" />

      <Container size="wide" className="relative py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="motion-safe:animate-reveal-up">
            <p className="text-eyebrow">Intelligent technology</p>
            <h1 className="text-display-xl mt-6 text-foreground">{title}</h1>
            <p className="mt-8 max-w-[30rem] text-body text-silver">{description}</p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={contactCta.href} size="lg">
                {contactCta.label}
              </Button>
              <Button href={routes.products} variant="secondary" size="lg">
                Explore products
              </Button>
            </div>

            {tertiaryPaths && tertiaryPaths.length > 0 && (
              <nav
                className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
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

          <div className="flex justify-center lg:justify-end motion-safe:animate-reveal-up">
            <div className="logo-reflection relative">
              <div className="pointer-events-none absolute -inset-8 rounded-full bg-champagne/5 blur-3xl metallic-shimmer" />
              <Image
                src={brandConfig.logoPath}
                alt={brandConfig.logoAlt}
                width={brandConfig.logoWidth}
                height={brandConfig.logoHeight}
                priority
                className="relative h-56 w-56 object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)] md:h-72 md:w-72 lg:h-80 lg:w-80"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
          <div className="h-8 w-px bg-champagne/50" />
          <span className="text-caption text-silver">Explore</span>
        </div>
      </Container>
    </section>
  );
}
