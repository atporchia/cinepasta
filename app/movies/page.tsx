import type { Metadata } from "next";
import { movies } from "@/lib/data/movies";
import { directors } from "@/lib/data/directors";
import { SectionHeader } from "@/components/SectionHeader";
import { MoviesExplorer } from "@/components/MoviesExplorer";

export const metadata: Metadata = {
  title: "Movies",
  description:
    "Browse classic Italian films with spoiler-free guidance on what each one is about, why it matters, and whether it's a good first watch.",
};

export default function MoviesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeader
        eyebrow="Spoiler-free by default"
        title="Every film, explained before you press play"
        description="Filter by director, difficulty, decade, or focus to find the right film for tonight."
      />
      <MoviesExplorer movies={movies} directors={directors} />
    </div>
  );
}
