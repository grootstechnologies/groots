"use client";
import { cn } from "@/lib/utils";

type Item = {
  quote: string;
  name: string;
  title?: string;
  logo?: string;
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  // Pre-duplicate items in JS so the marquee loops seamlessly — no DOM
  // manipulation, no setState-in-effect lint errors.
  const duplicated = [...items, ...items];

  const animationDirection =
    direction === "left" ? "forwards" : "reverse";
  const animationDuration =
    speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";

  return (
    <div
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
      style={
        {
          "--animation-direction": animationDirection,
          "--animation-duration": animationDuration,
        } as React.CSSProperties
      }
    >
      <ul
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {duplicated.map((item, idx) => (
          <li
            key={item.name + idx}
            className="w-[320px] md:w-[420px] max-w-full relative rounded-2xl flex-shrink-0 px-6 py-5 md:w-[420px]"
            style={{
              background:
                "linear-gradient(180deg, #03101F, #03101F)",
              border: "1px solid rgba(16,185,129,0.15)",
            }}
          >
            <blockquote>
              <span className="relative z-20 text-sm md:text-base leading-relaxed text-neutral-100 font-normal">
                &ldquo;{item.quote}&rdquo;
              </span>
              <footer className="mt-4 flex items-center gap-3 text-xs text-neutral-400">
                {item.logo && (
                  <div className="h-8 w-8 rounded-lg bg-white p-1.5 flex items-center justify-center shrink-0 shadow-sm ring-1 ring-white/20">
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <div>
                  <span className="font-semibold text-[#00B8E6] block">{item.name}</span>
                  {item.title && <span className="text-neutral-400 text-[11px]">{item.title}</span>}
                </div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
