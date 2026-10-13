"use client";

import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

function useMeasure<T extends HTMLElement = HTMLDivElement>() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, dimensions] as const;
}

export interface InfiniteSliderProps {
  children: React.ReactNode;
  className?: string;
  direction?: "horizontal" | "vertical";
  gap?: number;
  paused?: boolean;
  reverse?: boolean;
  speed?: number;
  speedOnHover?: number;
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 100,
  paused = false,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [_key, setKey] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      translation.set(0);
      return;
    }

    if (paused || currentSpeed <= 0) {
      setIsTransitioning(true);
      return;
    }

    let controls:
      | {
          stop: () => void;
        }
      | undefined;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        duration: transitionDuration,
        ease: "linear",
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        duration,
        ease: "linear",
        onRepeat: () => {
          translation.set(from);
        },
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0,
        repeatType: "loop",
      });
    }

    return controls?.stop;
  }, [
    paused,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
    shouldReduceMotion,
  ]);

  const hoverProps =
    speedOnHover === undefined
      ? {}
      : {
          onHoverEnd: () => {
            setIsTransitioning(true);
            setCurrentSpeed(speed);
          },
          onHoverStart: () => {
            setIsTransitioning(true);
            setCurrentSpeed(speedOnHover);
          },
        };

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className="flex w-max"
        ref={ref}
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          flexDirection: direction === "horizontal" ? "row" : "column",
          gap: `${gap}px`,
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export default InfiniteSlider;
