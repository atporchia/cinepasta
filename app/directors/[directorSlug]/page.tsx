import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { directors, getDirectorBySlug } from "@/lib/data/directors";
import { getMovieById } from "@/lib/data/movies";
import { getMoviesByIds } from "@/lib/utils";
import { DirectorPhoto } from "@/components/DirectorPhoto";
import { FocusList } from "@/components/FocusList";
import { BeginWithMovie } from "@/components/BeginWithMovie";
import { MovieCard } from "@/components/MovieCard";
import { SectionHeader } from "@/components/SectionHeader";
import { DifficultyLabel } from "@/components/DifficultyLabel";

export function generateStaticParams() {
  return directors.map((director) => ({ directorSlug: director.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ directorSlug: string }>;
}): Promise<Metadata> {
  const { directorSlug } = await params;
  const director = getDirectorBySlug(directorSlug);
  if (!director) return {};

  return {
    title: director.name,
    description: `Discover ${director.name}'s cinema, major films, focus areas, and where to start.`,
  };
}

const START_LABELS = ["Best first watch", "Best representation", "Deeper next step"];

export default async function DirectorDetailPage({
  params,
}: {
  params: Promise<{ directorSlug: string }>;
}) {
  const { directorSlug } = await params;
  const director = getDirectorBySlug(directorSlug);
  if (!director) notFound();

  const beginWith = getMovieById(director.beginWithMovieId);
  const startHereMovies = getMoviesByIds(director.startHereMovieIds);
  const majorMovies = getMoviesByIds(director.majorMovieIds);
  const relatedDirectors = director.relatedDirectorIds
    .map((id) => directors.find((d) => d.id === id))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  const years =
    director.birthYear && director.deathYear
      ? `${director.birthYear}–${director.deathYear}`
      : director.birthYear
        ? `b. ${director.birthYear}`
        : "";

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border-soft bg-background-elevated">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[280px_1fr] md:items-start">
          <DirectorPhoto director={director} aspect="aspect-[4/5]" showCredit sizes="280px" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              {years}
            </p>
            <h1 className="mt-2 font-serif text-3xl font-bold text-foreground sm:text-4xl">
              {director.name}
            </h1>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-foreground-muted">
              {director.shortIdentity}
            </p>
            {beginWith && (
              <div className="mt-6 max-w-md">
                <BeginWithMovie movie={beginWith} />
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-5 py-16 sm:px-8">
        {/* Short bio */}
        <section>
          <SectionHeader title="Who they were" />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {director.shortBio}
          </p>
        </section>

        {/* Director's world */}
        <section>
          <SectionHeader eyebrow="The key section" title={`${director.name.split(" ").slice(-1)[0]}'s world`} />
          <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
            {director.directorsWorld}
          </p>
        </section>

        {/* Focus */}
        <section>
          <SectionHeader title="Focus" />
          <FocusList items={director.focus} />
        </section>

        {/* Cinema language */}
        {director.cinemaLanguage && (
          <section>
            <SectionHeader title="Cinema language" />
            <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {director.cinemaLanguage}
            </p>
          </section>
        )}

        {/* Why they matter today */}
        {director.whyTheyMatterToday && (
          <section>
            <SectionHeader title="Why they matter today" />
            <p className="max-w-3xl text-base leading-relaxed text-foreground-muted">
              {director.whyTheyMatterToday}
            </p>
          </section>
        )}

        {/* Where to start */}
        {startHereMovies.length > 0 && (
          <section>
            <SectionHeader title="Where to start" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {startHereMovies.map((movie, index) => (
                <div key={movie.id}>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-gold">
                    {START_LABELS[index] ?? "Recommended"}
                  </p>
                  <MovieCard movie={movie} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Major successes */}
        {majorMovies.length > 0 && (
          <section>
            <SectionHeader eyebrow="Major successes" title="Films that define this director" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {majorMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </section>
        )}

        {/* Complete filmography */}
        <section>
          <SectionHeader
            title="Complete filmography"
            description="Not every film has a full page yet, but every film is listed."
          />
          <div className="overflow-hidden rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <tbody>
                {director.filmography
                  .slice()
                  .sort((a, b) => a.year - b.year)
                  .map((entry, index) => {
                    const linked = entry.movieId ? getMovieById(entry.movieId) : undefined;
                    return (
                      <tr
                        key={`${entry.title}-${entry.year}`}
                        className={index % 2 === 0 ? "bg-background-elevated" : "bg-background-elevated-2"}
                      >
                        <td className="w-20 px-4 py-3 align-top text-foreground-faint">{entry.year}</td>
                        <td className="px-4 py-3 align-top">
                          {linked ? (
                            <Link href={`/movies/${linked.slug}`} className="font-medium text-foreground hover:text-gold">
                              {entry.title}
                            </Link>
                          ) : (
                            <span className="font-medium text-foreground">{entry.title}</span>
                          )}
                          {entry.role && (
                            <span className="ml-2 text-xs text-foreground-faint">({entry.role})</span>
                          )}
                          {entry.oneLineDescription && (
                            <p className="mt-1 text-foreground-muted">{entry.oneLineDescription}</p>
                          )}
                        </td>
                        <td className="w-40 px-4 py-3 text-right align-top">
                          {linked ? (
                            <span className="inline-flex items-center gap-2">
                              <DifficultyLabel difficulty={linked.difficulty} />
                            </span>
                          ) : (
                            <span className="text-xs text-foreground-faint">Basic entry</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related directors */}
        {relatedDirectors.length > 0 && (
          <section>
            <SectionHeader title="Where to go next" />
            <div className="grid gap-5 sm:grid-cols-2">
              {relatedDirectors.map((related) => (
                <Link
                  key={related.id}
                  href={`/directors/${related.slug}`}
                  className="group flex flex-col rounded-lg border border-border bg-background-elevated p-5 transition-colors hover:border-gold/40"
                >
                  <h3 className="font-serif text-lg font-bold text-foreground">{related.name}</h3>
                  <p className="mt-1 text-sm text-foreground-muted">{related.shortIdentity}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-soft">
                    Explore {related.name.split(" ").slice(-1)[0]}
                    <span aria-hidden>→</span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
