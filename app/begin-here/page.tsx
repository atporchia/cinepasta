import type { Metadata } from "next";
import Link from "next/link";
import { beginHereMoodOptions, firstTenMovieIds } from "@/lib/data/moods";
import { getMoviesByIds, getDirectorsForMovie } from "@/lib/utils";
import { SectionHeader } from "@/components/SectionHeader";
import { MoodGrid } from "@/components/MoodGrid";
import { DifficultyLabel } from "@/components/DifficultyLabel";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";

export const metadata: Metadata = {
  title: "Begin Here",
  description:
    "New to classic Italian cinema? Start by feeling, or pick from ten carefully chosen entry films.",
};

export default function BeginHerePage() {
  const firstTen = getMoviesByIds(firstTenMovieIds);

  return (
    <div>
      <section className="border-b border-border-soft bg-background-elevated">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold">
            Never watched classic Italian cinema?
          </p>
          <h1 className="mt-3 font-serif text-3xl font-bold text-foreground sm:text-4xl">
            You do not need to know film history to start.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground-muted">
            Pick what you are curious about: comedy, politics, dreams, loneliness, style,
            friendship, or social reality.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <section>
          <SectionHeader eyebrow="Start by feeling" title="What are you in the mood for?" />
          <MoodGrid options={beginHereMoodOptions} />
        </section>

        <section className="mt-16">
          <SectionHeader
            eyebrow="Or just pick one"
            title="The first 10 films"
            description="A curated set of entry points into classic Italian cinema, chosen for how easy they make that first step."
          />
          <ol className="grid gap-4 sm:grid-cols-2">
            {firstTen.map((movie, index) => {
              const movieDirectors = getDirectorsForMovie(movie);
              return (
                <li key={movie.id}>
                  <Link
                    href={`/movies/${movie.slug}`}
                    className="group flex gap-4 rounded-lg border border-border bg-background-elevated p-4 transition-colors hover:border-gold/40"
                  >
                    <span className="font-serif text-2xl font-bold text-foreground-faint">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <PosterPlaceholder title={movie.title} aspect="aspect-[2/3]" className="w-16 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-serif text-base font-bold text-foreground">{movie.title}</h3>
                      <p className="text-sm text-foreground-muted">
                        {movieDirectors.map((d) => d.name).join(", ")} · {movie.year}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-foreground-muted line-clamp-2">
                        {movie.oneLineDescription}
                      </p>
                      <div className="mt-3">
                        <DifficultyLabel difficulty={movie.difficulty} />
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
    </div>
  );
}
