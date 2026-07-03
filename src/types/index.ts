export type {
  NavItem,
  Product,
  ProductStatus,
  Service,
  ServiceCategory,
} from "./catalog";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  interest?: string;
  sourcePage?: string;
  leadSource: string;
}

export interface ContactFormResult {
  success: boolean;
  message: string;
  fieldErrors?: Record<string, string>;
}
