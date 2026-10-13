"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * Hover Expand (Unlumen-inspired)
 *
 * A vertical list of items where hovering one expands it to reveal a large
 * background image + extra content, while other items compress. Like an
 * interactive accordion of feature cards.
 */
type ExpandItem = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tag?: string;
};

export const HoverExpandList = ({
  items,
  className,
  accentColor = "#0878E8",
}: {
  items: ExpandItem[];
  className?: string;
  accentColor?: string;
}) => {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <motion.div
            key={item.id}
            onMouseEnter={() => setActive(item.id)}
            onClick={() => setActive(item.id)}
            className={cn(
              "relative cursor-pointer overflow-hidden rounded-2xl ring-1 transition-colors",
              isActive
                ? "ring-2"
                : "ring-white/5 hover:ring-white/10",
            )}
            style={{
              boxShadow: isActive ? `0 0 0 1px ${accentColor}40` : undefined,
            }}
            animate={{
              flex: isActive ? 3 : 1,
            }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Background image / gradient */}
            <div className="absolute inset-0">
              {item.image ? (
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="h-full w-full"
                  style={{
                    background: isActive
                      ? `radial-gradient(circle at 30% 30%, ${accentColor}30, #0a0a0a 70%)`
                      : "#0a0a0a",
                  }}
                />
              )}
              {/* Dark overlay for text legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background: isActive
                    ? "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 70%, transparent 100%)"
                    : "rgba(0,0,0,0.6)",
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-5 md:p-7 min-h-[5rem] flex flex-col justify-center">
              {item.tag && (
                <span
                  className="text-[10px] font-bold uppercase tracking-wide mb-1"
                  style={{ color: accentColor }}
                >
                  {item.tag}
                </span>
              )}
              <h3
                className={cn(
                  "font-bold text-white transition-all",
                  isActive ? "text-xl md:text-2xl" : "text-base",
                )}
              >
                {item.title}
              </h3>
              <AnimatePresence>
                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 text-sm text-gray-300 max-w-xl overflow-hidden"
                  >
                    {item.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
