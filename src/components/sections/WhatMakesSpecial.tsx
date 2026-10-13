"use client";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/bento-grid";
import { Clock, BarChart3, FileText, Users, Target, Briefcase } from "lucide-react";
import { ShineText } from "@/components/smoothui/shine-text";

/* Skeleton headers — animated visual placeholders for each bento card.
   Defined BEFORE the ITEMS array so the TDZ (temporal dead zone) doesn't
   bite us. */

const SkeletonOne = () => {
  const variants = {
    initial: { x: 0 },
    animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
  };
  return (
    <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-[#0878E8]/25 via-zinc-900 to-black overflow-hidden relative">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        className="flex flex-1 w-full h-full min-h-[8rem] bg-gradient-to-r from-[#0878E8]/50 to-transparent"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-5xl font-black text-[#00B8E6]/70">Career</p>
        <p className="text-5xl font-black text-[#00B8E6]/70 ml-2">Audit</p>
      </div>
    </div>
  );
};

const SkeletonTwo = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
    <div className="absolute inset-0 flex items-end gap-2 p-4">
      {[60, 80, 45, 90, 70, 100, 75].map((h, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
          className="flex-1 bg-gradient-to-t from-[#32D583] to-[#32D583]/40 rounded-t"
        />
      ))}
    </div>
  </div>
);

const SkeletonThree = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-[#0878E8]/20 via-zinc-900 to-black overflow-hidden relative">
    <motion.div
      initial={{ rotate: 0 }}
      whileInView={{ rotate: 360 }}
      viewport={{ once: true }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full border-4 border-[#32D583] border-t-transparent"
    />
    <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-3xl font-black text-white">2–3 mo</p>
    </div>
  </div>
);

const SkeletonFour = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
    <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
      {[1, 2, 3].map((n) => (
        <motion.div
          key={n}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * n }}
          className="rounded-lg bg-zinc-800 flex items-center justify-center"
        >
          <Users className="h-6 w-6 text-[#32D583]" />
        </motion.div>
      ))}
    </div>
    <div className="absolute bottom-2 right-3 text-xs font-bold text-[#32D583]">
      10+ yrs
    </div>
  </div>
);

const SkeletonFive = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-zinc-900 to-black overflow-hidden relative">
    <div className="absolute inset-0 p-4 space-y-2">
      {[80, 60, 90, 70].map((w, i) => (
        <motion.div
          key={i}
          initial={{ width: 0 }}
          whileInView={{ width: `${w}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.6 }}
          className="h-3 rounded bg-[#32D583]/40"
        />
      ))}
    </div>
  </div>
);

const SkeletonSix = () => (
  <div className="flex flex-1 w-full h-full min-h-[8rem] rounded-xl bg-gradient-to-br from-[#0878E8]/20 via-zinc-900 to-black overflow-hidden relative">
    <div className="absolute inset-0 flex items-center justify-around px-4">
      {["TCS", "Infosys", "Accenture", "Deloitte"].map((c, i) => (
        <motion.div
          key={c}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 * i }}
          className="text-[10px] sm:text-xs font-bold text-zinc-400 bg-white/5 ring-1 ring-white/10 px-2 py-1 rounded"
        >
          {c}
        </motion.div>
      ))}
    </div>
    <div className="absolute bottom-2 right-3">
      <Briefcase className="h-4 w-4 text-[#32D583]" />
    </div>
  </div>
);

const ITEMS = [
  {
    title: "Career Audit First",
    description:
      "Before you join, we assess your background, strengths, and market fit — then recommend the exact track that maximises your placement odds.",
    icon: <Target className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonOne />,
    className: "md:col-span-2",
  },
  {
    title: "Industry-Mapped Curriculum",
    description:
      "Every module is benchmarked to what TCS, Infosys, Accenture, Deloitte, and top GCCs are actually hiring for — not textbook theory.",
    icon: <BarChart3 className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonTwo />,
  },
  {
    title: "Fast Tracks: 2–3 Months",
    description:
      "Intensive, outcome-focused programs so you upskill and enter the market quickly. No year-long commitments. Results, not degrees.",
    icon: <Clock className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonThree />,
  },
  {
    title: "Expert Trainers",
    description:
      "All instructors have 10+ years of active industry experience. They don’t just teach — they’ve done the job you’re aiming for.",
    icon: <Users className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonFour />,
  },
  {
    title: "Resume & LinkedIn Prep",
    description:
      "ATS-optimised resume writing, LinkedIn profile overhaul, and Naukri setup. Your first impression is built with you, not for you.",
    icon: <FileText className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonFive />,
  },
  {
    title: "Placement Support",
    description:
      "Mock interviews, referrals, and recruiter connects. Placement service charges apply — because we only charge when we deliver results.",
    icon: <Briefcase className="h-4 w-4 text-[#32D583]" />,
    header: <SkeletonSix />,
    className: "md:col-span-2",
  },
];

export function WhatMakesSpecial() {
  return (
    <section className="pt-12 sm:pt-16 lg:pt-20 pb-0 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex mb-3">
            <ShineText
              text="✦ THE GREENROOTS ADVANTAGE"
              className="text-xs font-bold uppercase tracking-wider text-[#00B8E6] bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">
            Not just training. Transformation.
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            We match you to the right technology, build your skills from zero, and stand beside you until you land the role.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <BentoGrid>
          {ITEMS.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
