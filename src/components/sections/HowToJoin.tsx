"use client";

import { Timeline } from "@/components/aceternity/timeline";
import { motion } from "motion/react";
import { PulsatingButton } from "@/components/magicui/pulsating-button";

const DATA = [
  {
    title: "Submit Your Application",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          Fill in the form — takes less than 3 minutes. Tell us your area of expertise, the engagement model you prefer (live batches, recorded modules, or 1-on-1 mentorship), and your available hours.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="bg-[#0878E8]/10 rounded-lg p-4 border border-[#0878E8]/20">
            <p className="text-2xl font-black text-[#0878E8]">3 min</p>
            <p className="text-xs text-gray-600 mt-1">Average time to fill</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 border border-gray-200">
            <p className="text-2xl font-black text-[#071D3A]">48 hrs</p>
            <p className="text-xs text-gray-600 mt-1">Response time</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Discovery Call",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          We understand your expertise, goals, and preferred engagement model. A 20-minute call with the Greenroots team to map out a fit — no commitment, no pressure.
        </p>
        <div className="mt-6 space-y-2">
          {[
            "Your expertise and teaching preferences",
            "Available hours (weekend / evening / weekday)",
            "Live batch vs recorded content vs both",
            "Revenue expectations and growth goals",
          ].map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0878E8] shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Demo Session",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          A short 15-minute mock teaching session to understand your style and strengths. We&apos;re not testing — we&apos;re calibrating which course fits you best, and which student level brings out your strongest delivery.
        </p>
        <div className="mt-6 bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-xl p-5 border border-zinc-200">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
            What we look for
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <p className="text-sm font-bold text-[#071D3A]">Clarity</p>
              <p className="text-[11px] text-gray-600 mt-1">Concept explanation</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-[#071D3A]">Depth</p>
              <p className="text-[11px] text-gray-600 mt-1">Live Q&amp;A</p>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold text-[#071D3A]">Energy</p>
              <p className="text-[11px] text-gray-600 mt-1">Student engagement</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Onboarding & First Batch",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-300 text-base md:text-lg leading-relaxed">
          Get onboarded, matched to the right course, and start earning within weeks. Student acquisition, batch management, marketing, and placement support — all handled by Greenroots. You just show up and teach.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 p-5 rounded-xl bg-gradient-to-br from-[#0878E8] via-[#071D3A] to-[#03101F] text-white border border-emerald-500/20"
        >
          <p className="text-xs font-bold uppercase tracking-wide opacity-70">Earnings potential</p>
          <p className="text-2xl md:text-3xl font-black mt-1">₹60,000 – ₹1.2L / mo</p>
          <p className="text-xs mt-1 opacity-80">
            Illustrative — based on engagement level and batch size.
          </p>
        </motion.div>
        <div className="mt-8">
          <PulsatingButton
            pulseColor="rgba(234, 88, 12, 0.4)"
            duration="1.8s"
            className="!bg-gradient-to-r !from-[#32D583] !to-[#00B8E6] !text-white hover:!from-[#0878E8] hover:!to-[#32D583] shadow-md shadow-[#32D583]/25"
          >
            Submit Application →
          </PulsatingButton>
        </div>
      </div>
    ),
  },
];

export function HowToJoin() {
  return (
    <section id="become-a-trainer" className="py-16 lg:py-24 bg-[#faf8f5] scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Ready to Teach, Grow & Earn More?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            What happens after you apply — our team reviews every application personally. If there&apos;s a fit, we reach out within 48 hours to schedule a 20-minute discovery call.
          </p>
        </div>
      </div>
      <Timeline data={DATA} />
    </section>
  );
}
