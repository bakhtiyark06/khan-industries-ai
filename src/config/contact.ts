import { products } from "@/content/products";
import { services } from "@/content/services";

export const contactConfig = {
  email: "contact@khanindustries.com",
  responseSla:
    "We typically respond within two business days. No spam — ever.",
  leadSourceDefault: "inbound-website",
  formFields: {
    name: { label: "Full name", required: true },
    email: { label: "Email", required: true },
    company: { label: "Company", required: true },
    message: { label: "How can we help?", required: true },
    interest: { label: "Product or service of interest", required: false },
  },
  interestOptions: [
    { value: "", label: "Select an option (optional)" },
    ...services.map((service) => ({
      value: service.name,
      label: service.name,
    })),
    ...products.map((product) => ({
      value: product.name,
      label: product.name,
    })),
  ],
} as const;
