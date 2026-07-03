import { cn } from "@/lib/utils";

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3;
}

const colClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

export function Grid({ children, className, cols = 3 }: GridProps) {
  return (
    <div className={cn("grid gap-6", colClasses[cols], className)}>
      {children}
    </div>
  );
}
