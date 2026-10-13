"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type SparklesCoreProps = {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
};

export const SparklesCore = ({
  id = "tsparticles",
  className,
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  particleDensity = 100,
  particleColor = "#32D583",
}: SparklesCoreProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;
    let dpr = window.devicePixelRatio || 1;

    const color = particleColor;

    type Particle = {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      twinkle: number;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      particles = [];
      const rect = canvas.getBoundingClientRect();
      const count = Math.floor((rect.width * rect.height * particleDensity) / 10000);
      for (let i = 0; i < count; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize;
        particles.push({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          size,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random(),
          twinkle: Math.random() * 0.05 + 0.01,
        });
      }
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);
      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > rect.width) p.speedX *= -1;
        if (p.y < 0 || p.y > rect.height) p.speedY *= -1;
        p.opacity += p.twinkle;
        if (p.opacity > 1 || p.opacity < 0.2) p.twinkle *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    const onResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId);
    };
  }, [background, minSize, maxSize, particleDensity, particleColor]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      style={{ display: "block" }}
    />
  );
};
