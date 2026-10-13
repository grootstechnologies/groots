"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Circular Text Rotation (animmasterlib text-2 inspired)
 *
 * Text arranged in a circle, rotating continuously around a central point.
 * Use as a "stamp"/"seal" badge with a CTA or icon in the middle.
 */
export const CircularText = ({
  text,
  className,
  duration = 22,
  size = 160,
  fontSize = 13,
  color = "#0878E8",
  children,
}: {
  text: string;
  className?: string;
  duration?: number; // seconds per full rotation
  size?: number; // px
  fontSize?: number; // px
  color?: string;
  children?: React.ReactNode; // center content (icon, CTA, etc.)
}) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Split text into characters, distribute around the circle
  const chars = text.split("");
  const radius = size / 2 - fontSize;

  if (!mounted) {
    return (
      <div
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: size, height: size }}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Center content — counter-rotates so it stays upright */}
      {children && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: -360 }}
          transition={{ duration, repeat: Infinity, ease: "linear" }}
        >
          {children}
        </motion.div>
      )}

      {/* Circular text characters */}
      {chars.map((char, i) => {
        const angle = (i / chars.length) * 360;
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;
        return (
          <span
            key={i}
            className="absolute font-bold"
            style={{
              left: "50%",
              top: "50%",
              fontSize,
              color,
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle + 90}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </motion.div>
  );
};
