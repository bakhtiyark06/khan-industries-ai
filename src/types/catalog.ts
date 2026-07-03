export type ProductStatus =
  | "Concept"
  | "Planned"
  | "In Development"
  | "Beta"
  | "Launched";

export type ServiceCategory =
  | "Intelligent Systems"
  | "Digital Presence"
  | "Business Operations"
  | "Platform & Integration";

export interface Product {
  slug: string;
  name: string;
  status: ProductStatus;
  category: string;
  description: string;
  outcomes: string[];
  targetCustomer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: ServiceCategory;
  description: string;
  purpose: string;
  idealCustomer: string;
  outcomes: string[];
  featured: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  enabled: boolean;
  children?: NavItem[];
}
