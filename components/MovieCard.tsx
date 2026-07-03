import Link from "next/link";
import type { Movie } from "@/lib/types";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";
import { DifficultyLabel } from "@/components/DifficultyLabel";
import { getDirectorsForMovie } from "@/lib/utils";

export function MovieCard({ movie }: { movie: Movie }) {
  const movieDirectors = getDirectorsForMovie(movie);

  return (
    <Link
      href={`/movies/${movie.slug}`}
      className="group flex gap-4 rounded-lg border border-border bg-background-elevated p-4 transition-colors hover:border-gold/40 sm:flex-col sm:gap-0 sm:p-0"
    >
      <PosterPlaceholder title={movie.title} className="w-24 shrink-0 rounded-md sm:w-full sm:rounded-none sm:rounded-t-lg sm:border-0 sm:border-b" />
      <div className="flex flex-1 flex-col sm:p-5">
        <p className="text-xs text-foreground-faint">{movie.year}</p>
        <h3 className="font-serif text-base font-bold leading-snug text-foreground sm:text-lg">
          {movie.title}
        </h3>
        {movieDirectors.length > 0 && (
          <p className="mt-1 text-sm text-foreground-muted">
            {movieDirectors.map((d) => d.name).join(", ")}
          </p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-2 sm:line-clamp-3">
          {movie.oneLineDescription}
        </p>
        <div className="mt-3">
          <DifficultyLabel difficulty={movie.difficulty} />
        </div>
      </div>
    </Link>
  );
}
