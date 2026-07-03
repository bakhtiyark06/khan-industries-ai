"use client";

import { Button } from "@/components/ui/Button";

export interface StickyCtaProps {
  label: string;
  href: string;
}

export function StickyCta({ label, href }: StickyCtaProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-border-subtle bg-navy/95 backdrop-blur-sm px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-7xl justify-center">
        <Button href={href} size="md" className="w-full max-w-md sm:w-auto">
          {label}
        </Button>
      </div>
    </div>
  );
}
