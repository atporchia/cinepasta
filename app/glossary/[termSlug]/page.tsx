import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { glossary, getGlossaryEntryBySlug } from "@/lib/data/glossary";
import { directors } from "@/lib/data/directors";
import { getMoviesByIds } from "@/lib/utils";

export function generateStaticParams() {
  return glossary.map((entry) => ({ termSlug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ termSlug: string }>;
}): Promise<Metadata> {
  const { termSlug } = await params;
  const entry = getGlossaryEntryBySlug(termSlug);
  if (!entry) return {};

  return {
    title: entry.term,
    description: entry.shortDefinition,
  };
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ termSlug: string }>;
}) {
  const { termSlug } = await params;
  const entry = getGlossaryEntryBySlug(termSlug);
  if (!entry) notFound();

  const relatedDirectors = (entry.relatedDirectorIds ?? [])
    .map((id) => directors.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));
  const relatedMovies = getMoviesByIds(entry.relatedMovieIds ?? []);

  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-widest text-gold">Glossary</p>
      <h1 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
        {entry.term}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-foreground-muted">{entry.shortDefinition}</p>
      {entry.longerExplanation && (
        <p className="mt-4 text-base leading-relaxed text-foreground-muted">
          {entry.longerExplanation}
        </p>
      )}

      {(relatedDirectors.length > 0 || relatedMovies.length > 0) && (
        <div className="mt-10 border-t border-border-soft pt-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
            See it in practice
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            {relatedDirectors.map((director) => (
              <Link
                key={director.id}
                href={`/directors/${director.slug}`}
                className="rounded-full border border-border bg-background-elevated px-4 py-2 text-sm text-foreground hover:border-gold/40"
              >
                {director.name}
              </Link>
            ))}
            {relatedMovies.map((movie) => (
              <Link
                key={movie.id}
                href={`/movies/${movie.slug}`}
                className="rounded-full border border-border bg-background-elevated px-4 py-2 text-sm italic text-foreground hover:border-gold/40"
              >
                {movie.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
