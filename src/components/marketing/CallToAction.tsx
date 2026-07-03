import { ConsultationInvitation } from "@/components/marketing/home/ConsultationInvitation";

export interface CallToActionProps {
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

/** @deprecated Prefer ConsultationInvitation for new pages */
export function CallToAction({ title, description }: CallToActionProps) {
  return <ConsultationInvitation title={title} description={description} />;
}
