import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { Container } from "@/components/layout/Container";
import { CubeIllustration } from "@/components/marketing/HeroVisual";
import { routes } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="flex flex-1 items-center bg-void py-24">
        <Container className="text-center">
          <CubeIllustration className="mx-auto h-16 w-16 motion-safe:animate-reveal-up opacity-80" />
          <p className="mt-8 text-eyebrow">404</p>
          <h1 className="text-display mt-4 text-foreground">Page not found</h1>
          <p className="mt-4 text-body text-silver">
            The page you requested does not exist or may have moved.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href={routes.home}>Go home</Button>
            <Link
              href={routes.contact}
              className="text-small text-champagne hover:text-foreground"
            >
              Contact us
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
