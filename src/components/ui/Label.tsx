import { cn } from "@/lib/utils";

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({
  className,
  children,
  required,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn("text-sm font-medium text-foreground", className)}
      {...props}
    >
      {children}
      {required && (
        <span className="text-silver ml-1" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}
