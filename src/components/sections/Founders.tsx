import { AvatarPlaceholder } from "@/components/placeholders";
import TiltCard from "@/components/smoothui/tilt-card";
import MagneticButton from "@/components/smoothui/magnetic-button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const FOUNDERS = [
  {
    name: "Rushi",
    role: "Head Trainer — Greenroots",
    college: "Enterprise DevOps & Cloud",
    bio: "10+ years of hands-on enterprise DevOps on AWS, GCP, and hybrid stacks. Architect-grade depth leading classroom and live-project training at Greenroots. Has guided 500+ students into roles at top tech companies across India and abroad.",
  },
  {
    name: "Kiran Kumar",
    role: "Chief Technology Mentor",
    college: "Principal Data & Analytics Architect",
    bio: "15+ years of enterprise architecture and data modelling experience. Specialises in Power BI, SQL performance tuning, and executive business intelligence dashboards for Fortune 500 enterprises.",
  },
  {
    name: "Career Audit Team",
    role: "Admissions & Placements",
    college: "Hyderabad Campus Hub",
    bio: "Dedicated 1-on-1 career audit, resume engineering, and placement support team connecting students with our 600+ recruitment partner network across Hyderabad and global tech hubs.",
  },
];

export function Founders() {
  return (
    <section className="relative py-12 sm:py-20 lg:py-24 bg-[#03101F] overflow-hidden">
      {/* Calm, restrained ambient light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(16,185,129,0.15),transparent_70%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#7FE5F2] backdrop-blur sm:text-[11px]">
            <GraduationCap className="h-3 w-3 text-[#32D583]" aria-hidden="true" />
            Meet Your Mentors
          </span>
          <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Built by trainers who’ve done the job you’re aiming for
          </h2>
          <p className="mt-4 text-emerald-100/80 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            All instructors have 10+ years of active industry experience. They don’t just teach — they’ve done the job you’re aiming for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {FOUNDERS.map((f, i) => (
            <TiltCard
              key={`founder-${i}`}
              maxTilt={5}
              scale={1.01}
              glare={false}
              className="h-full rounded-3xl"
            >
              <div className="gr-glass relative h-full bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-md border border-white/10 hover:border-[#32D583]/50 rounded-3xl p-5 sm:p-8 text-center flex flex-col justify-between transition-all duration-300 group">
                <div>
                  <div className="relative inline-block mx-auto mb-4 sm:mb-5">
                    <span aria-hidden="true" className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(8,120,232,0.35),transparent_70%)] opacity-60 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                    <AvatarPlaceholder label={f.name || "—"} className="relative h-20 w-20 sm:h-24 sm:w-24 rounded-full transition-transform duration-300 group-hover:scale-[1.04]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{f.name || <span className="text-gray-500">—</span>}</h3>
                  <p className="mt-1.5 inline-block rounded-full border border-[#00B8E6]/25 bg-[#00B8E6]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#7FE5F2]">{f.role || <span className="text-gray-600">—</span>}</p>
                  <p className="text-xs text-slate-400 mt-1.5">{f.college || <span className="text-gray-700">—</span>}</p>
                </div>
                <p className="mt-4 sm:mt-6 text-sm text-slate-300 leading-relaxed">{f.bio || <span className="text-gray-700">—</span>}</p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <MagneticButton asChild strength={12}>
            <Link
              href="/become-a-trainer/"
              className="w-full sm:w-auto min-h-[48px] text-center px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all inline-flex items-center justify-center shadow-lg shadow-[#32D583]/25 hover:shadow-xl active:scale-[0.98] cursor-pointer"
            >
              Apply to Join Us as a Trainer
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
