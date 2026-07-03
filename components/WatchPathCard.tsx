import Link from "next/link";
import type { WatchPath } from "@/lib/types";
import { FocusList } from "@/components/FocusList";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";

export function WatchPathCard({ watchPath }: { watchPath: WatchPath }) {
  return (
    <Link
      href={`/watch-paths/${watchPath.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background-elevated transition-colors hover:border-gold/40"
    >
      <PosterPlaceholder
        title={watchPath.title}
        aspect="aspect-[2/3]"
        className="rounded-none border-0 border-b border-border"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Watch Path</p>
        <h3 className="mt-1 font-serif text-lg font-bold text-foreground">{watchPath.title}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{watchPath.subtitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-3">
          {watchPath.description}
        </p>
        <div className="mt-3">
          <FocusList items={watchPath.focus.slice(0, 3)} />
        </div>
        <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-gold group-hover:text-gold-soft">
          {watchPath.movieIds.length} films
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
