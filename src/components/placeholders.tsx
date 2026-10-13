import { cn } from "@/lib/utils";

/**
 * ImagePlaceholder — a generic gray-gradient box used wherever the original
 * quadcse.com page had an image. The user will swap these for real <img> tags
 * later. We use CSS-only placeholders so the layout works offline.
 */
export function ImagePlaceholder({
  className,
  label = "Image",
  dark = false,
}: {
  className?: string;
  label?: string;
  dark?: boolean;
}) {
  return (
    <div
      aria-label={label}
      role="img"
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        dark
          ? "bg-gradient-to-br from-zinc-800 to-zinc-900 text-zinc-500"
          : "bg-gradient-to-br from-zinc-100 to-zinc-200 text-zinc-400",
        className
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="h-8 w-8 opacity-60"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  );
}

/**
 * LogoPlaceholder — a smaller placeholder used in logo strips / company logos.
 */
export function LogoPlaceholder({
  className,
  label = "Logo",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex items-center justify-center rounded-md bg-white/5 px-4 py-3 text-xs font-medium uppercase tracking-wider text-zinc-400 ring-1 ring-zinc-700",
        className
      )}
    >
      {label}
    </div>
  );
}

/**
 * AvatarPlaceholder — premium circular monogram medallion for mentors /
 * founders / testimonials: conic brand ring, deep-navy inner, glowing depth.
 */
export function AvatarPlaceholder({
  className,
  label = "A",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`Avatar for ${label}`}
      className={cn(
        "relative flex items-center justify-center rounded-full p-[2.5px] bg-[conic-gradient(from_210deg,#32D583,#00B8E6,#0878E8,#00AFA8,#32D583)] shadow-[0_16px_34px_-12px_rgba(8,120,232,0.55)]",
        className
      )}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-[linear-gradient(160deg,#0A2447_0%,#071D3A_55%,#04132A_100%)]">
        <span className="font-display text-lg font-black tracking-tight bg-gradient-to-br from-white via-[#7FE5F2] to-[#00B8E6] bg-clip-text text-transparent select-none">
          {label.charAt(0).toUpperCase()}
        </span>
      </div>
    </div>
  );
}
