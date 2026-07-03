import Link from "next/link";
import type { GlossaryEntry } from "@/lib/types";

export function GlossaryCard({ entry }: { entry: GlossaryEntry }) {
  return (
    <Link
      href={`/glossary/${entry.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-gold/40"
    >
      <h3 className="font-serif text-lg font-bold text-foreground">{entry.term}</h3>
      <p className="mt-2 text-sm leading-relaxed text-foreground-muted">{entry.shortDefinition}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-soft">
        Read more
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
