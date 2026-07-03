export function FocusList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-background-elevated-2 px-3 py-1 text-xs tracking-wide text-foreground-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
