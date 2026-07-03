import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-void hover:bg-titanium-light border border-white/20 shadow-sm",
  secondary:
    "bg-transparent text-foreground border border-chrome hover:border-champagne/40 hover:bg-steel/50",
  ghost:
    "bg-transparent text-silver hover:text-foreground border border-transparent hover:bg-steel/40",
  link: "bg-transparent text-silver hover:text-foreground underline-offset-4 hover:underline p-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm rounded-full",
  md: "h-11 px-5 text-sm rounded-full",
  lg: "h-12 px-7 text-base rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-colors motion-safe:duration-200",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
    "disabled:pointer-events-none disabled:opacity-50",
    variant !== "link" && sizeClasses[size],
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
