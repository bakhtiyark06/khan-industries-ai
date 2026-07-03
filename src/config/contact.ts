export const contactConfig = {
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
} as const;
