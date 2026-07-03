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
    <div className="mb-10 max-w-2xl motion-safe:animate-fade-in">
      {eyebrow && <p className="text-eyebrow">{eyebrow}</p>}
      <h2 id={id} className="text-h2 mt-2 text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-body text-silver">{description}</p>
      )}
    </div>
  );
}
