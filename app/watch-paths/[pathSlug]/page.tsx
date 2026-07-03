import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { watchPaths, getWatchPathBySlug } from "@/lib/data/watchPaths";
import { getMoviesByIds } from "@/lib/utils";
import { MovieCard } from "@/components/MovieCard";
import { FocusList } from "@/components/FocusList";

export function generateStaticParams() {
  return watchPaths.map((path) => ({ pathSlug: path.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pathSlug: string }>;
}): Promise<Metadata> {
  const { pathSlug } = await params;
  const path = getWatchPathBySlug(pathSlug);
  if (!path) return {};

  return {
    title: path.title,
    description: path.description,
  };
}

export default async function WatchPathDetailPage({
  params,
}: {
  params: Promise<{ pathSlug: string }>;
}) {
  const { pathSlug } = await params;
  const path = getWatchPathBySlug(pathSlug);
  if (!path) notFound();

  const pathMovies = getMoviesByIds(path.movieIds);

  return (
    <div>
      <section className="border-b border-border-soft bg-background-elevated">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">Watch Path</p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {path.title}
          </h1>
          <p className="mt-2 text-lg text-foreground-muted">{path.subtitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
            {path.description}
          </p>
          <div className="mt-5">
            <FocusList items={path.focus} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pathMovies.map((movie, index) => (
            <li key={movie.id} className="relative">
              <span className="absolute -left-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 bg-background font-serif text-xs font-bold text-gold">
                {index + 1}
              </span>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
