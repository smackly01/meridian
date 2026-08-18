import { useId, type CSSProperties, type HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { getIcon } from "@/lib/icons";

interface SvgPlaceholderProps {
  label?: string;
  icon?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Elegant, self-contained placeholder used whenever a real photograph
 * is not yet available. Deliberately architectural and sober so that the
 * site never ships with broken images. Replace by setting the `image`
 * field of the corresponding data entry.
 */
export function SvgPlaceholder({ label, icon, className, style }: SvgPlaceholderProps) {
  const id = useId().replace(/:/g, "");
  const Icon = icon ? getIcon(icon) : null;
  return (
    <div
      aria-hidden="true"
      className={cn("relative overflow-hidden bg-ink-900", className)}
      style={style}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <defs>
          <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1B33" />
            <stop offset="55%" stopColor="#081426" />
            <stop offset="100%" stopColor="#050D1A" />
          </linearGradient>
          <pattern id={`grid-${id}`} width="56" height="56" patternUnits="userSpaceOnUse">
            <path
              d="M 56 0 L 0 0 0 56"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id={`glow-${id}`} cx="0.5" cy="0.4" r="0.7">
            <stop offset="0%" stopColor="rgba(201,163,92,0.16)" />
            <stop offset="100%" stopColor="rgba(201,163,92,0)" />
          </radialGradient>
        </defs>
        <rect width="800" height="500" fill={`url(#bg-${id})`} />
        <rect width="800" height="500" fill={`url(#grid-${id})`} />
        <rect width="800" height="500" fill={`url(#glow-${id})`} />
      </svg>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
        {Icon && <Icon className="h-8 w-8 text-gold-500/70" strokeWidth={1.4} />}
        <span className="font-display text-[0.62rem] font-semibold uppercase tracking-overline text-white/45">
          {label || "Illustration"}
        </span>
        <span className="h-px w-10 bg-gold-500/50" />
      </div>
    </div>
  );
}

interface MediaProps extends HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  label?: string;
  icon?: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/**
 * Image with an elegant fallback. If `src` is empty, a premium placeholder
 * is rendered instead - never a broken image.
 */
export function Media({
  src,
  alt,
  label,
  icon,
  className,
  imgClassName,
  eager,
  ...rest
}: MediaProps) {
  if (!src) {
    return <SvgPlaceholder label={label} icon={icon} className={className} />;
  }
  return (
    <div className={cn("relative overflow-hidden bg-mist-100", className)} {...rest}>
      <img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
