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
    <footer className="border-t border-chrome bg-void py-16">
      <Container size="wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-4 max-w-sm text-body text-silver">
              Intelligent technology for businesses that value quality, honesty,
              and long-term partnership.
            </p>
            <a
              href={`mailto:${contactConfig.email}`}
              className="mt-6 inline-block text-small text-champagne hover:text-foreground"
            >
              {contactConfig.email}
            </a>
          </div>

          <div>
            <h2 className="text-mono-label">Company</h2>
            <ul className="mt-5 space-y-3">
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
                <span className="text-small text-silver/60">
                  Insights — coming soon
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-mono-label">Solutions</h2>
            <ul className="mt-5 space-y-3">
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
            <h2 className="text-mono-label">Products</h2>
            <ul className="mt-5 space-y-3">
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

        <div className="champagne-accent-top mt-12 flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-small text-silver">
              © {year} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="text-small text-silver/60">Privacy — coming soon</span>
              <span className="text-small text-silver/60">Terms — coming soon</span>
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
