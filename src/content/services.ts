import type { Service } from "@/types";

/** Service catalog — synced with docs/03_SERVICES.md §3. */
export const services: Service[] = [
  {
    slug: "ai-agent-development",
    name: "AI agent development",
    category: "Intelligent Systems",
    description:
      "Design and build intelligent AI agents customized for your business — systems that perform defined tasks autonomously or semi-autonomously.",
    purpose:
      "Design and build intelligent AI agents customized for each client's business.",
    idealCustomer:
      "Businesses that need repeatable intelligent workflows: lead qualification, support triage, document processing, or operational agents.",
    outcomes: [
      "Save time",
      "Reduce operational stress",
      "Increase revenue",
    ],
    featured: true,
  },
  {
    slug: "ai-chatbots",
    name: "AI chatbots",
    category: "Intelligent Systems",
    description:
      "Deploy conversational AI systems that handle customer and internal interactions through structured dialogue with clear escalation.",
    purpose:
      "Deploy conversational AI systems that reduce load on human teams while maintaining quality.",
    idealCustomer:
      "Organizations with recurring questions, support volume, or need for 24/7 first-line interaction.",
    outcomes: ["Save time", "Reduce operational stress", "Improve quality"],
    featured: true,
  },
  {
    slug: "website-development",
    name: "Website development",
    category: "Digital Presence",
    description:
      "Build modern, premium web experiences that establish trust, communicate value, and support business goals.",
    purpose:
      "Build modern, premium web experiences for lead generation, portfolio showcase, and enterprise credibility.",
    idealCustomer:
      "Businesses needing a new site, redesign, or focused landing experience.",
    outcomes: ["Increase revenue", "Improve quality", "Build trust"],
    featured: true,
  },
  {
    slug: "business-automation",
    name: "Business automation",
    category: "Business Operations",
    description:
      "Automate repetitive workflows and connect business systems so operations run with less manual effort and fewer errors.",
    purpose: "Automate repetitive workflows and connect business systems.",
    idealCustomer:
      "Teams drowning in manual data entry, handoffs between tools, or inconsistent processes.",
    outcomes: ["Save time", "Reduce operational stress", "Improve quality"],
    featured: false,
  },
  {
    slug: "email-automation",
    name: "Email automation",
    category: "Business Operations",
    description:
      "Design and implement email systems that nurture leads, onboard customers, and communicate consistently at scale.",
    purpose:
      "Design email systems that nurture leads and onboard customers without manual sending at scale.",
    idealCustomer:
      "Businesses with lead funnels, onboarding sequences, or recurring communication needs.",
    outcomes: ["Save time", "Increase revenue"],
    featured: false,
  },
  {
    slug: "api-development",
    name: "API development",
    category: "Platform & Integration",
    description:
      "Build and integrate APIs and backend services that connect systems, expose data safely, and enable automation.",
    purpose:
      "Build APIs and backend services that connect systems and enable automation.",
    idealCustomer:
      "Businesses needing custom integrations, internal tools, or connections between SaaS platforms.",
    outcomes: ["Make systems easier to run", "Save time"],
    featured: false,
  },
  {
    slug: "ai-consulting",
    name: "AI consulting",
    category: "Intelligent Systems",
    description:
      "Advise organizations on where AI and automation create real value — with honest assessment of feasibility, risk, and priority.",
    purpose:
      "Advise on where AI and automation create real value before large builds.",
    idealCustomer:
      "Leaders exploring AI adoption or digital transformation without a clear internal roadmap.",
    outcomes: [
      "Reduce operational stress",
      "Make systems easier to run",
      "Improve quality",
    ],
    featured: true,
  },
  {
    slug: "cloud-mlops",
    name: "Cloud & MLOps",
    category: "Platform & Integration",
    description:
      "Deploy, operate, and maintain cloud infrastructure and machine learning workflows for reliable, production-ready systems.",
    purpose:
      "Deploy and maintain cloud infrastructure and ML workflows for production-ready systems.",
    idealCustomer:
      "Teams shipping AI features or applications who need professional deployment pipelines.",
    outcomes: ["Make systems easier to run", "Improve quality"],
    featured: false,
  },
  {
    slug: "dashboard-development",
    name: "Dashboard development",
    category: "Business Operations",
    description:
      "Build dashboards and reporting surfaces that turn scattered data into clear operational and executive visibility.",
    purpose:
      "Build dashboards that turn scattered data into clear operational visibility.",
    idealCustomer:
      "Businesses relying on spreadsheets or multiple tools without a single view of performance.",
    outcomes: ["Save time", "Improve quality", "Make systems easier to run"],
    featured: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured);
}
