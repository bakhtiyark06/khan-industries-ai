import Image from "next/image";
import Link from "next/link";
import { brandConfig } from "@/config/brand";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

const sizeClasses = {
  sm: "h-8",
  md: "h-9",
  lg: "h-10",
} as const;

type LogoSize = keyof typeof sizeClasses;

export interface LogoProps {
  size?: LogoSize;
  className?: string;
  linked?: boolean;
  priority?: boolean;
  onClick?: () => void;
}

export function Logo({
  size = "md",
  className,
  linked = true,
  priority = false,
  onClick,
}: LogoProps) {
  const image = (
    <Image
      src={brandConfig.logoPath}
      alt={brandConfig.logoAlt}
      width={brandConfig.logoWidth}
      height={brandConfig.logoHeight}
      className={cn("w-auto object-contain", sizeClasses[size], className)}
      priority={priority}
    />
  );

  if (!linked) {
    return image;
  }

  return (
    <Link
      href={routes.home}
      className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-muted"
      onClick={onClick}
    >
      {image}
    </Link>
  );
}
