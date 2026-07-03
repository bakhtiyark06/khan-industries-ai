"use client";

import { useActionState } from "react";
import { contactConfig } from "@/config/contact";
import { routes } from "@/config/routes";
import { submitContact } from "@/features/contact/submit-contact";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
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

  const fieldErrors = state.fieldErrors ?? {};

  if (state.success) {
    return (
      <div
        className="rounded-lg border border-border bg-navy-elevated p-6 motion-safe:animate-fade-in"
        role="status"
      >
        <h2 className="text-h3 text-foreground">Request received</h2>
        <p className="mt-2 text-small leading-relaxed text-silver">
          {state.message}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.home} variant="secondary" size="sm">
            Return home
          </Button>
          <Button href={routes.solutions} variant="ghost" size="sm">
            Explore solutions
          </Button>
        </div>
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

      {state.message && !state.success && !state.fieldErrors && (
        <p className="text-small text-red-400" role="alert">
          {state.message}
        </p>
      )}

      <p className="text-small text-silver">{contactConfig.responseSla}</p>

      <div className="space-y-2">
        <Label htmlFor="name" required>
          {contactConfig.formFields.name.label}
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          error={Boolean(fieldErrors.name)}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? "name-error" : undefined}
        />
        {fieldErrors.name && (
          <p id="name-error" className="text-caption text-red-400" role="alert">
            {fieldErrors.name}
          </p>
        )}
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
          error={Boolean(fieldErrors.email)}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
        />
        {fieldErrors.email && (
          <p id="email-error" className="text-caption text-red-400" role="alert">
            {fieldErrors.email}
          </p>
        )}
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
          error={Boolean(fieldErrors.company)}
          aria-invalid={Boolean(fieldErrors.company)}
          aria-describedby={fieldErrors.company ? "company-error" : undefined}
        />
        {fieldErrors.company && (
          <p id="company-error" className="text-caption text-red-400" role="alert">
            {fieldErrors.company}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="interest">
          {contactConfig.formFields.interest.label}
        </Label>
        <Select
          id="interest"
          name="interest"
          defaultValue={defaultInterest ?? ""}
        >
          {contactConfig.interestOptions.map((option) => (
            <option key={option.value || "empty"} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" required>
          {contactConfig.formFields.message.label}
        </Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          error={Boolean(fieldErrors.message)}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? "message-error" : undefined}
        />
        {fieldErrors.message && (
          <p id="message-error" className="text-caption text-red-400" role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Sending…" : "Submit consultation request"}
      </Button>
    </form>
  );
}
