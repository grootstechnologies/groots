"use client";
import { useCallback, useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Magic Card (Magic UI)
 *
 * A card with a radial gradient spotlight that follows the cursor.
 * On mouse enter, the spotlight fades in. On mouse leave, it fades out.
 *
 * Simpler than the official Magic UI version — uses a single mousemove
 * handler and a CSS radial gradient overlay.
 */
export const MagicCard = ({
  children,
  className,
  gradientColor = "#0878E8",
  gradientSize = 200,
  gradientOpacity = 0.4,
}: {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
  gradientSize?: number;
  gradientOpacity?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-gradientSize);
  const mouseY = useMotionValue(-gradientSize);
  const [visible, setVisible] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  const background = useMotionTemplate`radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => {
        setVisible(false);
        mouseX.set(-gradientSize);
        mouseY.set(-gradientSize);
      }}
      className={cn(
        "group relative overflow-hidden rounded-2xl",
        className,
      )}
    >
      {/* Mouse-following spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background,
          opacity: visible ? gradientOpacity : 0,
        }}
      />
      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
