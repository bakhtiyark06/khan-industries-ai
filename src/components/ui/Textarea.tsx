import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-lg border border-chrome bg-steel px-3 py-2 text-sm text-foreground",
        "placeholder:text-silver",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]",
        error && "border-red-500",
        className,
      )}
      {...props}
    />
  );
}
