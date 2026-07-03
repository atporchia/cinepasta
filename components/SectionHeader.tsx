export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold text-foreground sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 max-w-2xl text-foreground-muted">{description}</p>
      )}
    </div>
  );
}
