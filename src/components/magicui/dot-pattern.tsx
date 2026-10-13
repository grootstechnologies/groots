"use client";
import { useEffect, useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Dot Pattern (Magic UI)
 *
 * An SVG dot pattern that fills its container. Each dot can optionally
 * twinkle (glow + scale animation). Uses random delays for organic feel.
 *
 * Useful as an ambient background texture — pairs well with dark sections.
 */
export const DotPattern = ({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  color = "currentColor",
}: {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  color?: string;
}) => {
  const id = useId();
  const containerRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const cols = Math.ceil(dimensions.width / width) || 0;
  const rows = Math.ceil(dimensions.height / height) || 0;
  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: col * width + cx + x,
      y: row * height + cy + y,
      delay: ((i * 7) % 50) / 10,
      duration: 2 + ((i * 3) % 30) / 10,
    };
  });

  return (
    <svg
      ref={containerRef}
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className,
      )}
    >
      <defs>
        <radialGradient id={`${id}-grad`}>
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      {dots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.x}
          cy={dot.y}
          r={cr}
          fill={glow ? `url(#${id}-grad)` : color}
          initial={glow ? { opacity: 0.4, scale: 1 } : undefined}
          animate={
            glow
              ? {
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.5, 1],
                }
              : undefined
          }
          transition={
            glow
              ? {
                  duration: dot.duration,
                  delay: dot.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
};
