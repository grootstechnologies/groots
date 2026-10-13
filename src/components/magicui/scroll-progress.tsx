"use client";
import { motion, useScroll } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Scroll Progress (Magic UI)
 *
 * A thin fixed progress bar at the top of the viewport that fills as the
 * user scrolls down the page. Mount it once at the page root.
 */
export const ScrollProgress = ({
  className,
  color = "#0878E8",
}: {
  className?: string;
  color?: string;
}) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[100] h-[3px] origin-left",
        className,
      )}
      style={{
        scaleX: scrollYProgress,
        background: `linear-gradient(to right, #0878E8, #32D583, #00B8E6, #32D583)`,
        boxShadow: `0 0 12px ${color}80`,
      }}
    />
  );
};
