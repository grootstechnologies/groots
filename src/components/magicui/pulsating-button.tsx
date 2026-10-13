"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * Pulsating Button (Magic UI)
 *
 * A button with an animated pulsing glow ring that draws the eye.
 * Use sparingly for primary conversion CTAs.
 */
export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    pulseColor?: string;
    duration?: string; // CSS time, e.g. "1.5s"
    distance?: string; // CSS length, e.g. "8px"
  }
>(
  (
    {
      className,
      children,
      pulseColor,
      duration = "1.5s",
      distance = "10px",
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-lg text-sm font-bold px-6 py-3 transition-colors",
          className,
        )}
        style={{
          background: "var(--bg, linear-gradient(135deg, #32D583, #00B8E6))",
          color: "#ffffff",
          // Pseudo-element pulse via box-shadow
          animation: "pulsate var(--pulse-duration, 1.5s) ease-in-out infinite",
          // CSS vars consumed by the @keyframes pulsate rule
          ["--pulse-color" as any]: pulseColor || "rgba(234, 88, 12, 0.5)",
          ["--pulse-distance" as any]: distance,
          ["--pulse-duration" as any]: duration,
        }}
        {...props}
      >
        {children}
        <style>{`
          @keyframes pulsate {
            0% {
              box-shadow: 0 0 0 0 var(--pulse-color);
            }
            70% {
              box-shadow: 0 0 0 var(--pulse-distance) transparent;
            }
            100% {
              box-shadow: 0 0 0 0 transparent;
            }
          }
        `}</style>
      </button>
    );
  },
);
PulsatingButton.displayName = "PulsatingButton";
