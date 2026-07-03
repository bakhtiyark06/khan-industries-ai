"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

export interface NavLinksProps {
  items: NavItem[];
  linkClassName?: string;
  onNavigate?: () => void;
}

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({
  items,
  linkClassName,
  onNavigate,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              linkClassName,
              active && "text-foreground",
              active &&
                "underline decoration-champagne decoration-2 underline-offset-4",
            )}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
