import type { Metadata } from "next";
import { glossary } from "@/lib/data/glossary";
import { SectionHeader } from "@/components/SectionHeader";
import { GlossaryCard } from "@/components/GlossaryCard";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Plain-language explanations of Italian cinema movements and concepts.",
};

export default function GlossaryPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeader
        eyebrow="Speak the language"
        title="Glossary"
        description="Movements and concepts in classic Italian cinema, explained simply."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.map((entry) => (
          <GlossaryCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
}
