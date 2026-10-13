"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Animated List (Unlumen-inspired)
 *
 * A vertical list of items that slide in one-by-one with a staggered delay
 * as they enter the viewport. Good for notification feeds, mentor cards,
 * recent activity, etc.
 */
export const AnimatedList = ({
  items,
  className,
  itemClassName,
  staggerDelay = 0.08,
  renderItem,
}: {
  items: any[];
  className?: string;
  itemClassName?: string;
  staggerDelay?: number;
  renderItem: (item: any, index: number) => React.ReactNode;
}) => {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20, x: -10 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{
            duration: 0.5,
            delay: i * staggerDelay,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={itemClassName}
        >
          {renderItem(item, i)}
        </motion.div>
      ))}
    </div>
  );
};
