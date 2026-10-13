"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Staggered Fade-In Grid (animmasterlib grid-1 inspired)
 *
 * A grid of items that fade-in one by one with a staggered timing delay
 * as they enter the viewport, creating a cascading wave reveal.
 *
 * Wrap any collection of items — they'll fade in row-by-row.
 */
export const StaggeredFadeGrid = ({
  children,
  className,
  staggerDelay = 0.08,
  itemClassName,
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number; // seconds between items
  itemClassName?: string;
}) => {
  // children should be an array
  const items = Array.isArray(children) ? children : [children];

  return (
    <div className={cn("grid", className)}>
      {items.map((child, i) => (
        <motion.div
          key={i}
          className={itemClassName}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.55,
            delay: i * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};
