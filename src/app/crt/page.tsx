"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Check, X, Building, BookOpen, Clock, Users, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const PHASES = [
  {
    phase: "Phase 1 — Foundation",
    title: "Foundation Building",
    desc: "Students begin by strengthening their communication basics — the bedrock that determines if a student gets shortlisted or rejected at first contact.",
    modules: [
      "Communication Fundamentals",
      "Grammar & Vocabulary",
      "Confidence Building",
      "Personality Development",
      "Professional Grooming",
    ],
    outcome: "Students become comfortable speaking and expressing ideas clearly.",
  },
  {
    phase: "Phase 2 — Aptitude",
    title: "Aptitude & Reasoning Mastery",
    desc: "We train students to crack placement tests from TCS, Infosys, Wipro, Capgemini and more — covering both quantitative and logical reasoning at speed.",
    modules: [
      "Number System · Percentages · P&L",
      "Time & Work · Speed & Distance",
      "Ratios · Averages · Probability",
      "Puzzles & Seating Arrangements",
      "Blood Relations · Syllogisms",
      "Data Interpretation & Analysis",
    ],
    outcome: "Students become confident solving aptitude questions under time pressure.",
  },
  {
    phase: "Phase 3 — Verbal Ability",
    title: "Verbal Ability & English for Placements",
    desc: "Our core strength and biggest USP. Companies reject technically strong students for poor communication — we fix that completely.",
    modules: [
      "Reading Comprehension",
      "Para Jumbles & Sentence Correction",
      "Error Detection & Grammar Nuances",
      "Vocabulary Building & Idioms",
      "Email Writing & Professional Etiquette",
      "Corporate Communication Protocols",
    ],
    outcome: "Students gain fluency, clarity, and corporate communication skills.",
  },
  {
    phase: "Phase 4 — Placement Prep",
    title: "Placement Preparation",
    desc: "The final mile — resume building, interview coaching, mock panel simulations, and group discussion practice to make students truly offer-ready.",
    modules: [
      "ATS-Friendly Resume Engineering",
      "Personalised Profile Reviews",
      "LinkedIn Profile Optimisation",
      "HR Interview Coaching & Storytelling",
      "Technical Interview Readiness",
      "Mock Panels & Group Discussions",
    ],
    outcome: "Students become interview-ready and confident.",
  },
];

const METHODOLOGY = [
  {
    title: "Interactive Training",
    desc: "No boring lectures. We use activities, role plays, group discussions, and real interview simulations — so learning sticks and confidence builds naturally.",
  },
  {
    title: "Continuous Assessment",
    desc: "Weekly tests, mock interviews, assignments, and performance tracking. Every student's progress is measurable — not assumed.",
  },
  {
    title: "Personalised Mentorship",
    desc: "1-on-1 guidance to improve weak areas, boost confidence, and track individual progress. No student is left behind.",
  },
  {
    title: "Corporate Simulation",
    desc: "We create a mini corporate atmosphere so students experience real workplace expectations before they walk into a placement interview.",
  },
];

const FORMATS = [
  { hours: "40–60h", title: "CRT Sprint", desc: "Focused sprint for final-year students ahead of the active placement season." },
  { hours: "80–120h", title: "Comprehensive Track", desc: "Deep dive across all four phases — our most complete placement readiness program." },
  { hours: "Semester", title: "Semester-Long CRT", desc: "Integrated across a semester for sustainable learning without academic disruption." },
  { hours: "Bootcamp", title: "Final Year Bootcamp", desc: "High-intensity placement bootcamp with daily mock interviews and company-specific mocks." },
  { hours: "Faculty", title: "Faculty Development", desc: "Upskilling college faculty on industry expectations and placement coaching methods." },
];

export default function CRTPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* CRT Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(234,88,12,0.12)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0878E8]/30 via-[#32D583]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.2)]">
              <Building className="h-3.5 w-3.5 text-amber-400" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2}>
                College Partnership Program · Hyderabad Campus Hub
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Campus Recruitment Training — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6]">CRT</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              Greenroots partners with colleges to bridge the gap between academia and industry — transforming students into placement-ready, interview-confident professionals.
            </p>

            {/* Badges */}
            <div className="mt-7 sm:mt-8 flex flex-wrap items-center justify-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                📍 Kukatpally, Hyderabad
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                🎓 Engineering &amp; Degree Colleges
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                ⏱️ 40–120 Hour Programs
              </span>
              <span className="px-3.5 py-1.5 bg-white/[0.08] backdrop-blur-sm border border-white/12 rounded-full shadow-xs hover:border-emerald-400/50 hover:text-white transition-all">
                🗓️ Semester to Full-Year Tracks
              </span>
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-3.5 sm:gap-4">
              <MagneticButton asChild strength={14} className="w-full sm:w-auto">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/25 hover:shadow-xl inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                >
                  Partner With Us →
                </Link>
              </MagneticButton>
              <MagneticButton asChild strength={10} className="w-full sm:w-auto">
                <a
                  href="#curriculum"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/[0.15] hover:border-white/30 transition-all shadow-sm inline-flex items-center gap-2 cursor-pointer text-center text-sm sm:text-base"
                >
                  View Curriculum ↓
                </a>
              </MagneticButton>
            </div>

            {/* Mission banner */}
            <div className="gr-glass mt-10 sm:mt-12 max-w-3xl mx-auto bg-white/[0.07] backdrop-blur-md border border-white/15 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-emerald-300 font-medium shadow-xl">
              <strong className="text-white font-bold">Our Mission:</strong> Every student deserves the skills, confidence, and opportunities required to build a successful career.
            </div>
          </div>
        </section>

        {/* 3 Challenges Faced */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              The Problem We Solve
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              3 Challenges Every College Student Faces
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-md mx-auto">Greenroots solves all three — end to end.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-3xl">
              <div className="h-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white font-black text-base shadow-md mb-5 group-hover:scale-105 transition-transform duration-300">
                    01
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2.5">Communication &amp; Interview Confidence</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Most students are technically capable but fail interviews because they can&apos;t articulate their thoughts clearly or confidently in English.
                  </p>
                </div>
              </div>
            </TiltCard>
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-3xl">
              <div className="h-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white font-black text-base shadow-md mb-5 group-hover:scale-105 transition-transform duration-300">
                    02
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2.5">Aptitude &amp; Reasoning Gaps</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Campus hiring tests from TCS, Infosys, Accenture require strong quantitative and logical reasoning — skills rarely built in regular classrooms.
                  </p>
                </div>
              </div>
            </TiltCard>
            <TiltCard maxTilt={6} scale={1.02} glare={true} glareOpacity={0.08} className="h-full rounded-3xl">
              <div className="h-full bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white font-black text-base shadow-md mb-5 group-hover:scale-105 transition-transform duration-300">
                    03
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2.5">No Industry Exposure</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Students graduate without ever experiencing corporate workflows, real tools, or professional workplace expectations — leaving them unprepared.
                  </p>
                </div>
              </div>
            </TiltCard>
          </div>
        </section>

        {/* 4 Phases Curriculum */}
        <section id="curriculum" className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] border-y border-slate-200/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
                CRT Curriculum
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
                A Complete Transformation Journey
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm sm:text-base mt-2 max-w-xl mx-auto">
                Not a short workshop. A structured 4-phase program that rebuilds the student from inside out.
              </p>
            </div>

            <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto">
              {PHASES.map((p, idx) => (
                <div
                  key={p.phase}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-emerald-300/80 transition-all duration-300 flex flex-col md:flex-row gap-5 sm:gap-6 items-start group"
                >
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-br from-[#0878E8] to-[#03101F] text-white font-black flex items-center justify-center text-lg sm:text-xl shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-mono font-bold text-[#0878E8] uppercase tracking-wider bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-md inline-block">
                      {p.phase}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-2 mb-2">{p.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                      {p.modules.map((m) => (
                        <span key={m} className="px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 transition-colors">
                          {m}
                        </span>
                      ))}
                    </div>
                    <div className="p-3.5 bg-emerald-50/90 border border-emerald-200/80 rounded-xl text-xs sm:text-sm font-bold text-[#0878E8]">
                      ✦ Outcome: {p.outcome}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Methodology */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              How We Train
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              Training Methodology That Actually Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {METHODOLOGY.map((m) => (
              <div key={m.title} className="p-6 bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Flexible Formats */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
                Program Options
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
                Flexible Training Formats for Colleges
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
              {FORMATS.map((f) => (
                <div key={f.title} className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <span className="px-2.5 py-1 bg-emerald-50 text-[#0878E8] border border-emerald-200/70 font-bold text-xs rounded-lg inline-block">
                      {f.hours}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-gray-900 mt-3 mb-1.5">{f.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership CTA */}
            <div className="relative overflow-hidden mt-14 sm:mt-18 max-w-4xl mx-auto bg-gradient-to-br from-[#03101F] via-[#04132A] to-[#03101F] rounded-3xl p-8 sm:p-14 text-white text-center shadow-2xl border border-emerald-500/25">
              <BorderBeam
                colorFrom="#00B8E6"
                colorTo="#00B8E6"
                duration={6}
                size={140}
                borderWidth={1.5}
                radius={24}
              />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
                  Let&apos;s Build Placement-Ready Careers Together
                </h3>
                <p className="text-sm sm:text-base text-emerald-100/80 mt-3 max-w-xl mx-auto leading-relaxed">
                  We partner with college management and placement cells for structured semester and annual training drives.
                </p>
                <div className="mt-8">
                  <MagneticButton asChild strength={15} className="w-full sm:w-auto">
                    <Link
                      href="/contact/"
                      className="w-full sm:w-auto min-h-[50px] justify-center px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl transition-all inline-flex items-center shadow-lg shadow-[#32D583]/30 cursor-pointer text-center text-sm sm:text-base"
                    >
                      Start a Partnership Conversation →
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
