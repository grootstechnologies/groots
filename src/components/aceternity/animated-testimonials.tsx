"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src?: string;
};

/* Split "Power BI Track · Placed at Deloitte" into a track chip + outcome chip */
function splitDesignation(designation: string) {
  const parts = designation.split("·").map((s) => s.trim());
  return { track: parts[0] ?? "", outcome: parts.slice(1).join(" · ") };
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (autoplay && mounted) {
      const interval = setInterval(handleNext, 6000);
      return () => clearInterval(interval);
    }
  }, [autoplay, mounted, testimonials.length]);

  // Deterministic angles based on index to ensure SSR and client hydration HTML match 100%
  const getRotateY = (idx: number) => {
    const ROTATIONS = [-7, 5, -8, 6, -4, 8];
    return ROTATIONS[idx % ROTATIONS.length];
  };

  const current = testimonials[active];
  const chips = splitDesignation(current.designation);

  return (
    <div
      className={cn(
        "mx-auto max-w-sm px-2 sm:px-4 py-8 sm:py-12 font-sans antialiased md:max-w-5xl md:px-8 md:py-16",
        className,
      )}
    >
      <div className="relative grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-[auto_1fr] md:gap-14 lg:gap-20 items-center">
        {/* ===== Premium medallion (left) ===== */}
        <div className="relative h-60 w-60 sm:h-72 sm:w-72 md:h-80 md:w-80 mx-auto shrink-0">
          {/* ambient glow */}
          <div className="absolute inset-[-14%] rounded-full bg-[radial-gradient(circle,rgba(8,120,232,0.28),transparent_65%)] blur-2xl pointer-events-none" />

          {/* orbiting dashed ring */}
          <div className="absolute inset-[-8%] rounded-full border border-dashed border-[#00B8E6]/30 hero-ring-spin pointer-events-none" />

          <div className="relative h-full w-full">
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={`avatar-${testimonial.name}`}
                  initial={false}
                  animate={
                    index === active
                      ? {
                          opacity: 1,
                          scale: 1,
                          rotateY: 0,
                          zIndex: 10,
                        }
                      : {
                          opacity: 0,
                          scale: 0.9,
                          rotateY: getRotateY(index),
                          zIndex: 0,
                        }
                  }
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    rotateY: 90,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  {/* conic brand ring + deep-navy inner medallion */}
                  <div className="h-full w-full rounded-full p-[3px] bg-[conic-gradient(from_140deg,#32D583,#00B8E6,#0878E8,#00AFA8,#32D583)] shadow-[0_28px_70px_-20px_rgba(8,120,232,0.6)]">
                    <div className="h-full w-full rounded-full bg-[linear-gradient(160deg,#0A2447_0%,#071D3A_55%,#04132A_100%)] flex items-center justify-center">
                      <span className="font-display text-7xl sm:text-8xl font-black tracking-tight bg-gradient-to-br from-white via-[#7FE5F2] to-[#00B8E6] bg-clip-text text-transparent select-none">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>

                  {/* floating glass chips — track (top-right) + outcome (bottom-left) */}
                  {(() => {
                    const c = splitDesignation(testimonial.designation);
                    const placed = c.outcome.toLowerCase().startsWith("placed");
                    return (
                      <>
                        <motion.div
                          animate={{ y: [0, -7, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -top-1 -right-2 sm:right-[-1.25rem] z-20 flex items-center gap-1.5 rounded-2xl border border-white/20 bg-white/10 px-2.5 py-1.5 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.6)] backdrop-blur-md"
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#00B8E6]/25 text-[#7FE5F2]">
                            <Quote className="h-3 w-3" strokeWidth={2.2} />
                          </span>
                          <span className="max-w-[8.5rem] text-[10px] font-bold leading-tight text-white">{c.track}</span>
                        </motion.div>
                        <motion.div
                          animate={{ y: [0, 7, 0] }}
                          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                          className={`absolute -bottom-1 left-[-0.75rem] sm:left-[-1.5rem] z-20 flex items-center gap-1.5 rounded-2xl border px-2.5 py-1.5 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.6)] backdrop-blur-md ${
                            placed
                              ? "border-[#32D583]/30 bg-[#32D583]/15"
                              : "border-white/20 bg-white/10"
                          }`}
                        >
                          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${placed ? "bg-[#32D583]/25 text-[#7EE7B0]" : "bg-white/15 text-white/80"}`}>
                            <Star className="h-3 w-3" strokeWidth={2.2} />
                          </span>
                          <span className="max-w-[8.5rem] text-[10px] font-bold leading-tight text-white">{c.outcome}</span>
                        </motion.div>
                      </>
                    );
                  })()}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* ===== Quote card (right) ===== */}
        <div className="flex flex-col justify-between py-2 sm:py-4 min-w-0">
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-7 lg:p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.65)] backdrop-blur-md overflow-hidden">
            {/* top gradient hairline */}
            <div aria-hidden="true" className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#00B8E6]/70 to-transparent" />
            {/* corner watermark */}
            <Quote aria-hidden="true" className="absolute -top-1 right-5 h-16 w-16 text-white/[0.06] rotate-180" strokeWidth={1.4} />

            <motion.div
              key={`quote-${active}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* star row */}
              <div className="flex items-center gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#FBBF24] text-[#FBBF24]" aria-hidden="true" />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white md:text-[1.7rem] tracking-tight">
                  {current.name}
                </h3>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-[#7FE5F2]">
                  {chips.track}
                </p>
              </div>
              <p className="mt-1.5 text-xs sm:text-sm font-semibold text-[#7EE7B0]">
                {chips.outcome}
              </p>

              <motion.p className="mt-4 sm:mt-5 text-sm sm:text-base font-normal text-slate-200/95 md:text-[17px] leading-relaxed">
                {current.quote}
              </motion.p>
            </motion.div>

            {/* controls: prev / dots + counter / next */}
            <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
              <button
                onClick={handlePrev}
                className="group flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 hover:border-[#00B8E6]/50 active:scale-95"
                aria-label="Previous testimonial"
              >
                <svg
                  className="h-4 w-4 -translate-x-[1px] transition-transform group-hover:-translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-2.5" role="group" aria-label="Testimonial navigation">
                {testimonials.map((t, i) => (
                  <button
                    key={`dot-${t.name}`}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                    aria-pressed={active === i}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] ${
                      i === active
                        ? "w-6 bg-gradient-to-r from-[#32D583] to-[#00B8E6]"
                        : "w-1.5 bg-white/25 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="group flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 hover:border-[#00B8E6]/50 active:scale-95"
                aria-label="Next testimonial"
              >
                <svg
                  className="h-4 w-4 translate-x-[1px] transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* counter */}
          <p className="mt-4 text-center md:text-left text-[11px] font-bold uppercase tracking-[0.22em] text-white/40" aria-hidden="true">
            {String(active + 1).padStart(2, "0")} <span className="text-[#00B8E6]/70">/</span> {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  );
};
