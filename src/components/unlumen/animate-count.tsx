import { cn } from "@/lib/utils";

/**
 * Animate Count — minimal, no count-up animation.
 *
 * Renders the final value directly with a CSS fade-in. No IntersectionObserver,
 * no rAF, no count-up. Format the value and render it. The fade-in keyframe
 * lives in `src/app/globals.css`.
 */
export const AnimateCount = ({
  value,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) => {
  const formatted =
    decimals > 0
      ? value.toFixed(decimals)
      : Math.round(value).toLocaleString();

  return (
    <span className={cn("animate-fade-in tabular-nums", className)}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
