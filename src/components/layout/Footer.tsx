import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { footerNav } from "@/config/navigation";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/config/social";
import { Container } from "./Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-navy-elevated py-12">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo size="lg" />
            <p className="mt-3 text-small leading-relaxed text-silver">
              Intelligent technology for businesses that value quality,
              honesty, and long-term partnership.
            </p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="mt-4 inline-block text-small text-silver hover:text-foreground"
            >
              {contactConfig.email}
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Company</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.company
                .filter((item) => item.enabled)
                .map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-small text-silver hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              <li>
                <span className="text-small text-silver/70">
                  Insights — coming soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Solutions</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-silver hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Products</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.products.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-small text-silver hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-small text-silver">
              © {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-small text-silver/70">Privacy — coming soon</span>
              <span className="text-small text-silver/70">Terms — coming soon</span>
            </div>
          </div>
          <a
            href={socialLinks.github}
            className="text-small text-silver hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
