import Link from "next/link";
import type { Movie } from "@/lib/types";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";

export function BeginWithMovie({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movies/${movie.slug}`}
      className="group flex items-center gap-5 rounded-lg border border-gold/30 bg-background-elevated-2 p-5 transition-colors hover:border-gold/60"
    >
      <PosterPlaceholder title={movie.title} aspect="aspect-[2/3]" className="w-16 shrink-0" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-gold">Begin with</p>
        <p className="mt-1 font-serif text-lg font-bold italic text-foreground">{movie.title}</p>
        <p className="mt-1 text-sm text-foreground-muted">{movie.oneLineDescription}</p>
      </div>
    </Link>
  );
}
