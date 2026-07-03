import type { ContactFormData } from "@/types";

export async function sendContactNotification(
  data: ContactFormData,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const apiKey = process.env.EMAIL_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from =
    process.env.CONTACT_EMAIL_FROM ?? "Khan Industries <onboarding@resend.dev>";

  if (!apiKey || !to) {
    if (process.env.NODE_ENV === "development") {
      console.info("[contact] Dev mode — notification logged:", {
        to: to ?? "(not set)",
        ...data,
      });
      return { ok: true };
    }
    return {
      ok: false,
      error:
        "Contact form is not configured for production. Please email us directly.",
    };
  }

  const subject = `Consultation request from ${data.name} (${data.company})`;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Lead source: ${data.leadSource}`,
    data.interest ? `Interest: ${data.interest}` : null,
    data.sourcePage ? `Source page: ${data.sourcePage}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject,
        text,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Email API error:", response.status);
      return {
        ok: false,
        error: "We could not send your message. Please try again shortly.",
      };
    }

    return { ok: true };
  } catch (error) {
    console.error("[contact] Email send failed:", error);
    return {
      ok: false,
      error: "We could not send your message. Please try again shortly.",
    };
  }
}
