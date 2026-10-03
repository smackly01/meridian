/** Key figure: serif numeral over a short label. Rendered static, no counter. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-4xl leading-none text-ink-900 md:text-5xl">{value}</div>
      <div className="mt-3 text-sm text-mist-500">{label}</div>
    </div>
  );
}
