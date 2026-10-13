"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Horizontal Parallax Scroll (animmasterlib grid-3 inspired)
 *
 * An infinite horizontal carousel that auto-scrolls continuously. Optional
 * scroll-linked parallax: scrolling the page left/right while it's in view
 * adjusts the speed slightly for added depth.
 *
 * Useful for image galleries, mentor cards, testimonials, etc.
 */
export const HorizontalParallaxScroll = ({
  children,
  className,
  speed = 50, // px per second
  direction = "left",
  gap = "1rem",
  pauseOnHover = true,
  reverseOnSecondRow = false,
}: {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  gap?: string;
  pauseOnHover?: boolean;
  reverseOnSecondRow?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  // Subtle parallax boost — when section is in view, multiply speed
  const parallaxBoost = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1.4, 0.6]);

  useAnimationFrame((_, delta) => {
    const track = trackRef.current;
    if (!track) return;
    const boost = parallaxBoost.get();
    const trackWidth = track.scrollWidth / 2; // we duplicate content so divide by 2
    if (trackWidth === 0) return;

    let next = x.get();
    const v = (speed * boost * delta) / 1000;
    if (direction === "left") {
      next -= v;
      if (next <= -trackWidth) next = 0;
    } else {
      next += v;
      if (next >= 0) next = -trackWidth;
    }
    x.set(next);
  });

  const content = (
    <div
      className={cn("flex shrink-0", pauseOnHover && "hover:[&>*]:[animation-play-state:paused]")}
      style={{ gap }}
    >
      {children}
    </div>
  );

  return (
    <div ref={containerRef} className={cn("relative w-full overflow-hidden", className)}>
      <motion.div
        ref={trackRef}
        className="flex w-max"
        style={{ x, gap }}
      >
        {content}
        {/* Duplicate content for seamless loop */}
        {content}
      </motion.div>
    </div>
  );
};
