"use client";
import { Check, X } from "lucide-react";
import { LampContainer } from "@/components/aceternity/lamp-effect";
import { motion } from "motion/react";
import BorderBeam from "@/components/smoothui/border-beam";

const ROWS = [
  "Fear of interviews and group discussions",
  "Poor communication and English confidence",
  "Low aptitude and reasoning scores",
  "No corporate workflow exposure",
  "Weak resume & LinkedIn profile",
  "Limited interview practice",
];

const TRAD = [false, false, false, false, false, false];

export function Comparison() {
  return (
    <section id="crt" className="py-0 lg:py-0 bg-white overflow-hidden relative scroll-mt-20">
      {/* Lamp effect as the section header */}
      <LampContainer className="min-h-[28rem] bg-white">
        <motion.h2
          initial={{ opacity: 0.5, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="mt-4 bg-gradient-to-br from-[#0a0a0a] to-gray-600 py-2 bg-clip-text text-center text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent"
        >
          Before &amp; After Greenroots CRT
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-gray-600 max-w-2xl mt-4 text-sm md:text-base"
        >
          A structured 4-phase transformation that rebuilds the student from inside out. Same person, completely different placement outcomes.
        </motion.p>
      </LampContainer>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto -mt-8">
          {/* Quad Advantage column */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#03101F] via-[#04132A] to-[#03101F] border border-emerald-500/30 rounded-2xl p-6 lg:p-8 text-white shadow-xl">
            <BorderBeam
              colorFrom="#32D583"
              colorTo="#00B8E6"
              duration={6}
              size={120}
              borderWidth={1.5}
              radius={16}
            />
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-[#32D583] text-[#03101F] flex items-center justify-center font-black">
                ✓
              </div>
              <h3 className="text-xl lg:text-2xl font-bold">After CRT</h3>
            </div>
            <ul className="space-y-3">
              {ROWS.map((row, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-[#32D583] text-[#03101F] flex items-center justify-center">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  <span className="text-gray-200">
                    {[
                      "Confident speakers who own every interview room",
                      "Placement-ready professionals with strong verbal skills",
                      "Strong aptitude and reasoning abilities",
                      "Real corporate workflow exposure",
                      "ATS-optimised resume & LinkedIn profile",
                      "Mock-interview battle-tested",
                    ][i]}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traditional column */}
          <div className="bg-gray-50 ring-1 ring-gray-200 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gray-300 text-gray-600 flex items-center justify-center font-black">
                ✕
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-[#071D3A]">
                Before CRT
              </h3>
            </div>
            <ul className="space-y-3">
              {ROWS.map((row, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  {TRAD[i] ? (
                    <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  ) : (
                    <span className="mt-0.5 shrink-0 h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <X className="h-3 w-3" strokeWidth={3} />
                    </span>
                  )}
                  <span className="text-gray-600">{row}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
