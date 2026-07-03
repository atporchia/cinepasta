import type { Metadata } from "next";
import { watchPaths } from "@/lib/data/watchPaths";
import { SectionHeader } from "@/components/SectionHeader";
import { WatchPathCard } from "@/components/WatchPathCard";

export const metadata: Metadata = {
  title: "Watch Paths",
  description: "Curated journeys through classic Italian cinema, organized by theme and mood.",
};

export default function WatchPathsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeader
        eyebrow="Curated journeys"
        title="Watch Paths"
        description="Themed routes through classic Italian cinema, for when you want more than one film."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {watchPaths.map((path) => (
          <WatchPathCard key={path.id} watchPath={path} />
        ))}
      </div>
    </div>
  );
}
