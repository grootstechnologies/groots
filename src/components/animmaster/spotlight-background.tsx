"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Spotlight Background (animmasterlib bg-1 inspired)
 *
 * A bright, conical volumetric light beam shining straight down from the top
 * center, illuminating the content like a stage spotlight. Animated light
 * rays ("god rays") spread outward from the source.
 *
 * Pure CSS + canvas hybrid — no Three.js needed. Renders a vertical cone
 * gradient + drifting dust particles inside the cone for atmospheric depth.
 */
export const SpotlightBackground = ({
  className,
  color = "#0878E8",
  intensity = 0.55,
  showDust = true,
}: {
  className?: string;
  color?: string;
  intensity?: number;
  showDust?: boolean;
}) => {
  const dustRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!showDust) return;
    const canvas = dustRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let dpr = window.devicePixelRatio || 1;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; opacity: number }[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    // Spawn dust particles inside a cone (narrower at top, wider at bottom)
    const spawn = () => {
      const rect = canvas.getBoundingClientRect();
      const coneTopX = rect.width / 2;
      const coneBottomWidth = rect.width * 0.5;
      const t = Math.random();
      const y = t * rect.height;
      const widthAtY = (coneBottomWidth * y) / rect.height;
      const x = coneTopX + (Math.random() - 0.5) * widthAtY;
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.15,
        vy: 0.2 + Math.random() * 0.4,
        r: 0.6 + Math.random() * 1.4,
        opacity: 0.3 + Math.random() * 0.5,
      });
    };

    for (let i = 0; i < 60; i++) spawn();

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        // Slight horizontal sway
        p.x += Math.sin(p.y * 0.02) * 0.1;

        if (p.y > rect.height) {
          // Respawn at top
          const coneTopX = rect.width / 2;
          const coneBottomWidth = rect.width * 0.5;
          p.y = 0;
          const widthAtY = 5;
          p.x = coneTopX + (Math.random() - 0.5) * widthAtY;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = p.opacity * intensity;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [color, intensity, showDust]);

  return (
    <div
      className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}
      aria-hidden
    >
      {/* Volumetric cone — a tall thin trapezoid that fades from bright at top to transparent at bottom */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 h-full"
        style={{
          width: "60%",
          background: `linear-gradient(to bottom,
            ${color}${Math.round(intensity * 255).toString(16).padStart(2, "0")} 0%,
            ${color}${Math.round(intensity * 90).toString(16).padStart(2, "0")} 25%,
            ${color}15 60%,
            transparent 100%)`,
          clipPath: "polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)",
          filter: "blur(2px)",
        }}
      />
      {/* God rays — soft radial glow at the source */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 h-32 w-32 rounded-full"
        style={{
          background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
          filter: "blur(8px)",
        }}
      />
      {/* Dust particles inside the cone */}
      {showDust && (
        <canvas
          ref={dustRef}
          className="absolute inset-0 h-full w-full"
          style={{
            // Mask the dust to a cone shape so particles only render inside the spotlight
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%), conic-gradient(from -90deg at 50% 0%, transparent 0deg, black 30deg, black 330deg, transparent 360deg)",
            WebkitMaskComposite: "source-in",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
          }}
        />
      )}
    </div>
  );
};
