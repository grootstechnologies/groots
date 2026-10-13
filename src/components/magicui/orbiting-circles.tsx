"use client";
import React from "react";
import { motion } from "motion/react";

/**
 * Orbiting Circles (Magic UI)
 *
 * Children distributed evenly around a circular path, each orbiting
 * continuously. Uses Motion's animate() with rotate transforms.
 *
 * Trick: each orbit item is a wrapping motion.div positioned absolutely at
 * the center of the container, with `transformOrigin: center` so rotation
 * pivots around the container's center. The starting angle is set via the
 * initial rotate value, then animation rotates 360deg from there.
 * An inner div translates the icon outward by `radius` px and counter-rotates
 * so the icon stays upright as the outer spins.
 */
export const OrbitingCircles = ({
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
}: {
  className?: string;
  children: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}) => {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-black/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeWidth={1}
          />
        </svg>
      )}
      {React.Children.map(children, (child, index) => {
        const count = React.Children.count(children);
        const angle = (360 / count) * index;
        return (
          // Outer: positioned at center, rotates continuously
          <motion.div
            className="absolute left-1/2 top-1/2"
            style={{
              width: 0,
              height: 0,
              transformOrigin: "center",
            }}
            initial={{ rotate: angle }}
            animate={{ rotate: reverse ? angle - 360 : angle + 360 }}
            transition={{
              duration: calculatedDuration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Inner: translated outward by radius, counter-rotates to keep
                the icon upright as the outer spins. */}
            <motion.div
              className="absolute flex items-center justify-center"
              style={{
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                left: `-${iconSize / 2}px`,
                top: `-${radius + iconSize / 2}px`, // push outward by radius
                transformOrigin: "center",
              }}
              initial={{ rotate: -angle }}
              animate={{ rotate: reverse ? -angle + 360 : -angle - 360 }}
              transition={{
                duration: calculatedDuration,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {child}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};
