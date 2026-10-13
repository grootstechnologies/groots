import { Phone, FileText, FileCheck, Stamp, GraduationCap, Plane } from "lucide-react";

type Service = {
  num: string;
  title: string;
  desc: string;
  icon: typeof Phone;
};

const SERVICES: Service[] = [
  {
    num: "01 / 06",
    title: "Free Counselling",
    desc: "One-hour deep-dive at our Manjeera Majestic office. We map your goals, budget, qualification fit, and shortlist 5-8 realistic targets.",
    icon: Phone,
  },
  {
    num: "02 / 06",
    title: "University Shortlisting",
    desc: "Ambitious / target / safe picks across countries and intakes, factoring in your test scores, GPA, work experience, and budget.",
    icon: GraduationCap,
  },
  {
    num: "03 / 06",
    title: "Application & Documents",
    desc: "SOPs, LORs, resume polish, transcripts, financial docs. We draft, you approve. No template-y SOP that any AI could write.",
    icon: FileText,
  },
  {
    num: "04 / 06",
    title: "Visa Guidance",
    desc: "F-1, Student route, Subclass 500 — country-specific paperwork prep, mock interviews, financial documentation. 96% visa success rate.",
    icon: Stamp,
  },
  {
    num: "05 / 06",
    title: "Test Prep",
    desc: "IELTS, PTE, GRE, GMAT, TOEFL, SAT, Duolingo. Live classes, mock tests, diagnostic-led custom plans. Free starting diagnostic.",
    icon: FileCheck,
  },
  {
    num: "06 / 06",
    title: "Pre-Departure",
    desc: "Forex, accommodation, flight bookings, sim cards, packing list, cultural orientation. The week before you fly, we handle the chaos.",
    icon: Plane,
  },
];

export function StudyAbroadServices() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-[#faf8f5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            From your first question to your boarding pass.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Six structured stages. Each has clear deliverables, named owners, and a timeline you can hold us to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="bg-white rounded-2xl p-6 lg:p-7 ring-1 ring-gray-100 hover:ring-[#0878E8]/30 hover:shadow-md transition-all relative overflow-hidden"
              >
                <span className="absolute top-5 right-5 text-[11px] font-bold text-gray-300 tracking-wide">
                  {s.num}
                </span>
                <div className="h-11 w-11 rounded-xl bg-[#0878E8]/10 text-[#0878E8] flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-[#071D3A]">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Test prep strip */}
        <div className="mt-12 bg-[#03101F] border border-emerald-500/20 rounded-2xl p-6 lg:p-8 text-center shadow-xl">
          <h3 className="text-xl lg:text-2xl font-bold text-white">
            All the exams that open all the doors.
          </h3>
          <p className="mt-2 text-sm text-emerald-100/70 max-w-2xl mx-auto">
            Pick a test or two — we'll diagnose where you are and what your fastest path to your target score looks like — free.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {["IELTS", "PTE", "GRE", "GMAT", "TOEFL", "SAT", "Duolingo"].map((exam) => (
              <span
                key={exam}
                className="px-4 py-1.5 rounded-full bg-white/5 ring-1 ring-white/10 text-sm font-semibold text-[#00B8E6]"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
