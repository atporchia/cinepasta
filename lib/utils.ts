import { directors } from "@/lib/data/directors";
import { movies } from "@/lib/data/movies";
import type { Movie } from "@/lib/types";

export function getDirectorsForMovie(movie: Movie) {
  return movie.directorIds
    .map((id) => directors.find((director) => director.id === id))
    .filter((director): director is NonNullable<typeof director> => Boolean(director));
}

export function getMoviesByIds(ids: string[]): Movie[] {
  return ids
    .map((id) => movies.find((movie) => movie.id === id))
    .filter((movie): movie is Movie => Boolean(movie));
}

export function initials(title: string): string {
  return title
    .split(" ")
    .filter((word) => word.length > 0 && /[a-zà-ü]/i.test(word[0]))
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
}
