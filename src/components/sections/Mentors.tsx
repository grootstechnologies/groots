"use client";

import { AvatarPlaceholder } from "@/components/placeholders";
import { AnimatedList } from "@/components/unlumen/animated-list";

const MENTORS = [
  { name: "Rushi", college: "Head Trainer & DevSecOps Lead" },
  { name: "Kiran Kumar", college: "Lead Power BI & Data Architect" },
  { name: "Sneha Reddy", college: "Sr. Business Analyst & Agile Coach" },
  { name: "Vikram Sharma", college: "QA Automation & Tosca Architect" },
  { name: "Pooja Varma", college: "Data Science & AI Practice Lead" },
  { name: "Arjun Rao", college: "Global Admissions & Visa Strategist" },
];

export function Mentors() {
  return (
    <section id="mentors" className="py-12 sm:py-16 lg:py-24 bg-gray-50 overflow-hidden relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Rushi — Head Trainer at Greenroots
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A decade of hands-on enterprise DevOps and Cloud experience, leading classroom and live-project training at Greenroots. Has guided 500+ students into roles at top tech companies across India and abroad.
          </p>
        </div>

        {/* Unlumen: AnimatedList with staggered entrance */}
        <AnimatedList
          items={MENTORS}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          itemClassName="flex"
          staggerDelay={0.06}
          renderItem={(m, i) => (
            <div
              className="w-full bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:ring-1 hover:ring-[#0878E8]/20 transition-all flex flex-col items-center text-center"
            >
              <AvatarPlaceholder label={m.name || "—"} className="h-20 w-20 mb-3" />
              <h3 className="text-sm font-bold text-[#071D3A]">
                {m.name || <span className="text-gray-400">—</span>}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                {m.college || <span className="text-gray-300">—</span>}
              </p>
            </div>
          )}
        />
      </div>
    </section>
  );
}
