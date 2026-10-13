import MagneticButton from "@/components/smoothui/magnetic-button";
import { BadgeCheck, Handshake } from "lucide-react";
import Link from "next/link";

export function StudentsHired() {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#03101F] via-[#04132A] to-[#03101F] border border-emerald-500/20 p-5 sm:p-10 lg:p-16 shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Real students. Real companies.{" "}
                <span className="bg-gradient-to-r from-[#32D583] to-[#00B8E6] bg-clip-text text-transparent">Real salaries.</span>
              </h2>
              <p className="mt-3.5 sm:mt-4 text-emerald-100/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                Here&apos;s what Greenroots has delivered. Mock interviews, referrals, and recruiter connects — placement service charges apply, because we only charge when we deliver results.
              </p>
              <div className="mt-6 sm:mt-8">
                <MagneticButton asChild strength={15}>
                  <Link
                    href="/contact/"
                    className="w-full sm:w-auto min-h-[48px] justify-center inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] shadow-lg shadow-[#32D583]/30 hover:shadow-xl active:scale-[0.98] transition-all text-center"
                  >
                    Start Your Career Audit →
                  </Link>
                </MagneticButton>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl bg-white/[0.04] backdrop-blur-sm p-2 group">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                <img
                  src="/images/real-students-placed.jpg"
                  alt="Real students in career training and corporate mentorship"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03101F]/60 via-transparent to-transparent pointer-events-none rounded-xl" />

                {/* Floating glass stat chips */}
                <div className="gr-floaty absolute left-3 top-3 sm:left-5 sm:top-5 z-10 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-2.5 py-2 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.65)] backdrop-blur-md">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#32D583]/25 text-[#7EE7B0]">
                    <BadgeCheck className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[11px] font-extrabold text-white">100% Placement Record</span>
                    <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-wider text-emerald-100/70">Program completers</span>
                  </span>
                </div>
                <div className="gr-floaty gr-floaty-late absolute bottom-3 right-3 sm:bottom-5 sm:right-5 z-10 flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-2.5 py-2 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.65)] backdrop-blur-md">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#00B8E6]/25 text-[#7FE5F2]">
                    <Handshake className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                  <span className="leading-tight">
                    <span className="block text-[11px] font-extrabold text-white">600+ Recruitment Partners</span>
                    <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-wider text-cyan-100/70">Hyderabad &amp; global hubs</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
