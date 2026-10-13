"use client";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Tilt Card (Unlumen-inspired)
 *
 * A card that tilts in 3D space following the cursor. Subtle perspective shift
 * adds depth without being distracting. Optional glare effect.
 */
export const TiltCard = ({
  children,
  className,
  maxTilt = 8,
  glare = true,
  glareColor = "rgba(8, 120, 232,   0.15)",
  scale = 1.02,
}: {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // degrees
  glare?: boolean;
  glareColor?: string;
  scale?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5); // 0..1
  const y = useMotionValue(0.5);

  const rotX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 200,
    damping: 18,
  });
  const rotY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 200,
    damping: 18,
  });

  // Glare position
  const glareX = useTransform(x, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(y, [0, 1], ["0%", "100%"]);
  const glareBg = useTransform(
    [glareX, glareY],
    ([gx, gy]) =>
      `radial-gradient(circle at ${gx} ${gy}, ${glareColor} 0%, transparent 60%)`,
  );

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale }}
      style={{
        rotateX: rotX,
        rotateY: rotY,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={cn("relative", className)}
    >
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-overlay"
          style={{
            background: glareBg,
          }}
        />
      )}
    </motion.div>
  );
};
