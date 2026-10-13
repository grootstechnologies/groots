"use client";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Aurora Card (Unlumen-inspired)
 *
 * A card with a large animated gradient blob floating behind/inside it,
 * creating an aurora-like glow effect. The blob slowly morphs + drifts.
 * Optional 3D tilt on hover (mouse-tracked).
 *
 * Useful for highlighting a single premium card (e.g., earnings potential,
 * flagship program).
 */
export const AuroraCard = ({
  children,
  className,
  blobColor = "#0878E8",
  blobColor2 = "#32D583",
  tilt = true,
  glowSize = 1.2,
}: {
  children: React.ReactNode;
  className?: string;
  blobColor?: string;
  blobColor2?: string;
  tilt?: boolean;
  glowSize?: number; // multiplier for blob size relative to card
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Smoothed rotation values
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={tilt ? { rotateX: rotX, rotateY: rotY, transformPerspective: 800 } : undefined}
      className={cn(
        "relative overflow-hidden rounded-3xl bg-[#0a0a0a] ring-1 ring-white/10",
        className,
      )}
    >
      {/* Aurora blob layer */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0.4 }}
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, glowSize, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute -top-1/4 -left-1/4 h-[60%] w-[60%] rounded-full blur-3xl"
          style={{ background: blobColor }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 h-[60%] w-[60%] rounded-full blur-3xl"
          style={{ background: blobColor2 }}
        />
      </motion.div>
      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
