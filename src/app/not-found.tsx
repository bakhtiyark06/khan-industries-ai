import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { routes } from "@/config/routes";
import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Page not found",
  description: "The page you are looking for does not exist.",
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <p className="text-sm font-medium text-silver">404</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-silver">
          The page you requested does not exist or may have moved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href={routes.home}>Go home</Button>
          <Link
            href={routes.contact}
            className="text-sm font-medium text-accent hover:text-accent-hover"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </div>
  );
}
