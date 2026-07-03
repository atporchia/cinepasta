import Link from "next/link";
import type { Director } from "@/lib/types";
import { DirectorPhoto } from "@/components/DirectorPhoto";
import { getMovieById } from "@/lib/data/movies";

export function DirectorCard({ director }: { director: Director }) {
  const beginWith = getMovieById(director.beginWithMovieId);

  return (
    <Link
      href={`/directors/${director.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-background-elevated transition-colors hover:border-gold/40"
    >
      <DirectorPhoto
        director={director}
        aspect="aspect-[4/3]"
        className="border-0 border-b border-border"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-serif text-lg font-bold text-foreground">{director.name}</h3>
        <p className="mt-1 text-sm text-foreground-muted">{director.shortIdentity}</p>

        <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-foreground-faint">
          Focus
        </p>
        <p className="mt-1 text-sm text-foreground-muted">{director.focus.slice(0, 4).join(" · ")}</p>

        {beginWith && (
          <p className="mt-4 text-sm text-foreground-muted">
            <span className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              Begin with{" "}
            </span>
            <span className="italic text-foreground">{beginWith.title}</span>
          </p>
        )}

        <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-soft">
          Explore {director.name.split(" ").slice(-1)[0]}
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
