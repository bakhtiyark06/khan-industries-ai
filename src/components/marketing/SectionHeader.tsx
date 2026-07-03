export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-wider text-silver">
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-silver leading-relaxed">{description}</p>
      )}
    </div>
  );
}
