import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  variant?: "default" | "muted";
}

export function Section({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-navy-elevated/50",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
