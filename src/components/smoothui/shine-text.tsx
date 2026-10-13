"use client";

import { motion, useReducedMotion } from "motion/react";

export interface ShineTextProps {
  /** Base text color (any CSS color). */
  baseColor?: string;
  children?: React.ReactNode;
  text?: string;
  className?: string;
  /** Duration of one sweep, in seconds. */
  duration?: number;
  /** Pause between sweeps, in seconds. */
  repeatDelay?: number;
  /** Color of the sweeping highlight band. */
  shineColor?: string;
}

/**
 * ShineText — a literal light sweep that glides across the text on a loop,
 * using a clipped moving gradient (metallic "shine" / shimmer).
 */
export function ShineText({
  children,
  text,
  className = "",
  duration = 2.5,
  repeatDelay = 0.6,
  baseColor = "currentColor",
  shineColor = "#32D583",
}: ShineTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const content = children ?? text;

  if (shouldReduceMotion) {
    return (
      <span className={className} style={{ color: baseColor }}>
        {content}
      </span>
    );
  }

  return (
    <motion.span
      animate={{ backgroundPositionX: ["150%", "-150%"] }}
      className={className}
      style={{
        backgroundClip: "text",
        backgroundImage: `linear-gradient(110deg, ${baseColor} 40%, ${shineColor} 50%, ${baseColor} 60%)`,
        backgroundSize: "250% 100%",
        color: "transparent",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      transition={{
        duration,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay,
      }}
    >
      {content}
    </motion.span>
  );
}

export default ShineText;

