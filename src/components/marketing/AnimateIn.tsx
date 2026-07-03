"use client";

import { cn } from "@/lib/utils";

export interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimateIn({ children, className, delay = 0 }: AnimateInProps) {
  return (
    <div
      className={cn("motion-safe:animate-fade-in", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
