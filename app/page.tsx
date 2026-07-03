import Link from "next/link";
import { directors } from "@/lib/data/directors";
import { watchPaths } from "@/lib/data/watchPaths";
import { getMovieById } from "@/lib/data/movies";
import { homeMoodOptions } from "@/lib/data/moods";
import { DirectorCard } from "@/components/DirectorCard";
import { WatchPathCard } from "@/components/WatchPathCard";
import { SectionHeader } from "@/components/SectionHeader";
import { MoodGrid } from "@/components/MoodGrid";
import { DifficultyLabel } from "@/components/DifficultyLabel";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";

export default function HomePage() {
  const featuredWatchPath = watchPaths.find((path) => path.id === "laughing-at-italy")!;
  const featuredMovie = getMovieById("il-sorpasso")!;

  return (
    <div>
      {/* Hero */}
      <section className="grain border-b border-border-soft bg-gradient-to-b from-background-elevated to-background">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            CinePasta
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl font-bold leading-tight text-foreground sm:text-6xl">
            Classic Italian cinema, without the museum feeling.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground-muted">
            Discover directors, films, and stories that made Italian cinema human, funny,
            strange, political, beautiful, and unforgettable.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/begin-here"
              className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent-hover"
            >
              Begin here
            </Link>
            <Link
              href="/directors"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-gold/50"
            >
              Explore directors
            </Link>
          </div>
        </div>
      </section>

      {/* Director preview cards */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionHeader
          eyebrow="Where to start"
          title="Meet the directors"
          description="Each director opens into a full creative world: their focus, their major films, and where to begin."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {directors
            .filter((director) => director.priority === 1)
            .map((director) => (
              <DirectorCard key={director.id} director={director} />
            ))}
        </div>
        <div className="mt-6">
          <Link href="/directors" className="text-sm font-medium text-gold hover:text-gold-soft">
            See all directors →
          </Link>
        </div>
      </section>

      {/* Begin by mood */}
      <section className="border-y border-border-soft bg-background-elevated">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionHeader
            eyebrow="No prior knowledge needed"
            title="Begin by mood"
            description="Not sure where to start? Pick the feeling you're after."
          />
          <MoodGrid options={homeMoodOptions} />
        </div>
      </section>

      {/* Featured watch path + featured movie */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Featured watch path" title="A curated journey" />
            <WatchPathCard watchPath={featuredWatchPath} />
          </div>

          <div>
            <SectionHeader eyebrow="Featured movie" title="Start with Il sorpasso" />
            <Link
              href={`/movies/${featuredMovie.slug}`}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-background-elevated transition-colors hover:border-gold/40 sm:flex-row"
            >
              <PosterPlaceholder
                title={featuredMovie.title}
                aspect="aspect-[2/3]"
                className="w-full rounded-none border-0 sm:w-40"
              />
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs text-foreground-faint">
                  {featuredMovie.year} · Dino Risi
                </p>
                <h3 className="mt-1 font-serif text-xl font-bold text-foreground">
                  {featuredMovie.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  A road movie, a comedy, and a portrait of Italy rushing into modern life.
                </p>
                <div className="mt-4">
                  <DifficultyLabel difficulty={featuredMovie.difficulty} />
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:text-gold-soft">
                  Open movie page
                  <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
