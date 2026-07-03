"use server";

import { contactConfig } from "@/config/contact";
import { sendContactNotification } from "@/features/contact/send-notification";
import { validateContactForm } from "@/features/contact/schema";
import type { ContactFormResult } from "@/types";

export async function submitContact(
  formData: FormData,
): Promise<ContactFormResult> {
  const honeypot = formData.get("website")?.toString();
  if (honeypot) {
    return { success: true, message: contactConfig.responseSla };
  }

  const validation = validateContactForm({
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    company: formData.get("company")?.toString(),
    message: formData.get("message")?.toString(),
    interest: formData.get("interest")?.toString(),
    sourcePage: formData.get("sourcePage")?.toString(),
    leadSource:
      formData.get("leadSource")?.toString() ??
      contactConfig.leadSourceDefault,
  });

  if (!validation.valid) {
    const firstError = Object.values(validation.errors)[0];
    return {
      success: false,
      message: firstError ?? "Please check the form and try again.",
      fieldErrors: validation.errors,
    };
  }

  const result = await sendContactNotification(validation.data);

  if (!result.ok) {
    return { success: false, message: result.error };
  }

  return {
    success: true,
    message: `Thank you. Your consultation request was received. ${contactConfig.responseSla}`,
  };
}
