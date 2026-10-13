"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Glitch Text (animmasterlib text-1 inspired)
 *
 * A digital-glitch text reveal: characters scramble through random letters
 * before settling, with RGB-channel split (chromatic aberration) overlays
 * flickering on and off. Pairs well with dark hero sections.
 */
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*<>?";

export const GlitchText = ({
  text,
  className,
  scrambleDuration = 1200,
  rgbSplit = true,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  scrambleDuration?: number;
  rgbSplit?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}) => {
  const [display, setDisplay] = useState(text);
  const [glitching, setGlitching] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.floor(scrambleDuration / 40);
    setGlitching(true);

    intervalRef.current = setInterval(() => {
      frame++;
      // Reveal more of the real text as we approach the end
      const revealCount = Math.floor((frame / totalFrames) * text.length);
      const scrambled = text
        .split("")
        .map((char, i) => {
          if (i < revealCount || char === " ") return char;
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("");
      setDisplay(scrambled);

      if (frame >= totalFrames) {
        setDisplay(text);
        setGlitching(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, 40);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, scrambleDuration]);

  // Periodic re-glitch for ongoing life
  useEffect(() => {
    const reglitch = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    }, 5000 + Math.random() * 3000);
    return () => clearInterval(reglitch);
  }, []);

  const Tag2 = Tag;
  return (
    <Tag2
      className={cn("relative inline-block", className)}
      style={{ position: "relative" }}
    >
      {rgbSplit && glitching && (
        <>
          <span
            aria-hidden
            className="absolute inset-0 text-cyan-400 mix-blend-screen"
            style={{ transform: "translate(-2px, 0)" }}
          >
            {display}
          </span>
          <span
            aria-hidden
            className="absolute inset-0 text-red-500 mix-blend-screen"
            style={{ transform: "translate(2px, 0)" }}
          >
            {display}
          </span>
        </>
      )}
      <span className="relative">{display}</span>
    </Tag2>
  );
};
