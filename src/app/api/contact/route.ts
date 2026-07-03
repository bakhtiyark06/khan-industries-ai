import { NextResponse } from "next/server";
import { validateContactForm } from "@/features/contact/schema";
import { sendContactNotification } from "@/features/contact/send-notification";
import { contactConfig } from "@/config/contact";

export async function POST(request: Request) {
  let body: Record<string, unknown>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: { code: "INVALID_JSON", message: "Invalid request body." } },
      { status: 400 },
    );
  }

  if (body.website) {
    return NextResponse.json({ data: { success: true } });
  }

  const validation = validateContactForm({
    name: String(body.name ?? ""),
    email: String(body.email ?? ""),
    company: String(body.company ?? ""),
    message: String(body.message ?? ""),
    interest: body.interest ? String(body.interest) : undefined,
    sourcePage: body.sourcePage ? String(body.sourcePage) : undefined,
    leadSource: String(body.leadSource ?? contactConfig.leadSourceDefault),
  });

  if (!validation.valid) {
    const message = Object.values(validation.errors)[0];
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message } },
      { status: 400 },
    );
  }

  const result = await sendContactNotification(validation.data);

  if (!result.ok) {
    return NextResponse.json(
      { error: { code: "SEND_FAILED", message: result.error } },
      { status: 503 },
    );
  }

  return NextResponse.json({ data: { success: true } });
}
