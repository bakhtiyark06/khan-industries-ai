"use client";

import { useActionState } from "react";
import { contactConfig } from "@/config/contact";
import { submitContact } from "@/features/contact/submit-contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Textarea } from "@/components/ui/Textarea";
import type { ContactFormResult } from "@/types";

const initialState: ContactFormResult = {
  success: false,
  message: "",
};

export interface ContactFormProps {
  defaultInterest?: string;
  sourcePage?: string;
}

export function ContactForm({ defaultInterest, sourcePage }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(
    async (_prev: ContactFormResult, formData: FormData) => {
      return submitContact(formData);
    },
    initialState,
  );

  if (state.success) {
    return (
      <div
        className="rounded-lg border border-border bg-navy-elevated p-6"
        role="status"
      >
        <h2 className="text-lg font-medium text-foreground">Request received</h2>
        <p className="mt-2 text-sm text-silver leading-relaxed">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6" noValidate>
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="sr-only"
        aria-hidden="true"
      />
      <input
        type="hidden"
        name="leadSource"
        value={contactConfig.leadSourceDefault}
      />
      {sourcePage && (
        <input type="hidden" name="sourcePage" value={sourcePage} />
      )}

      {state.message && !state.success && (
        <p className="text-sm text-red-400" role="alert">
          {state.message}
        </p>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" required>
          {contactConfig.formFields.name.label}
        </Label>
        <Input id="name" name="name" type="text" autoComplete="name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" required>
          {contactConfig.formFields.email.label}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" required>
          {contactConfig.formFields.company.label}
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">
          {contactConfig.formFields.interest.label}
        </Label>
        <Input
          id="interest"
          name="interest"
          type="text"
          defaultValue={defaultInterest}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" required>
          {contactConfig.formFields.message.label}
        </Label>
        <Textarea id="message" name="message" required rows={5} />
      </div>

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Submit consultation request"}
      </Button>

      <p className="text-xs text-silver">{contactConfig.responseSla}</p>
    </form>
  );
}
