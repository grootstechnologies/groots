"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Border Beam (Magic UI)
 *
 * An animated gradient beam that travels around the perimeter of an element.
 * Place it as a child of any `relative` container; it will animate along
 * the border in a continuous loop.
 */
export const BorderBeam = ({
  className,
  size = 80,
  duration = 6,
  delay = 0,
  colorFrom = "#0878E8",
  colorTo = "#32D583",
  reverse = false,
  initialOffset = 0,
  borderWidth = 1,
}: {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  reverse?: boolean;
  initialOffset?: number;
  borderWidth?: number;
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] border-[length:--border-beam-width] border-transparent",
        className,
      )}
      style={
        {
          "--border-beam-width": `${borderWidth}px`,
          maskImage:
            "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
          WebkitMaskImage:
            "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        } as React.CSSProperties
      }
    >
      <motion.div
        className="absolute aspect-square"
        style={
          {
            width: size,
            // Use offset-path to follow the border rectangle
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            background: `linear-gradient(to left, ${colorFrom}, ${colorTo}, transparent)`,
            ...{},
          } as React.CSSProperties
        }
        initial={{ offsetDistance: `${initialOffset}%` }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
        }}
      />
    </div>
  );
};
