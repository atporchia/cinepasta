import { initials } from "@/lib/utils";

const GRADIENTS = [
  "from-[#3a1f1c] via-[#241512] to-[#0d0b09]",
  "from-[#2c2414] via-[#1d1712] to-[#0d0b09]",
  "from-[#231a2e] via-[#1a1420] to-[#0d0b09]",
  "from-[#1c2a2c] via-[#141d1e] to-[#0d0b09]",
  "from-[#33231a] via-[#1f1712] to-[#0d0b09]",
];

function pickGradient(seed: string): string {
  const sum = seed.split("").reduce((total, char) => total + char.charCodeAt(0), 0);
  return GRADIENTS[sum % GRADIENTS.length];
}

export function PosterPlaceholder({
  title,
  aspect = "aspect-[2/3]",
  className = "",
}: {
  title: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-md border border-border bg-gradient-to-br ${pickGradient(
        title
      )} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-serif text-4xl font-semibold text-foreground/25 sm:text-5xl">
          {initials(title)}
        </span>
      </div>
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
    </div>
  );
}
