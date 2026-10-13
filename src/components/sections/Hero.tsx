"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  CodeXml,
  Users,
  BarChart3,
  Building2,
  Sparkles,
  Phone,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  GROOTS — Auto-advancing "From Education to Employment" hero        */
/*                                                                     */
/*  The carousel auto-advances through 3 stages every 5 seconds:      */
/*                                                                     */
/*    Stage 1  (0-5s)  : Female student + "Get Trained" + "Get Placed"  */
/*    Stage 2  (5-10s) : Male professional + "I Want Both"             */
/*    Stage 3  (10-15s): Cheerful student + "Talk to a Counsellor"     */
/*    → loops back to Stage 1                                          */
/*                                                                     */
/*  Each transition uses a smooth 1200ms ease-in-out crossfade.        */
/*  Mobile and desktop use the same auto-advance logic.               */
/*                                                                     */
/*  Brand palette:                                                     */
/*    #071D3A primary navy    #0878E8 secondary blue                   */
/*    #00B8E6 accent 1 cyan   #00AFA8 accent 2 teal                     */
/*    #32D583 accent 3 green                                        */
/* ------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;
const TRANSITION_EASE = [0.4, 0, 0.2, 1] as const; // Material Design "standard" ease — very smooth

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 26 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const HEADLINE_WORDS: { t: string; highlight?: boolean; br?: boolean }[] = [
  { t: "Your" },
  { t: "Degree", br: true },
  { t: "Got" },
  { t: "You" },
  { t: "to" },
  { t: "the" },
  { t: "Door.", br: true },
  { t: "Your", highlight: true },
  { t: "Skills", highlight: true },
  { t: "Open", highlight: true },
  { t: "It.", highlight: true },
];

const FEATURES: { icon: LucideIcon; label: string }[] = [
  { icon: BookOpen, label: "Industry-Aligned Curriculum" },
  { icon: CodeXml, label: "Hands-on Projects" },
  { icon: Users, label: "Placement Support" },
  { icon: BarChart3, label: "Career Guidance" },
];

/* Mobile-only trust strip — mirrors the real numbers from Results.tsx */
const TRUST_STATS: { value: string; label: string }[] = [
  { value: "100%", label: "Placement Record" },
  { value: "500+", label: "Students Guided" },
  { value: "10+", label: "Yrs Experience" },
];

const JOURNEY: { icon: LucideIcon; title: string; sub: string }[] = [
  { icon: GraduationCap, title: "1. Education", sub: "You have the degree" },
  { icon: BookOpen, title: "2. Skills", sub: "Learn industry-relevant skills" },
  { icon: Building2, title: "3. Industry Ready", sub: "Work on real projects" },
  { icon: BriefcaseBusiness, title: "4. Employment", sub: "Get placed and grow" },
];

/* ----------- Carousel stage data (3 student images) ------------- */
type Stage = {
  src: string;
  alt: string;
  /** Real intrinsic pixel dimensions of the PNG — keeps next/image's
      aspect-ratio dev check quiet (audit fix). */
  width: number;
  height: number;
  badge: string;
  badgeIcon: LucideIcon;
  bubble: { label: string; icon: LucideIcon; tint: { bg: string; fg: string } };
  bubble2: { label: string; icon: LucideIcon; tint: { bg: string; fg: string } };
  gradientFrom: string;
  gradientTo: string;
};

const STAGES: Stage[] = [
  {
    src: "/images/students/student-female-cut.png",
    alt: "Smiling female student holding a laptop with a backpack",
    width: 1118,
    height: 1407,
    badge: "Stage 01 — Learning",
    badgeIcon: GraduationCap,
    bubble: { label: "Hands-on Learning", icon: BookOpen, tint: { bg: "#E0F7FA", fg: "#00AFA8" } },
    bubble2: { label: "Real Industry Experience", icon: BriefcaseBusiness, tint: { bg: "#E0F7FA", fg: "#00B8E6" } },
    gradientFrom: "#0878E8",
    gradientTo: "#00AFA8",
  },
  {
    src: "/images/students/student-male-1-cut.png",
    alt: "Upward-looking young professional in a green blazer holding a laptop",
    width: 1272,
    height: 1237,
    badge: "Stage 02 — Industry Ready",
    badgeIcon: Building2,
    bubble: { label: "Industry Exposure", icon: Sparkles, tint: { bg: "#E0F7FA", fg: "#32D583" } },
    bubble2: { label: "Expert Mentorship", icon: Users, tint: { bg: "#E0F7FA", fg: "#0878E8" } },
    gradientFrom: "#071D3A",
    gradientTo: "#0878E8",
  },
  {
    src: "/images/students/student-male-2-cut.png",
    alt: "Cheerful student with glasses holding a laptop and notebooks",
    width: 1155,
    height: 1362,
    badge: "Stage 03 — Get Placed",
    badgeIcon: BriefcaseBusiness,
    bubble: { label: "Career Support", icon: BarChart3, tint: { bg: "#E0F7FA", fg: "#00B8E6" } },
    bubble2: { label: "Placement Support", icon: BriefcaseBusiness, tint: { bg: "#E0F7FA", fg: "#32D583" } },
    gradientFrom: "#00AFA8",
    gradientTo: "#32D583",
  },
];

/* ===================== Hero component ===================== */
export function Hero() {
  const reduce = !!useReducedMotion();

  /* ===== Auto-advance: 5 seconds per stage, 1200ms crossfade ===== */
  const STAGE_COUNT = 3;
  const STAGE_DURATION = 5000; // ms — 5 seconds per stage (was 2000)
  const FADE_DURATION = 1200;  // ms — smoother crossfade (was 600)

  const [stage, setStage] = useState(0); // 0, 1, or 2

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setStage((s) => (s + 1) % STAGE_COUNT);
    }, STAGE_DURATION);
    return () => clearInterval(t);
  }, [reduce]);

  // Opacity arrays for stages and CTAs (1 for active, 0 for inactive)
  const stageOpacities = [stage === 0 ? 1 : 0, stage === 1 ? 1 : 0, stage === 2 ? 1 : 0];
  const ctaOpacities = stageOpacities; // CTAs crossfade in sync with stages

  return (
    <section aria-label="Groots — From Education to Employment" className="relative bg-white">
      {/* ===== Single-viewport hero (no scroll-track) ===== */}
      <div className="relative min-h-[640px] lg:h-screen overflow-hidden z-30 bg-white">
        {/* Background washes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 right-[-10%] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(8,120,232,0.18),transparent_65%)] blur-2xl" />
          <div className="absolute top-[40%] left-[-15%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(0,184,230,0.14),transparent_65%)] blur-2xl" />
          <div className="absolute bottom-[-20%] right-[20%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(50,213,131,0.12),transparent_65%)] blur-2xl" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "linear-gradient(#071D3A 1px, transparent 1px), linear-gradient(90deg, #071D3A 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* ===== Desktop content (lg+) ===== */}
        <div className="relative z-10 mx-auto hidden h-full max-w-7xl flex-row items-center px-4 pt-24 pb-6 sm:px-6 lg:flex lg:px-10 lg:pt-28">
          {/* Left column */}
          <div className="flex flex-col justify-center lg:w-[48%] xl:w-[46%] lg:pr-8 xl:pr-12">
            {/* Eyebrow */}
            <motion.div {...fadeUp(0)} className="flex items-center gap-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#43505B] sm:text-xs sm:tracking-[0.3em]">
                From Education to Employment
              </p>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
                className="h-px w-10 origin-left bg-[#00B8E6] sm:w-14"
                aria-hidden="true"
              />
              <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
                <span className="hero-halo absolute inset-0 rounded-full bg-[#00B8E6]/60" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-[#00B8E6]" />
              </span>
            </motion.div>

            {/* Headline */}
            <h1 id="hero-headline" className="mt-4 max-w-2xl font-display text-[2.25rem] font-bold leading-[1.1] tracking-tight text-[#071D3A] sm:mt-5 sm:text-5xl sm:leading-[1.08] lg:text-[2.75rem] lg:leading-[1.07] xl:text-[3rem]">
              {HEADLINE_WORDS.map((w, i) => (
                <Fragment key={`${w.t}-${i}`}>
                  <motion.span
                    initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                    animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.055, ease: EASE }}
                    className={
                      w.highlight
                        ? "animate-gradient inline-block bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#0878E8] bg-clip-text text-transparent"
                        : "inline-block"
                    }
                  >
                    {w.t}
                  </motion.span>{" "}
                  {w.br ? <br className="hidden sm:block" /> : null}
                </Fragment>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p id="hero-subheadline" {...fadeUp(0.3)} className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5B6470] sm:text-base">
              Industry-aligned training, real projects and placement support
              to help you build a successful career in today&rsquo;s industry.
            </motion.p>

            {/* ===== Stage-aware CTAs (desktop) — crossfade every 5s ===== */}
            <div className="relative mt-7 min-h-[68px]">
              {/* CTA 1: Get Trained + Get Placed (Stage 0) */}
              <motion.div
                animate={{ opacity: ctaOpacities[0], pointerEvents: ctaOpacities[0] === 1 ? "auto" : "none" }}
                transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }}
                className="absolute inset-0 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <Link href="/courses/" className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#0A2447_0%,#071D3A_55%,#04132A_100%)] py-3 pl-3.5 pr-5 text-white shadow-[0_16px_36px_-14px_rgba(7,29,58,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_22px_46px_-14px_rgba(7,29,58,0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-105">
                    <GraduationCap className="h-5.5 w-5.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-white/65">I want to</span>
                    <span className="block text-lg font-bold tracking-tight">Get Trained</span>
                  </span>
                  <ArrowRight className="ml-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
                <Link href="/reviews/" className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-2xl border border-[#E6DFD2] bg-white py-3 pl-3.5 pr-5 shadow-[0_14px_34px_-16px_rgba(7,29,58,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00B8E6]/40 hover:shadow-[0_20px_44px_-14px_rgba(0,184,230,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] -translate-x-[160%] skew-x-12 bg-gradient-to-r from-transparent via-[#00B8E6]/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E0F7FA] text-[#00B8E6] transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-105">
                    <BriefcaseBusiness className="h-5.5 w-5.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-[#7A8188]">I want to</span>
                    <span className="block text-lg font-bold tracking-tight text-[#071D3A]">Get Placed</span>
                  </span>
                  <ArrowRight className="ml-1 h-5 w-5 shrink-0 text-[#00B8E6] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.div>

              {/* CTA 2: I Want Both (Stage 1) */}
              <motion.div
                animate={{ opacity: ctaOpacities[1], pointerEvents: ctaOpacities[1] === 1 ? "auto" : "none" }}
                transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }}
                className="absolute inset-0 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <Link href="/courses/" className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0878E8_0%,#00AFA8_100%)] py-3 pl-3.5 pr-5 text-white shadow-[0_16px_40px_-14px_rgba(8,120,232,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_22px_50px_-14px_rgba(8,120,232,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-105">
                    <Sparkles className="h-5.5 w-5.5" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-white/70">Training + Placement</span>
                    <span className="block text-lg font-bold tracking-tight">I Want Both</span>
                  </span>
                  <ArrowRight className="ml-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </motion.div>

              {/* CTA 3: Talk to a Counsellor (Stage 2) */}
              <motion.div
                animate={{ opacity: ctaOpacities[2], pointerEvents: ctaOpacities[2] === 1 ? "auto" : "none" }}
                transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }}
                className="absolute inset-0 flex flex-col gap-3.5 sm:flex-row sm:items-center"
              >
                <a href="tel:+919549543898" className="group relative inline-flex items-center gap-3.5 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#32D583_0%,#00B8E6_100%)] py-3 pl-3.5 pr-5 text-white shadow-[0_16px_40px_-14px_rgba(50,213,131,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_22px_50px_-14px_rgba(50,213,131,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32D583] focus-visible:ring-offset-2">
                  <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                  <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25 transition-transform duration-300 ease-out group-hover:rotate-6 group-hover:scale-105">
                    <Phone className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  <span className="text-left leading-tight">
                    <span className="block text-xs font-medium text-white/75">Free Career Consultation</span>
                    <span className="block text-lg font-bold tracking-tight">Talk to a Counsellor</span>
                  </span>
                  <ArrowRight className="ml-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </a>
              </motion.div>
            </div>

            {/* Feature row */}
            <motion.div {...fadeUp(0.54)} className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:mt-10 lg:grid-cols-4 lg:gap-3 xl:gap-4">
              {FEATURES.map((f) => (
                <div key={f.label} className="group flex items-center gap-2.5">
                  <f.icon className="h-5 w-5 shrink-0 text-[#0878E8] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 lg:h-6 lg:w-6" strokeWidth={1.7} aria-hidden="true" />
                  <p className="max-w-32 text-[12px] font-medium leading-snug text-[#4A5560] lg:max-w-36 lg:text-[13px]">{f.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right column — auto-advancing carousel (desktop) */}
          <div className="relative hidden lg:flex lg:w-[52%] xl:w-[54%] h-full items-center justify-center">
            <CarouselStage stage={STAGES[0]} opacity={stageOpacities[0]} reduce={reduce} priority variant="desktop" />
            <CarouselStage stage={STAGES[1]} opacity={stageOpacities[1]} reduce={reduce} variant="desktop" />
            <CarouselStage stage={STAGES[2]} opacity={stageOpacities[2]} reduce={reduce} variant="desktop" />
          </div>
        </div>

        {/* ===== Mobile content (lg:hidden) — premium centered scene ===== */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center px-4 pt-20 pb-8 text-center sm:px-6 lg:hidden">
          {/* Mobile-only aurora accents (decorative) */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-28 left-1/2 h-72 w-[130%] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(0,184,230,0.16),transparent)] blur-2xl" />
            <div className="absolute top-[42%] -left-24 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(8,120,232,0.12),transparent)] blur-2xl" />
            <div className="absolute bottom-[6%] -right-20 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,rgba(50,213,131,0.12),transparent)] blur-2xl" />
          </div>

          {/* Eyebrow — glass pill with live dot */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/70 py-1.5 pl-3 pr-3.5 shadow-[0_10px_28px_-16px_rgba(7,29,58,0.45)] backdrop-blur-md">
              <span className="gr-pill-dot" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#33414E] sm:text-[11px]">
                From Education to Employment
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="mt-4 max-w-xl font-display text-[2.1rem] font-bold leading-[1.12] tracking-tight text-[#071D3A] sm:text-[2.6rem]">
            {HEADLINE_WORDS.map((w, i) => (
              <Fragment key={`m-${w.t}-${i}`}>
                <motion.span
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: "0.5em", filter: "blur(10px)" }}
                  animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.65, delay: 0.1 + i * 0.055, ease: EASE }}
                  className={w.highlight ? "animate-gradient inline-block bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#0878E8] bg-clip-text text-transparent" : "inline-block"}
                >
                  {w.t}
                </motion.span>{" "}
                {w.br ? <br /> : null}
              </Fragment>
            ))}
          </h2>

          {/* Subtext */}
          <motion.p {...fadeUp(0.3)} className="mt-3.5 max-w-md text-[14px] leading-relaxed text-[#5B6470] sm:text-[15px]">
            Industry-aligned training, real projects and placement support
            to help you build a successful career in today&rsquo;s industry.
          </motion.p>

          {/* ===== Mobile stage-aware CTAs — compact crossfade row ===== */}
          <div className="relative mt-6 min-h-[60px] w-full max-w-md">
            {/* CTA 1: Get Trained + Get Placed (side by side) */}
            <motion.div animate={{ opacity: ctaOpacities[0], pointerEvents: ctaOpacities[0] === 1 ? "auto" : "none" }} transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }} className="absolute inset-0 flex gap-2.5">
              <Link href="/courses/" className="group relative inline-flex flex-1 items-center gap-2.5 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,#0A2447_0%,#071D3A_55%,#04132A_100%)] py-2 pl-2.5 pr-3 text-left text-white shadow-[0_16px_36px_-14px_rgba(7,29,58,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2">
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/15">
                  <GraduationCap className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block text-[9px] font-medium text-white/60">I want to</span>
                  <span className="block truncate text-[13.5px] font-bold tracking-tight">Get Trained</span>
                </span>
              </Link>
              <Link href="/reviews/" className="group relative inline-flex flex-1 items-center gap-2.5 overflow-hidden rounded-2xl border border-[#E6DFD2] bg-white py-2 pl-2.5 pr-3 text-left shadow-[0_14px_34px_-16px_rgba(7,29,58,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00B8E6]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B8E6] focus-visible:ring-offset-2">
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E0F7FA] text-[#00B8E6]">
                  <BriefcaseBusiness className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block text-[9px] font-medium text-[#7A8188]">I want to</span>
                  <span className="block truncate text-[13.5px] font-bold tracking-tight text-[#071D3A]">Get Placed</span>
                </span>
              </Link>
            </motion.div>

            {/* CTA 2: I Want Both */}
            <motion.div animate={{ opacity: ctaOpacities[1], pointerEvents: ctaOpacities[1] === 1 ? "auto" : "none" }} transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }} className="absolute inset-0 flex">
              <Link href="/courses/" className="group relative inline-flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#0878E8_0%,#00AFA8_100%)] py-2.5 pl-3 pr-4 text-left text-white shadow-[0_16px_40px_-14px_rgba(8,120,232,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2">
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                  <Sparkles className="h-4.5 w-4.5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block text-[9px] font-medium text-white/70">Training + Placement</span>
                  <span className="block truncate text-[15px] font-bold tracking-tight">I Want Both</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/80 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </motion.div>

            {/* CTA 3: Talk to a Counsellor */}
            <motion.div animate={{ opacity: ctaOpacities[2], pointerEvents: ctaOpacities[2] === 1 ? "auto" : "none" }} transition={{ duration: FADE_DURATION / 1000, ease: TRANSITION_EASE }} className="absolute inset-0 flex">
              <a href="tel:+919549543898" className="group relative inline-flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#32D583_0%,#00B8E6_100%)] py-2.5 pl-3 pr-4 text-left text-white shadow-[0_16px_40px_-14px_rgba(50,213,131,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#32D583] focus-visible:ring-offset-2">
                <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-[45%] animate-[hero-sheen-x_5.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/25">
                  <Phone className="h-4 w-4" strokeWidth={1.9} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1 leading-tight">
                  <span className="block text-[9px] font-medium text-white/75">Free Career Consultation</span>
                  <span className="block truncate text-[15px] font-bold tracking-tight">Talk to a Counsellor</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/80 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* Mobile showcase — cinematic stage with floating glass badges */}
          <div className="relative mt-7 h-[318px] w-full max-w-md select-none sm:h-[360px]">
            <CarouselStage stage={STAGES[0]} opacity={stageOpacities[0]} reduce={reduce} priority variant="mobile" />
            <CarouselStage stage={STAGES[1]} opacity={stageOpacities[1]} reduce={reduce} variant="mobile" />
            <CarouselStage stage={STAGES[2]} opacity={stageOpacities[2]} reduce={reduce} variant="mobile" />

            {/* Stage indicator dots */}
            <div className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2" role="group" aria-label="Hero carousel navigation">
              {STAGES.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  aria-label={`Show slide ${i + 1} of ${STAGES.length}`}
                  aria-pressed={stage === i}
                  onClick={() => setStage(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2 ${
                    stage === i
                      ? "w-7 bg-gradient-to-r from-[#0878E8] to-[#00B8E6]"
                      : "w-1.5 bg-[#071D3A]/20 hover:bg-[#071D3A]/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Trust strip — real numbers on glass */}
          <motion.div {...fadeUp(0.6)} className="mt-5 grid w-full max-w-md grid-cols-3 divide-x divide-[#071D3A]/10 rounded-2xl border border-white/90 bg-white/70 shadow-[0_18px_40px_-24px_rgba(7,29,58,0.4)] backdrop-blur-md">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="px-1.5 py-3">
                <p className="font-display text-[17px] font-extrabold tracking-tight sm:text-xl">
                  <span className="bg-gradient-to-r from-[#071D3A] to-[#0878E8] bg-clip-text text-transparent">{s.value}</span>
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.06em] text-[#5B6470] sm:text-[10px]">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Feature pills */}
          <motion.div {...fadeUp(0.68)} className="mt-4 grid w-full max-w-md grid-cols-2 gap-2 sm:gap-2.5">
            {FEATURES.map((f) => (
              <div key={f.label} className="flex items-center gap-2 rounded-2xl border border-white/90 bg-white/60 py-2 pl-2.5 pr-3 text-left shadow-[0_8px_22px_-16px_rgba(7,29,58,0.5)] backdrop-blur-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E0F7FA] text-[#0878E8]">
                  <f.icon className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
                </span>
                <p className="min-w-0 text-[10.5px] font-semibold leading-tight text-[#3D4750]">{f.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ===== Journey strip ===== */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
        className="relative z-20 bg-white px-3 pb-5 pt-4 sm:px-6 sm:pb-7 lg:px-8"
      >
        <div className="hero-border-sheen mx-auto max-w-[1440px] rounded-[1.4rem] border border-[#EDE6D8] bg-white/95 px-5 py-5 shadow-[0_20px_50px_-26px_rgba(7,29,58,0.3)] sm:px-7">
          <ol className="hidden items-center justify-between gap-3 md:flex">
            {JOURNEY.map((step, i) => (
              <Fragment key={step.title}>
                <li className="min-w-0"><JourneyStep {...step} /></li>
                {i < JOURNEY.length - 1 && (
                  <ArrowRight className="hero-arrow h-5 w-5 shrink-0 text-[#00B8E6]/80" style={{ animationDelay: `${i * 0.4}s` }} strokeWidth={2} aria-hidden="true" />
                )}
              </Fragment>
            ))}
          </ol>
          <ol className="grid grid-cols-2 gap-x-4 gap-y-5 md:hidden">
            {JOURNEY.map((step) => (
              <li key={step.title}><JourneyStep {...step} /></li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
}

/* ============ Carousel stage (desktop + mobile variants) ============ */
function CarouselStage({
  stage,
  opacity,
  reduce,
  priority = false,
  variant = "desktop",
}: {
  stage: Stage;
  opacity: number;
  reduce: boolean;
  priority?: boolean;
  /** desktop = large orbit rings + badges (lg+); mobile = compact glass showcase */
  variant?: "desktop" | "mobile";
}) {
  const BadgeIcon = stage.badgeIcon;
  const BubbleIcon = stage.bubble.icon;
  const Bubble2Icon = stage.bubble2.icon;
  const isDesktop = variant === "desktop";

  return (
    <motion.div
      animate={{ opacity }}
      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Gradient orb */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${isDesktop ? "h-[80%] w-[80%]" : "h-[85%] w-[95%]"}`}
        style={{ background: `radial-gradient(circle, ${stage.gradientFrom}25, ${stage.gradientTo}15, transparent 65%)` }}
      />

      {/* Orbit rings */}
      {isDesktop ? (
        <>
          <div className="absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#071D3A]/10 hero-ring-spin" />
          <div className="absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#071D3A]/8 hero-ring-spin-rev" />
        </>
      ) : (
        <div className="absolute top-1/2 left-1/2 h-[19rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#071D3A]/12 hero-ring-spin" />
      )}

      {/* Student image */}
      <motion.div
        animate={reduce ? { y: 0 } : { y: [0, -10, 0] }}
        transition={reduce ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`relative z-10 flex max-w-full items-end justify-center ${isDesktop ? "h-[78vh] lg:max-h-[640px]" : "h-[262px] sm:h-[300px]"}`}
      >
        <Image
          src={stage.src}
          alt={stage.alt}
          width={stage.width}
          height={stage.height}
          priority={priority}
          loading="eager"
          draggable={false}
          /* h-auto/w-auto keep the intrinsic aspect ratio while max-* contain
             the image — silences next/image's aspect-ratio dev warning. */
          className="h-auto w-auto max-h-full max-w-full object-contain object-bottom drop-shadow-[0_30px_50px_rgba(7,29,58,0.25)]"
        />

        {isDesktop ? (
          /* Badges — desktop */
          <>
            <div className="absolute top-6 left-2 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#071D3A]/10 px-3 py-1.5 shadow-[0_10px_28px_-12px_rgba(7,29,58,0.4)]">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: stage.gradientFrom, color: "#fff" }}>
                <BadgeIcon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#071D3A]">{stage.badge}</span>
            </div>

            <motion.div animate={reduce ? { y: 0 } : { y: [0, -8, 0] }} transition={reduce ? { duration: 0.3 } : { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[22%] right-0 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/95 py-2 pl-2 pr-3 shadow-[0_18px_36px_-18px_rgba(7,29,58,0.4)] backdrop-blur-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: stage.bubble.tint.bg, color: stage.bubble.tint.fg }}>
                <BubbleIcon className="h-4 w-4" strokeWidth={1.9} />
              </span>
              <span className="text-[11px] font-bold text-[#0A2447] max-w-[8rem] leading-tight">{stage.bubble.label}</span>
            </motion.div>

            <motion.div animate={reduce ? { y: 0 } : { y: [0, 8, 0] }} transition={reduce ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[14%] right-2 flex items-center gap-2 rounded-2xl border border-white/70 bg-white/95 py-2 pl-2 pr-3 shadow-[0_18px_36px_-18px_rgba(7,29,58,0.4)] backdrop-blur-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: stage.bubble2.tint.bg, color: stage.bubble2.tint.fg }}>
                <Bubble2Icon className="h-4 w-4" strokeWidth={1.9} />
              </span>
              <span className="text-[11px] font-bold text-[#0A2447] max-w-[8rem] leading-tight">{stage.bubble2.label}</span>
            </motion.div>
          </>
        ) : (
          /* Mobile showcase — pedestal glow + floating glass badges */
          <>
            {/* Pedestal glow under the subject */}
            <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-7 w-[74%] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(7,29,58,0.18),transparent_68%)] blur-md" />

            {/* Stage pill — top-left */}
            <motion.div animate={reduce ? { y: 0 } : { y: [0, -6, 0] }} transition={reduce ? { duration: 0.3 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-1 left-0 z-20 flex items-center gap-1.5 rounded-full border border-white/90 bg-white/80 py-1 pl-1 pr-2.5 shadow-[0_10px_26px_-14px_rgba(7,29,58,0.5)] backdrop-blur-md">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white" style={{ backgroundColor: stage.gradientFrom }}>
                <BadgeIcon className="h-3 w-3" strokeWidth={2.2} />
              </span>
              <span className="text-[8.5px] font-extrabold uppercase tracking-[0.14em] text-[#071D3A]">{stage.badge}</span>
            </motion.div>

            {/* Feature bubble — right */}
            <motion.div animate={reduce ? { y: 0 } : { y: [0, -8, 0] }} transition={reduce ? { duration: 0.3 } : { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute top-[22%] right-0 z-20 flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/80 py-1.5 pl-1.5 pr-2.5 shadow-[0_14px_30px_-16px_rgba(7,29,58,0.5)] backdrop-blur-md">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: stage.bubble.tint.bg, color: stage.bubble.tint.fg }}>
                <BubbleIcon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="max-w-[7rem] text-[10px] font-bold leading-tight text-[#0A2447]">{stage.bubble.label}</span>
            </motion.div>

            {/* Feature bubble — bottom-left */}
            <motion.div animate={reduce ? { y: 0 } : { y: [0, 7, 0] }} transition={reduce ? { duration: 0.3 } : { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[13%] left-0 z-20 flex items-center gap-1.5 rounded-2xl border border-white/90 bg-white/80 py-1.5 pl-1.5 pr-2.5 shadow-[0_14px_30px_-16px_rgba(7,29,58,0.5)] backdrop-blur-md">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: stage.bubble2.tint.bg, color: stage.bubble2.tint.fg }}>
                <Bubble2Icon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              <span className="max-w-[7rem] text-[10px] font-bold leading-tight text-[#0A2447]">{stage.bubble2.label}</span>
            </motion.div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ============ Journey step ============ */
function JourneyStep({ icon: Icon, title, sub }: { icon: LucideIcon; title: string; sub: string }) {
  return (
    <div className="group flex items-center gap-3">
      <Icon className="h-6 w-6 shrink-0 text-[#00B8E6] transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 sm:h-7 sm:w-7" strokeWidth={1.7} aria-hidden="true" />
      <div className="min-w-0 leading-tight">
        <p className="text-sm font-bold text-[#0A2447] sm:text-[15px]">{title}</p>
        <p className="mt-0.5 text-xs leading-snug text-[#7A8188]">{sub}</p>
      </div>
    </div>
  );
}
