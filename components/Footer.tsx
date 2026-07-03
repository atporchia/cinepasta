import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border-soft bg-background-elevated">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <p className="font-serif text-lg font-bold text-foreground">
              Cine<span className="text-accent">Pasta</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground-muted">
              Classic Italian cinema, without the museum feeling.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              Explore
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/directors" className="text-foreground-muted hover:text-gold">Directors</Link></li>
              <li><Link href="/movies" className="text-foreground-muted hover:text-gold">Movies</Link></li>
              <li><Link href="/watch-paths" className="text-foreground-muted hover:text-gold">Watch Paths</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              Start
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/begin-here" className="text-foreground-muted hover:text-gold">Begin Here</Link></li>
              <li><Link href="/glossary" className="text-foreground-muted hover:text-gold">Glossary</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-faint">
              About
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground-muted">
              CinePasta is an editorial guide, not an academic archive. Images are placeholders during development.
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border-soft pt-6 text-xs text-foreground-faint">
          © {new Date().getFullYear()} CinePasta. Made for people curious about classic Italian cinema.
        </div>
      </div>
    </footer>
  );
}
