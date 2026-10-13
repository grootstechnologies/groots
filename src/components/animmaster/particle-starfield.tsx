"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Particle Starfield (animmasterlib bg-3 inspired)
 *
 * Small white particles scattered across the viewport, drifting slowly and
 * twinkling. Pairs well with dark backgrounds as ambient depth. Use as a
 * full-section background behind content.
 */
export const ParticleStarfield = ({
  className,
  density = 1.2,
  color = "#32D583",
  twinkle = true,
  drift = true,
}: {
  className?: string;
  density?: number; // particles per 10k px² (higher = more)
  color?: string;
  twinkle?: boolean;
  drift?: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = window.devicePixelRatio || 1;

    type P = {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      twinkleSpeed: number;
      twinklePhase: number;
      baseOpacity: number;
    };
    let particles: P[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      // Re-init particles based on new size
      const count = Math.floor((rect.width * rect.height * density) / 10000);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        r: 0.5 + Math.random() * 1.6,
        vx: drift ? (Math.random() - 0.5) * 0.15 : 0,
        vy: drift ? (Math.random() - 0.5) * 0.15 : 0,
        twinkleSpeed: 0.01 + Math.random() * 0.04,
        twinklePhase: Math.random() * Math.PI * 2,
        baseOpacity: 0.3 + Math.random() * 0.5,
      }));
    };
    resize();

    let t = 0;
    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      t += 0.016;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.twinklePhase += p.twinkleSpeed;

        // Wrap around edges
        if (p.x < 0) p.x = rect.width;
        if (p.x > rect.width) p.x = 0;
        if (p.y < 0) p.y = rect.height;
        if (p.y > rect.height) p.y = 0;

        const opacity = twinkle
          ? p.baseOpacity * (0.4 + 0.6 * Math.abs(Math.sin(p.twinklePhase)))
          : p.baseOpacity;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();

        // Soft glow on brighter particles
        if (p.r > 1.2) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = color;
          ctx.globalAlpha = opacity * 0.15;
          ctx.fill();
        }
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
  }, [density, color, twinkle, drift]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
    />
  );
};
