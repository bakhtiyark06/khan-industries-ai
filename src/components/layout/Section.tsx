import { cn } from "@/lib/utils";
import { Container } from "./Container";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
  variant?: "default" | "muted" | "void" | "inset" | "plate" | "divider";
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  children,
  className,
  id,
  "aria-labelledby": ariaLabelledby,
  variant = "default",
  containerSize = "default",
}: SectionProps) {
  const isInset = variant === "inset";

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        variant === "void" && "py-24 md:py-32",
        variant === "default" && "py-24 md:py-32",
        variant === "muted" && "bg-titanium/50 py-24 md:py-32",
        variant === "plate" && "bg-graphite py-32 md:py-40",
        variant === "divider" && "border-y border-chrome/50 py-20 md:py-24",
        variant === "inset" && "py-16 md:py-24",
        className,
      )}
    >
      {isInset ? (
        <div className="mx-auto max-w-3xl px-6">
          <div className="surface-plate rounded-2xl p-8 md:p-10 champagne-accent-top">
            {children}
          </div>
        </div>
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </section>
  );
}
