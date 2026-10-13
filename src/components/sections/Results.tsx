"use client";

import { AnimateCount } from "@/components/unlumen/animate-count";

const STATS = [
  { value: 8, suffix: "", label: "High-Demand Programs" },
  { value: 100, suffix: "%", label: "Placement Track Record" },
  { value: 500, suffix: "+", label: "Students Guided" },
  { value: 10, suffix: "+", label: "Yrs Trainer Experience" },
];

export function Results() {
  return (
    <section className="bg-gradient-to-b from-[#03101F] via-[#03101F] to-[#03101F] py-12 sm:py-20 lg:py-24 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Placement Track Record
          </h2>
          <p className="mt-3.5 sm:mt-4 text-emerald-100/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
          </p>
        </div>

        {/* Stats row — high-contrast gradient: cyan → light cyan → green */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="text-center bg-white/[0.04] hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-[#32D583]/40 rounded-2xl p-3.5 sm:p-7 shadow-xs hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-4xl lg:text-5xl font-black bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#32D583] bg-clip-text text-transparent">
                <AnimateCount value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm font-medium text-emerald-100/80 leading-snug">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
