import { MovieCard } from "@/components/MovieCard";
import type { Movie } from "@/lib/types";

export function RelatedMovies({ movies, title = "Where to go next" }: { movies: Movie[]; title?: string }) {
  if (movies.length === 0) return null;

  return (
    <div>
      <h2 className="font-serif text-xl font-bold text-foreground">{title}</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
