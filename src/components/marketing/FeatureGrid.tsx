import { Grid } from "@/components/layout/Grid";
import { ChartIcon, ClockIcon, ShieldIcon } from "@/components/icons";
import { Card } from "@/components/ui/Card";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: "clock" | "chart" | "shield";
}

export interface FeatureGridProps {
  features: FeatureItem[];
}

const iconMap = {
  clock: ClockIcon,
  chart: ChartIcon,
  shield: ShieldIcon,
} as const;

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <Grid cols={3}>
      {features.map((feature, index) => {
        const Icon = feature.icon ? iconMap[feature.icon] : ClockIcon;
        return (
          <div
            key={feature.title}
            className="motion-safe:animate-fade-in"
            style={{ animationDelay: `${index * 75}ms` }}
          >
            <Card interactive>
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-slate text-silver">
              <Icon />
            </div>
            <h3 className="text-h3 mt-4 text-foreground">{feature.title}</h3>
            <p className="mt-2 text-small leading-relaxed text-silver">
              {feature.description}
            </p>
          </Card>
          </div>
        );
      })}
    </Grid>
  );
}
