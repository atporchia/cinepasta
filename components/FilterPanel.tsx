"use client";

export type FilterSelect = {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
};

export function FilterPanel({ filters }: { filters: FilterSelect[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => (
        <label key={filter.label} className="flex flex-col gap-1.5 text-xs text-foreground-faint">
          <span className="font-semibold uppercase tracking-widest">{filter.label}</span>
          <select
            value={filter.value}
            onChange={(event) => filter.onChange(event.target.value)}
            className="rounded-md border border-border bg-background-elevated px-3 py-2 text-sm text-foreground focus:border-gold/50"
          >
            {filter.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
