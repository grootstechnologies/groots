"use client";

import { motion } from "motion/react";
import { ImagePlaceholder } from "@/components/placeholders";
import { AuroraCard } from "@/components/unlumen/aurora-card";

const PATHS = [
  { label: "Job Placement", color: "#0878E8" },
  { label: "Study Abroad", color: "#32D583" },
  { label: "Train The Trainer", color: "#00AFA8" },
];

const FEATURES = [
  "Secure a 6-month internship to gain hands-on experience",
  "Dedicated 1:1 personalised career coach",
  "Access to 600+ recruitment partners (TCS, Infosys, Deloitte, Amazon, Cognizant)",
  "ATS-optimised resume & LinkedIn profile overhaul",
  "100% placement assistance — we only charge when we deliver",
];

export function Career() {
  return (
    <section className="py-16 lg:py-24 bg-[#faf8f5] overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Aurora card with career visual */}
          <div className="order-2 lg:order-1">
            <AuroraCard
              className="aspect-[4/3] w-full"
              blobColor="#0878E8"
              blobColor2="#32D583"
              tilt
            >
              <div className="relative h-full w-full flex flex-col items-center justify-center p-8 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-2xl md:text-3xl font-black text-white"
                >
                  From audit → Offer letter
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="mt-3 text-sm text-gray-300 max-w-sm"
                >
                  Your career. Your country. Your future. Hover for parallax tilt.
                </motion.p>
                <div className="mt-6 grid grid-cols-3 gap-2 w-full max-w-xs">
                  {["Job", "Study", "Train"].map((s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="rounded-lg bg-white/5 ring-1 ring-white/10 px-3 py-2 text-xs font-bold text-[#00B8E6] text-center"
                    >
                      {s}
                    </motion.div>
                  ))}
                </div>
              </div>
            </AuroraCard>
          </div>

          {/* Right: copy */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] leading-tight">
              From career audit to offer letter
            </h2>
            <p className="mt-4 text-gray-600">
              Your career. Your country. Your future. Pick a path and we’ll map your fit, budget, and timeline in a free counselling session.
            </p>

            <ul className="mt-8 space-y-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-0.5 shrink-0 text-[#0878E8]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                      <path d="M12 2l2.39 6.95H22l-6.19 4.5L18.2 22 12 17.27 5.8 22l2.39-8.55L2 8.95h7.61z" />
                    </svg>
                  </span>
                  <span className="text-sm">{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              {PATHS.map((p) => (
                <button
                  key={p.label}
                  className="px-5 py-2.5 rounded-lg font-medium text-sm border-2 transition-colors"
                  style={{
                    borderColor: p.color,
                    color: p.color,
                  }}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
