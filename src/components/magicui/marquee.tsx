"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Marquee (Magic UI)
 *
 * A lightweight horizontal/vertical scrolling container. Children are
 * repeated N times to create a seamless infinite loop.
 *
 * Simpler than Aceternity's InfiniteMovingCards — no item styling, just
 * the scrolling container. Pair with your own children (image cards,
 * logos, text, etc).
 */
export const Marquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  duration = "40s",
  gap = "1rem",
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  duration?: string;
  gap?: string;
}) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      style={
        {
          "--duration": duration,
          "--gap": gap,
        } as React.CSSProperties
      }
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex shrink-0 justify-around",
              vertical ? "flex-col animate-marquee-vertical" : "flex-row animate-marquee",
              pauseOnHover && "group-hover:[animation-play-state:paused]",
              reverse && "[animation-direction:reverse]",
            )}
            style={{ gap }}
          >
            {children}
          </div>
        ))}
    </div>
  );
};
