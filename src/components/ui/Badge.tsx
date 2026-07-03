import { cn } from "@/lib/utils";
import type { ProductStatus } from "@/types";

export interface BadgeProps {
  status: ProductStatus | "Offered";
  className?: string;
}

const statusStyles: Record<ProductStatus | "Offered", string> = {
  Concept: "border-chrome bg-steel text-silver font-mono text-[11px] tracking-wide uppercase",
  Planned: "border-chrome bg-graphite text-silver font-mono text-[11px] tracking-wide uppercase",
  "In Development": "border-champagne/30 bg-champagne/10 text-titanium-light font-mono text-[11px] tracking-wide uppercase",
  Beta: "border-champagne/40 bg-champagne/15 text-champagne font-mono text-[11px] tracking-wide uppercase",
  Launched: "border-chrome bg-steel text-titanium-light font-mono text-[11px] tracking-wide uppercase",
  Offered: "border-chrome bg-steel text-silver font-mono text-[11px] tracking-wide uppercase",
};

export function Badge({ status, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
