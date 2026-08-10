import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  overline?: string;
  title: ReactNode;
  body?: ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  overline,
  title,
  body,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {overline && (
        <p className={cn("overline mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
          <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          {overline}
          {align === "center" && <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />}
        </p>
      )}
      <h2 className="t-h2 text-balance">{title}</h2>
      {body && (
        <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/70" : "text-mist-600")}>
          {body}
        </p>
      )}
    </ScrollReveal>
  );
}
