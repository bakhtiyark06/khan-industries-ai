import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { contactCta } from "@/config/navigation";

export interface ConsultationInvitationProps {
  title: string;
  description: string;
}

export function ConsultationInvitation({
  title,
  description,
}: ConsultationInvitationProps) {
  return (
    <section className="bg-void py-24 md:py-32">
      <Container size="wide">
        <div className="surface-plate champagne-accent-top rounded-2xl px-8 py-16 text-center md:px-16 md:py-20">
          <h2 className="text-display text-foreground">{title}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-body text-silver">
            {description}
          </p>
          <div className="mt-10">
            <Button href={contactCta.href} size="lg">
              {contactCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
