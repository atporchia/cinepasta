import Image from "next/image";
import type { Director } from "@/lib/types";
import { PosterPlaceholder } from "@/components/PosterPlaceholder";

export function DirectorPhoto({
  director,
  aspect = "aspect-[4/3]",
  className = "",
  sizes = "(min-width: 768px) 280px, 100vw",
  showCredit = false,
}: {
  director: Director;
  aspect?: string;
  className?: string;
  sizes?: string;
  showCredit?: boolean;
}) {
  if (!director.imageUrl) {
    return <PosterPlaceholder title={director.name} aspect={aspect} className={className} />;
  }

  return (
    <div className={`relative ${aspect} w-full overflow-hidden border border-border bg-background-elevated-2 ${className}`}>
      <Image
        src={director.imageUrl}
        alt={`Black-and-white portrait of ${director.name}`}
        fill
        sizes={sizes}
        className="object-contain grayscale contrast-105"
      />
      {showCredit && director.imageCredit && (
        <p className="absolute bottom-0 right-0 bg-background/70 px-2 py-1 text-[10px] leading-none text-foreground-faint">
          {director.imageCredit}
        </p>
      )}
    </div>
  );
}
