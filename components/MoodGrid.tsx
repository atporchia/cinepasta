import Link from "next/link";
import type { MoodOption } from "@/lib/types";

export function MoodGrid({ options }: { options: MoodOption[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((option) => (
        <Link
          key={option.id}
          href={option.href}
          className="group flex items-center justify-between rounded-lg border border-border bg-background-elevated px-5 py-4 text-sm text-foreground transition-colors hover:border-gold/40"
        >
          <span>{option.label}</span>
          <span aria-hidden className="text-gold transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      ))}
    </div>
  );
}
