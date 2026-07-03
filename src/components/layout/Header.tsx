"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { contactCta, headerNav } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { NavLinks } from "./NavLinks";
import { Container } from "./Container";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const enabledNav = headerNav.filter((item) => item.enabled);

  useEffect(() => {
    if (!menuOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    function handleTab(event: KeyboardEvent) {
      if (event.key !== "Tab" || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleTab);
    return () => document.removeEventListener("keydown", handleTab);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-border-subtle bg-navy/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Logo priority onClick={() => setMenuOpen(false)} />

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            <NavLinks
              items={enabledNav}
              linkClassName="text-sm text-silver hover:text-foreground motion-safe:transition-colors"
            />
          </nav>

          <div className="flex items-center gap-3">
            <Button
              href={contactCta.href}
              size="sm"
              className="hidden sm:inline-flex"
            >
              {contactCta.label}
            </Button>

            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-foreground md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        ref={menuRef}
        className={cn(
          "fixed inset-0 top-16 z-30 bg-navy motion-safe:transition-opacity md:hidden",
          menuOpen ? "block opacity-100" : "hidden opacity-0",
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <Container className="flex flex-col gap-2 py-6">
          <NavLinks
            items={enabledNav}
            linkClassName="rounded-md px-3 py-3 text-base text-foreground hover:bg-slate min-h-[44px] flex items-center"
            onNavigate={() => setMenuOpen(false)}
          />
          <Link
            href={contactCta.href}
            className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-md bg-foreground px-5 text-sm font-medium text-navy hover:bg-accent-hover"
            onClick={() => setMenuOpen(false)}
          >
            {contactCta.label}
          </Link>
        </Container>
      </div>
    </header>
  );
}
