import { Grid } from "@/components/layout/Grid";

export interface FeatureItem {
  title: string;
  description: string;
}

export interface FeatureGridProps {
  features: FeatureItem[];
}

export function FeatureGrid({ features }: FeatureGridProps) {
  return (
    <Grid cols={3}>
      {features.map((feature) => (
        <div
          key={feature.title}
          className="rounded-lg border border-border bg-navy-elevated p-6"
        >
          <h3 className="text-lg font-medium text-foreground">{feature.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-silver">
            {feature.description}
          </p>
        </div>
      ))}
    </Grid>
  );
}
