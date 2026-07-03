import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { movies, getMovieBySlug } from "@/lib/data/movies";
import { getDirectorsForMovie, getMoviesByIds } from "@/lib/utils";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";
import { DifficultyLabel } from "@/components/DifficultyLabel";
import { FocusList } from "@/components/FocusList";
import { RelatedMovies } from "@/components/RelatedMovies";
import { SectionHeader } from "@/components/SectionHeader";

export function generateStaticParams() {
  return movies.map((movie) => ({ movieSlug: movie.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ movieSlug: string }>;
}): Promise<Metadata> {
  const { movieSlug } = await params;
  const movie = getMovieBySlug(movieSlug);
  if (!movie) return {};

  return {
    title: movie.title,
    description: movie.oneLineDescription,
  };
}

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ movieSlug: string }>;
}) {
  const { movieSlug } = await params;
  const movie = getMovieBySlug(movieSlug);
  if (!movie) notFound();

  const movieDirectors = getDirectorsForMovie(movie);
  const nextMovies = getMoviesByIds(movie.whereToGoNextMovieIds);

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border-soft bg-background-elevated">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[240px_1fr] md:items-start">
          <PosterPlaceholder title={movie.title} aspect="aspect-[2/3]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              {movieDirectors.map((d) => d.name).join(", ")}, {movie.year}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold italic text-foreground sm:text-4xl">
              {movie.title}
            </h1>
            {movie.originalTitle && movie.originalTitle !== movie.title && (
              <p className="mt-1 text-sm text-foreground-faint">{movie.originalTitle}</p>
            )}
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">
              {movie.oneLineDescription}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <DifficultyLabel difficulty={movie.difficulty} />
              {movieDirectors.map((director) => (
                <Link
                  key={director.id}
                  href={`/directors/${director.slug}`}
                  className="text-sm font-medium text-gold hover:text-gold-soft"
                >
                  More from {director.name} →
                </Link>
              ))}
            </div>
            <div className="mt-5">
              <FocusList items={movie.focus} />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-14 px-5 py-16 sm:px-8">
        <section>
          <SectionHeader title="What it's about" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {movie.whatItsAbout}
          </p>
        </section>

        <section>
          <SectionHeader title="Why it matters" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {movie.whyItMatters}
          </p>
        </section>

        <section>
          <SectionHeader title="What makes it special" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {movie.whatMakesItSpecial}
          </p>
        </section>

        <section>
          <SectionHeader title="What to notice" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {movie.whatToNotice}
          </p>
        </section>

        {movieDirectors.length > 0 && (
          <section>
            <SectionHeader title="Place in the director's world" />
            <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {movie.placeInDirectorsWorld}
            </p>
          </section>
        )}

        <section className="rounded-lg border border-gold/30 bg-background-elevated-2 p-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Good first watch?
          </p>
          <p className="mt-2 max-w-2xl text-base leading-relaxed text-foreground">
            {movie.goodFirstWatch}
          </p>
        </section>

        <section>
          <SectionHeader title="Watch this if you like…" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {movie.watchThisIfYouLike}
          </p>
        </section>

        <RelatedMovies movies={nextMovies} />
      </div>
    </div>
  );
}
