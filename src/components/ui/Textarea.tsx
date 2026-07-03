import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-md border border-border bg-navy-elevated px-3 py-2 text-sm text-foreground",
        "placeholder:text-silver",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted",
        error && "border-red-500",
        className,
      )}
      {...props}
    />
  );
}
