"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Wave Background (Unlumen-inspired)
 *
 * Thin parallel lines flowing in organic wave patterns across the
 * background. Built with canvas for smooth animation. Subtle, ambient
 * effect that adds motion to dark sections without being distracting.
 */
export const WaveBackground = ({
  className,
  color = "#32D583",
  lineCount = 30,
  opacity = 0.15,
  speed = 1,
  amplitude = 30,
  frequency = 0.008,
}: {
  className?: string;
  color?: string;
  lineCount?: number;
  opacity?: number;
  speed?: number; // multiplier
  amplitude?: number; // px
  frequency?: number; // waves per px
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    const dpr = window.devicePixelRatio || 1;
    let phase = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    resize();

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.globalAlpha = opacity;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;

      for (let i = 0; i < lineCount; i++) {
        const y0 = (rect.height * i) / lineCount;
        ctx.beginPath();
        for (let x = 0; x <= rect.width; x += 4) {
          const y =
            y0 +
            Math.sin(x * frequency + phase + i * 0.2) * amplitude *
              (0.5 + (i / lineCount) * 0.5); // lower lines wave more
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      phase += 0.02 * speed;
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, [color, lineCount, opacity, speed, amplitude, frequency]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={cn("absolute inset-0 h-full w-full pointer-events-none", className)}
    />
  );
};
