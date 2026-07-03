"use client";

import { useMemo, useState } from "react";
import type { Director } from "@/lib/types";
import { DirectorCard } from "@/components/DirectorCard";
import { SearchBar } from "@/components/SearchBar";

export function DirectorsExplorer({ directors }: { directors: Director[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return directors;
    return directors.filter((director) =>
      [director.name, director.shortIdentity, ...director.focus].some((field) =>
        field.toLowerCase().includes(q)
      )
    );
  }, [directors, query]);

  return (
    <div>
      <div className="max-w-sm">
        <SearchBar value={query} onChange={setQuery} placeholder="Search by name or focus…" />
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-sm text-foreground-muted">
          No directors match that search yet.
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((director) => (
            <DirectorCard key={director.id} director={director} />
          ))}
        </div>
      )}
    </div>
  );
}
