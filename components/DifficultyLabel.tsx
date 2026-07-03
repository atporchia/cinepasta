import type { Difficulty } from "@/lib/types";

const STYLES: Record<Difficulty, string> = {
  "Easy entry": "text-gold-soft border-gold-soft/40",
  "Easy but emotional": "text-gold-soft border-gold-soft/40",
  Medium: "text-foreground-muted border-border",
  "Slow but rewarding": "text-foreground-muted border-border",
  "For patient viewers": "text-accent-hover border-accent/40",
  "Not casual": "text-accent-hover border-accent/40",
};

export function DifficultyLabel({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-1 text-xs tracking-wide ${STYLES[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}
