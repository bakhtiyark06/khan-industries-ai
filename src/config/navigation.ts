import { features } from "@/config/features";
import { routes } from "@/config/routes";
import type { NavItem } from "@/types";

export const headerNav: NavItem[] = [
  {
    label: "Solutions",
    href: routes.solutions,
    enabled: true,
  },
  {
    label: "Products",
    href: routes.products,
    enabled: true,
  },
  {
    label: "About",
    href: routes.about,
    enabled: true,
  },
  {
    label: "Insights",
    href: routes.insights,
    enabled: features.insights,
  },
];

export const footerNav = {
  company: [
    { label: "About", href: routes.about, enabled: true },
    { label: "Contact", href: routes.contact, enabled: true },
    {
      label: "Careers",
      href: routes.careers,
      enabled: features.careers,
    },
  ],
  solutions: [
    {
      label: "AI agent development",
      href: routes.solution("ai-agent-development"),
      enabled: true,
    },
    {
      label: "AI chatbots",
      href: routes.solution("ai-chatbots"),
      enabled: true,
    },
    {
      label: "Website development",
      href: routes.solution("website-development"),
      enabled: true,
    },
    {
      label: "AI consulting",
      href: routes.solution("ai-consulting"),
      enabled: true,
    },
  ],
  products: [
    {
      label: "SupportFlow AI",
      href: routes.product("supportflow-ai"),
      enabled: true,
    },
    {
      label: "LeadPilot AI",
      href: routes.product("leadpilot-ai"),
      enabled: true,
    },
    {
      label: "SiteScope AI",
      href: routes.product("sitescope-ai"),
      enabled: true,
    },
    {
      label: "All products",
      href: routes.products,
      enabled: true,
    },
  ],
} as const;

export const contactCta = {
  label: "Request consultation",
  href: routes.contact,
} as const;
