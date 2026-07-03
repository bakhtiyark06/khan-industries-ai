import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/types";

export interface BadgeProps {
  status: ProductStatus | "Offered";
  className?: string;
}

const statusStyles: Record<ProductStatus | "Offered", string> = {
  Concept: "bg-slate text-silver border-border",
  Planned: "bg-slate-muted text-silver border-border",
  "In Development": "bg-slate-muted/50 text-foreground border-border",
  Beta: "bg-gold/20 text-gold border-gold/30",
  Launched: "bg-emerald-900/40 text-emerald-300 border-emerald-700/50",
  Offered: "bg-slate text-silver border-border",
};

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
