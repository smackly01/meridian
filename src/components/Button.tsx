import { Link } from "react-router-dom";
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline-light" | "outline-dark" | "ghost-gold" | "dark";
type Size = "sm" | "md" | "lg";

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

interface ButtonNativeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-[3px] font-display font-semibold text-sm tracking-wide transition-all duration-300 ease-premium disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-ink-900 hover:bg-gold-400 hover:shadow-card",
  dark: "bg-ink-900 text-white hover:bg-ink-700",
  "outline-light":
    "border border-white/25 text-white hover:border-white/60 hover:bg-white/5",
  "outline-dark":
    "border border-ink-900/20 text-ink-900 hover:border-ink-900 hover:bg-ink-900 hover:text-white",
  "ghost-gold": "text-gold-600 hover:text-gold-700",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3",
  lg: "px-7 py-4 text-[0.95rem]",
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
  size = "md",
  className,
  ariaLabel,
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      to={to}
      aria-label={ariaLabel}
      onClick={onClick}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonNativeProps) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
