"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/smoothui/tilt-card";
import { MagneticButton } from "@/components/smoothui/magnetic-button";

const PROGRAMS = [
  {
    title: "DevSecOps Mastery Track",
    tag: "Cloud + Security",
    points: [
      "16 modules and 25+ tools — Docker to Kubernetes",
      "3 months · Some IT exp. · Cloud labs",
      "Terraform, AWS, GitHub Actions, SonarQube",
    ],
    accent: "#00AFA8",
    href: "/courses/devops/",
  },
  {
    title: "Data Analytics for Freshers",
    tag: "High Demand",
    points: [
      "From SQL foundations to advanced Power BI dashboards",
      "60 days · Beginner-friendly · Live + recorded",
      "Power BI Desktop, Power Query, Power BI Service",
    ],
    accent: "#32D583",
    href: "/courses/data-analytics/",
  },
  {
    title: "Data Science & AI (DSP Track)",
    tag: "Advanced",
    points: [
      "Machine learning, NLP and deep learning fundamentals",
      "3 months · Graduates+ · Live + mentorship",
      "Python, scikit-learn, pandas, model deployment",
    ],
    accent: "#0878E8",
    href: "/courses/data-science/",
  },
];

export function Programs() {
  const featured = PROGRAMS[0];
  const supporting = PROGRAMS.slice(1);

  return (
    <section id="courses" className="py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex mb-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0878E8] bg-[#0878E8]/10 px-4 py-1.5 rounded-full border border-[#0878E8]/20">
              ⚡ INDUSTRY-ALIGNED TRACKS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] tracking-tight">
            High-Demand Tech Tracks Built for 2026
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Cloud and Data Science, DevSecOps and Data Analytics — every track is built around what employers are hiring for right now.
          </p>
        </div>

        {/* Editorial Bento System — vertical catalogue flow on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* Dominant Featured Program (7 cols) */}
          <div className="lg:col-span-7">
            <TiltCard
              maxTilt={4}
              glareColor="rgba(0, 175, 168, 0.18)"
              className="h-full bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div
                  className="relative aspect-[16/9] w-full"
                  style={{
                    background: `linear-gradient(135deg, ${featured.accent}22, ${featured.accent}0a)`,
                  }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: `radial-gradient(circle at 30% 30%, ${featured.accent}22, transparent 60%)` }}
                  >
                    <span
                      className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
                      style={{ color: featured.accent }}
                    >
                      DevSecOps
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span
                      className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide shadow-sm backdrop-blur-md"
                      style={{
                        backgroundColor: `${featured.accent}ee`,
                        color: "#ffffff",
                        border: `1px solid ${featured.accent}`,
                      }}
                    >
                      {featured.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-7 lg:p-9">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#071D3A] tracking-tight leading-snug">
                    {featured.title}
                  </h3>

                  <ul className="mt-4 sm:mt-6 space-y-2.5 sm:space-y-3">
                    {featured.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        <span
                          className="mt-2 h-2 w-2 rounded-full shrink-0"
                          style={{ backgroundColor: featured.accent }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 sm:px-7 lg:px-9 py-4 border-t border-slate-100 flex items-center justify-between min-h-[48px]">
                <Link
                  href={featured.href}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0878E8] hover:gap-3 transition-all min-h-[44px]"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </TiltCard>
          </div>

          {/* Supporting Programs Column (5 cols, stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-5 sm:gap-6">
            {supporting.map((program) => (
              <TiltCard
                key={program.title}
                maxTilt={4}
                glareColor={`rgba(${parseInt(program.accent.slice(1,3),16)}, ${parseInt(program.accent.slice(3,5),16)}, ${parseInt(program.accent.slice(5,7),16)}, 0.08)`}
                className="flex-1 bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide"
                      style={{
                        backgroundColor: `${program.accent}18`,
                        color: program.accent,
                        border: `1px solid ${program.accent}30`,
                      }}
                    >
                      {program.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#071D3A] leading-snug">
                    {program.title}
                  </h3>

                  <ul className="mt-3.5 space-y-2.5">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-normal"
                      >
                        <span
                          className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: program.accent }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="px-5 sm:px-7 py-3.5 border-t border-slate-100 flex items-center justify-between min-h-[48px]">
                  <Link
                    href={program.href}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0878E8] hover:gap-2.5 transition-all min-h-[44px]"
                  >
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 text-center flex justify-center">
          <MagneticButton
            href="/courses/"
            className="w-full sm:w-auto min-h-[48px] justify-center px-8 py-3.5 sm:py-4 bg-[#0878E8] text-white font-bold rounded-xl hover:bg-[#0A2447] transition-all shadow-lg shadow-[#0878E8]/20 hover:shadow-xl active:scale-[0.98] inline-flex items-center gap-2 cursor-pointer"
          >
            View All 3 Programs →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
