"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { routes } from "@/config/routes";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-1 items-center bg-void py-24">
      <Container className="text-center">
        <p className="text-eyebrow">Error</p>
        <h1 className="text-display mt-4 text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-body text-silver">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button type="button" onClick={reset}>
            Try again
          </Button>
          <Button href={routes.home} variant="secondary">
            Go home
          </Button>
        </div>
      </Container>
    </div>
  );
}
