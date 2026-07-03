import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
}

export function Select({ className, error, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-md border border-border bg-navy-elevated px-3 py-2 text-sm text-foreground",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted",
        error && "border-red-500",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
