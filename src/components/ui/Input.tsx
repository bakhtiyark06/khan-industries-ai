import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-lg border border-chrome bg-steel px-3 py-2 text-sm text-foreground",
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
