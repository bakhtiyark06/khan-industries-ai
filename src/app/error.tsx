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
    <div className="flex flex-1 items-center py-24">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold text-foreground">
          Something went wrong
        </h1>
        <p className="mt-4 text-silver">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
