import { useEffect, useRef, useState } from "react";
import { useInView } from "@/lib/useInView";

interface StatProps {
  value: string;
  label: string;
  suffix?: string;
  duration?: number;
}

/** Animated counter - animates only numeric values; placeholders render as-is. */
export function Stat({ value, label, suffix = "", duration = 1600 }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.4);
  const [display, setDisplay] = useState(0);
  const numeric = /^-?\d+(\.\d+)?$/.test(value);
  const target = numeric ? Number(value) : 0;

  useEffect(() => {
    if (!inView || !numeric) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, target, duration]);

  return (
    <div ref={ref}>
      <div className="font-display text-3xl font-extrabold tracking-tight text-ink-900 md:text-4xl">
        {numeric ? (
          <>
            {Math.round(display).toLocaleString("fr-FR")}
            {suffix}
          </>
        ) : (
          <span className="text-[0.95rem] font-bold leading-snug md:text-xl">{value}</span>
        )}
      </div>
      <div className="mt-2 text-sm text-mist-500">{label}</div>
    </div>
  );
}
