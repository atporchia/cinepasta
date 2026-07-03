import Link from "next/link";
import type { WatchPath } from "@/lib/types";
import { FocusList } from "@/components/FocusList";

export function WatchPathCard({ watchPath }: { watchPath: WatchPath }) {
  return (
    <Link
      href={`/watch-paths/${watchPath.slug}`}
      className="group flex flex-col rounded-lg border border-border bg-background-elevated p-6 transition-colors hover:border-gold/40"
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">
        Watch Path
      </p>
      <h3 className="mt-2 font-serif text-xl font-bold text-foreground">{watchPath.title}</h3>
      <p className="mt-1 text-sm text-foreground-muted">{watchPath.subtitle}</p>
      <p className="mt-3 text-sm leading-relaxed text-foreground-muted">{watchPath.description}</p>
      <div className="mt-4">
        <FocusList items={watchPath.focus} />
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-soft">
        {watchPath.movieIds.length} films
        <span aria-hidden>→</span>
      </span>
    </Link>
  );
}
