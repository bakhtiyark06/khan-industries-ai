import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-lg border border-border bg-navy-elevated p-6",
        "motion-safe:transition-colors motion-safe:duration-200",
        className,
      )}
    >
      {children}
    </Component>
  );
}
