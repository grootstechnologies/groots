"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * GROOTS brand logo — dual-mode with gif-style crossfade between two logos.
 *
 * Two source files (both preserved at their original brand colors — we never
 * recolor the logos themselves, only the surrounding website):
 *
 *   primary   = /logos/groots-logo.png              (existing GROOTS wordmark
 *                                                    + "EDUCATION TO EMPLOYMENT"
 *                                                    tagline, orange + green)
 *
 *   secondary = /logos/groots-logo-secondary.png     (newly uploaded
 *                                                    "GREEN ROOTS TRAINING &
 *                                                    PLACEMENTS" logo, orange
 *                                                    + green)
 *
 * Header usage: <DualLogo interval={2600} /> — the two logos crossfade in
 * place, giving a "gif" feel without any image processing. Both logos keep
 * their original colors intact.
 *
 * If you only need a single static logo (e.g. in the Footer), pass
 * `variant="light"` to use the inverted-on-dark version, or `variant="dark"`
 * for the original. This is the legacy behavior, preserved for back-compat.
 */

const SRC_PRIMARY = "/logos/groots-logo.png";             // GROOTS — Education to Employment
const SRC_SECONDARY = "/logos/groots-logo-training.png"; // GROOTS — Training & Placements (full logo, transparent bg)
const SRC_LIGHT = "/logos/groots-logo-light.png";         // Inverted-on-dark version

/* ----------------------- Dual crossfade logo ------------------------ */
export function DualLogo({
  interval = 2600,
  className,
  prioritySrc = "primary",
}: {
  /** Milliseconds each logo is fully visible before crossfade begins. */
  interval?: number;
  className?: string;
  /** Which logo is shown first. */
  prioritySrc?: "primary" | "secondary";
}) {
  const [index, setIndex] = useState<0 | 1>(
    prioritySrc === "secondary" ? 1 : 0
  );

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i === 0 ? 1 : 0));
    }, interval);
    return () => clearInterval(t);
  }, [interval]);

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center",
        "min-h-[2.75rem] min-w-[10rem]",
        className
      )}
      /* Aspect ratio of both logo PNGs (956×325) — sizes the container from
         the height passed via className, replacing the old invisible spacer
         <img alt=""> (audit: images must all carry alt text). */
      style={{ aspectRatio: "956 / 325" }}
      aria-label="GROOTS — Education to Employment / Green Roots Training & Placements"
      role="img"
    >
      {/* Two stacked logos; we crossfade opacity. */}
      <img
        src={SRC_PRIMARY}
        alt="GROOTS — Education to Employment"
        className={cn(
          "h-full w-auto max-w-none object-contain transition-opacity duration-700 ease-out",
          index === 0 ? "opacity-100" : "opacity-0"
        )}
        style={{ position: "absolute", inset: 0, height: "100%" }}
        draggable={false}
      />
      <img
        src={SRC_SECONDARY}
        alt="Green Roots Training & Placements"
        className={cn(
          "h-full w-auto max-w-none object-contain transition-opacity duration-700 ease-out",
          index === 1 ? "opacity-100" : "opacity-0"
        )}
        style={{ position: "absolute", inset: 0, height: "100%" }}
        draggable={false}
      />
    </span>
  );
}

/* ------------------------- Single static logo ----------------------- */
/**
 * Legacy single-logo component (kept for Footer / non-animated contexts).
 */
export function Logo({
  variant = "light",
  showTagline = true,
  className,
  imgClassName,
}: {
  variant?: "light" | "dark" | "secondary";
  showTagline?: boolean;
  className?: string;
  imgClassName?: string;
}) {
  const src =
    variant === "light"
      ? SRC_LIGHT
      : variant === "secondary"
      ? SRC_SECONDARY
      : SRC_PRIMARY;

  return (
    <img
      src={src}
      alt="GROOTS — Education to Employment"
      className={cn(
        "object-contain",
        !className?.includes("h-") && (showTagline ? "h-10" : "h-9"),
        imgClassName,
        className
      )}
    />
  );
}
