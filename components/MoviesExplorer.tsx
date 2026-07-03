"use client";

import { useMemo, useState } from "react";
import type { Difficulty, Director, Movie } from "@/lib/types";
import { MovieCard } from "@/components/MovieCard";
import { SearchBar } from "@/components/SearchBar";
import { FilterPanel, type FilterSelect } from "@/components/FilterPanel";

const ALL = "all";

function decadeOf(year: number): string {
  return `${Math.floor(year / 10) * 10}s`;
}

export function MoviesExplorer({ movies, directors }: { movies: Movie[]; directors: Director[] }) {
  const [query, setQuery] = useState("");
  const [directorId, setDirectorId] = useState(ALL);
  const [difficulty, setDifficulty] = useState<Difficulty | typeof ALL>(ALL);
  const [decade, setDecade] = useState(ALL);
  const [goodFirstOnly, setGoodFirstOnly] = useState(ALL);

  const decades = useMemo(
    () => Array.from(new Set(movies.map((movie) => decadeOf(movie.year)))).sort(),
    [movies]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return movies.filter((movie) => {
      if (q) {
        const matchesQuery =
          movie.title.toLowerCase().includes(q) ||
          movie.focus.some((f) => f.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }
      if (directorId !== ALL && !movie.directorIds.includes(directorId)) return false;
      if (difficulty !== ALL && movie.difficulty !== difficulty) return false;
      if (decade !== ALL && decadeOf(movie.year) !== decade) return false;
      if (goodFirstOnly === "yes" && !movie.goodFirstWatch.toLowerCase().startsWith("yes")) {
        return false;
      }
      return true;
    });
  }, [movies, query, directorId, difficulty, decade, goodFirstOnly]);

  const filters: FilterSelect[] = [
    {
      label: "Director",
      value: directorId,
      onChange: setDirectorId,
      options: [
        { label: "All directors", value: ALL },
        ...directors.map((director) => ({ label: director.name, value: director.id })),
      ],
    },
    {
      label: "Difficulty",
      value: difficulty,
      onChange: (value) => setDifficulty(value as Difficulty | typeof ALL),
      options: [
        { label: "All difficulties", value: ALL },
        { label: "Easy entry", value: "Easy entry" },
        { label: "Easy but emotional", value: "Easy but emotional" },
        { label: "Medium", value: "Medium" },
        { label: "Slow but rewarding", value: "Slow but rewarding" },
        { label: "For patient viewers", value: "For patient viewers" },
        { label: "Not casual", value: "Not casual" },
      ],
    },
    {
      label: "Decade",
      value: decade,
      onChange: setDecade,
      options: [{ label: "All decades", value: ALL }, ...decades.map((d) => ({ label: d, value: d }))],
    },
    {
      label: "Good first watch",
      value: goodFirstOnly,
      onChange: setGoodFirstOnly,
      options: [
        { label: "Any", value: ALL },
        { label: "Yes only", value: "yes" },
      ],
    },
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm flex-1">
          <SearchBar value={query} onChange={setQuery} placeholder="Search by title or focus…" />
        </div>
      </div>
      <div className="mt-4">
        <FilterPanel filters={filters} />
      </div>

      <p className="mt-6 text-xs text-foreground-faint">
        {filtered.length} {filtered.length === 1 ? "film" : "films"}
      </p>

      {filtered.length === 0 ? (
        <p className="mt-4 text-sm text-foreground-muted">No films match those filters yet.</p>
      ) : (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}
