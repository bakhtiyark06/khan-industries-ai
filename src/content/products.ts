import type { Product } from "@/types";

/** Product catalog — synced with docs/02_PRODUCTS.md §4. All Concept status. */
export const products: Product[] = [
  {
    slug: "studyflow",
    name: "StudyFlow",
    status: "Concept",
    category: "SaaS Platforms",
    description:
      "Student productivity and academic planning platform. Helps students organize coursework, manage deadlines, plan study sessions, and track academic progress.",
    outcomes: ["Save time", "Improve quality", "Make systems easier to run"],
    targetCustomer: "Students (high school, university)",
  },
  {
    slug: "khanos",
    name: "KHANOS",
    status: "Concept",
    category: "Internal Operating Systems",
    description:
      "Personal AI operating assistant. A unified interface for managing tasks, information, workflows, and decisions across Khan Industries operations.",
    outcomes: [
      "Save time",
      "Reduce operational stress",
      "Make systems easier to run",
    ],
    targetCustomer: "Internal (founder and future team)",
  },
  {
    slug: "ai-crm",
    name: "AI CRM",
    status: "Concept",
    category: "SaaS Platforms",
    description:
      "AI-powered customer relationship management system. Manages leads, contacts, pipelines, communication history, and follow-ups with intelligent automation.",
    outcomes: [
      "Save time",
      "Increase revenue",
      "Reduce operational stress",
      "Make systems easier to run",
    ],
    targetCustomer: "Small to mid-size businesses, sales teams",
  },
  {
    slug: "restaurant-ai",
    name: "Restaurant AI",
    status: "Concept",
    category: "Vertical Industry Products",
    description:
      "AI system for restaurants including chat, ordering support, customer questions, reservations, and operations assistance.",
    outcomes: [
      "Save time",
      "Increase revenue",
      "Reduce operational stress",
    ],
    targetCustomer: "Restaurant owners and managers",
  },
  {
    slug: "construction-ai",
    name: "Construction AI",
    status: "Concept",
    category: "Vertical Industry Products",
    description:
      "AI system for construction companies including lead handling, project intake, estimates, customer communication, and workflow automation.",
    outcomes: [
      "Save time",
      "Increase revenue",
      "Reduce operational stress",
      "Improve quality",
    ],
    targetCustomer: "Construction companies, contractors, builders",
  },
  {
    slug: "real-estate-broker-platform",
    name: "Real Estate Broker Platform",
    status: "Concept",
    category: "Vertical Industry Products",
    description:
      "Platform for real estate brokers to manage leads, listings, communication, and client workflows.",
    outcomes: [
      "Save time",
      "Increase revenue",
      "Reduce operational stress",
      "Make systems easier to run",
    ],
    targetCustomer: "Real estate brokers and agencies",
  },
  {
    slug: "sitescope-ai",
    name: "SiteScope AI",
    status: "Concept",
    category: "AI Agents",
    description:
      "Website audit and business improvement agent. Analyzes a business web presence and delivers actionable recommendations to improve visibility, conversion, and professionalism.",
    outcomes: [
      "Increase revenue",
      "Improve quality",
      "Make systems easier to run",
    ],
    targetCustomer: "Local businesses with underperforming websites",
  },
  {
    slug: "leadpilot-ai",
    name: "LeadPilot AI",
    status: "Concept",
    category: "AI Agents",
    description:
      "AI sales outreach and lead generation agent. Identifies prospects, drafts personalized outreach, manages follow-up sequences, and qualifies inbound leads.",
    outcomes: [
      "Save time",
      "Increase revenue",
      "Reduce operational stress",
    ],
    targetCustomer: "Small businesses, sales teams, founders",
  },
  {
    slug: "supportflow-ai",
    name: "SupportFlow AI",
    status: "Concept",
    category: "AI Agents",
    description:
      "AI customer support and FAQ agent. Handles common customer questions, routes complex issues, and reduces support workload for businesses.",
    outcomes: ["Save time", "Reduce operational stress", "Improve quality"],
    targetCustomer: "Businesses with recurring customer support needs",
  },
  {
    slug: "reportgen-ai",
    name: "ReportGen AI",
    status: "Concept",
    category: "AI Agents",
    description:
      "Business reporting and dashboard generation agent. Connects to business data sources and produces clear, actionable reports without manual spreadsheet work.",
    outcomes: ["Save time", "Improve quality", "Make systems easier to run"],
    targetCustomer: "Business owners, operations managers",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
