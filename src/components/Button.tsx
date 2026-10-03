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

/* Hover: a fill sweeps in from the left and the icon nudges forward. */
const base =
  "relative isolate inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-[3px] font-display font-semibold text-sm tracking-wide transition-[color,border-color] duration-500 ease-premium before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-premium hover:before:scale-x-100 focus-visible:before:scale-x-100 motion-reduce:before:transition-none [&_svg]:transition-transform [&_svg]:duration-500 [&_svg]:ease-premium hover:[&_svg]:translate-x-1 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-gold-500 text-ink-900 before:bg-white",
  dark: "bg-ink-900 text-white before:bg-gold-500 hover:text-ink-900",
  "outline-light": "border border-white/30 text-white before:bg-white hover:border-white hover:text-ink-900",
  "outline-dark": "border border-ink-900/25 text-ink-900 before:bg-ink-900 hover:border-ink-900 hover:text-white",
  "ghost-gold": "text-gold-600 before:hidden hover:text-gold-700",
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
