import type { Metadata } from "next";
import { directors } from "@/lib/data/directors";
import { SectionHeader } from "@/components/SectionHeader";
import { DirectorsExplorer } from "@/components/DirectorsExplorer";

export const metadata: Metadata = {
  title: "Directors",
  description:
    "Meet the directors behind classic Italian cinema — their worlds, their focus, and where to begin with each one.",
};

export default function DirectorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeader
        eyebrow="Director-first"
        title="Every director is a world"
        description="Classic Italian cinema is easier to approach one director at a time. Start with whoever's focus sounds most like you."
      />
      <DirectorsExplorer directors={directors} />
    </div>
  );
}
