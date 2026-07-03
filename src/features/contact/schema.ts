import type { ContactFormData } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  data: Partial<ContactFormData>,
): { valid: true; data: ContactFormData } | { valid: false; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  const name = data.name?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const company = data.company?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!name) errors.name = "Full name is required.";
  if (!email) errors.email = "Email is required.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Enter a valid email address.";
  if (!company) errors.company = "Company is required.";
  if (!message) errors.message = "Please describe how we can help.";
  else if (message.length < 10) {
    errors.message = "Please provide a bit more detail (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      company,
      message,
      interest: data.interest?.trim() || undefined,
      sourcePage: data.sourcePage?.trim() || undefined,
      leadSource: data.leadSource?.trim() || "inbound-website",
    },
  };
}
