import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { routes } from "@/config/routes";
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
            <Link
              href={routes.home}
              className="text-lg font-semibold text-foreground"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 text-sm text-silver leading-relaxed">
              Intelligent technology for businesses that value quality,
              honesty, and long-term partnership.
            </p>
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
                      className="text-sm text-silver hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-foreground">Solutions</h2>
            <ul className="mt-4 space-y-2">
              {footerNav.solutions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-silver hover:text-foreground"
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
                    className="text-sm text-silver hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-silver">
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <a
            href={socialLinks.github}
            className="text-sm text-silver hover:text-foreground"
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
