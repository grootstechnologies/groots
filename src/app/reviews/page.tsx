"use client";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Star, CheckCircle, ArrowRight, Building, Award } from "lucide-react";
import Link from "next/link";
import InfiniteSlider from "@/components/smoothui/infinite-slider";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const REVIEWS = [
  {
    name: "Priya K.",
    track: "Power BI Track Graduate",
    company: "Deloitte",
    rating: 5,
    quote:
      "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
  },
  {
    name: "Arun R.",
    track: "Business Analyst Track Graduate",
    company: "Infosys",
    rating: 5,
    quote:
      "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
  },
  {
    name: "Santhosh M.",
    track: "DevSecOps Track Graduate",
    company: "Capgemini",
    rating: 4,
    quote:
      "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
  },
  {
    name: "Nandini K.",
    track: "Data Analytics Graduate",
    company: "Wipro",
    rating: 5,
    quote:
      "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
  },
  {
    name: "Venkat R.",
    track: "Tosca Automation Graduate",
    company: "TCS",
    rating: 5,
    quote:
      "Tosca training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
  },
  {
    name: "Zaid F.",
    track: "AI Product Management Graduate",
    company: "Associate PM Offer",
    rating: 5,
    quote:
      "The AI Product Management track is genuinely ahead of the market. I got an offer as an Associate PM within 3 weeks of finishing — and the interviewers were impressed by the AI tool fluency they hadn't seen before.",
  },
];

const ROW_1_COMPANIES = [
  { name: "TCS", logo: "/logos/companies/tcs.svg" },
  { name: "Infosys", logo: "/logos/companies/infosys.svg" },
  { name: "Accenture", logo: "/logos/companies/accenture.svg" },
  { name: "Wipro", logo: "/logos/companies/wipro.svg" },
  { name: "Cognizant", logo: "/logos/companies/cognizant.svg" },
  { name: "Capgemini", logo: "/logos/companies/capgemini.svg" },
];

const ROW_2_COMPANIES = [
  { name: "Deloitte", logo: "/logos/companies/deloitte.svg" },
  { name: "HCL Technologies", logo: "/logos/companies/hcltech.svg" },
  { name: "Tech Mahindra", logo: "/logos/companies/techmahindra.svg" },
  { name: "LTIMindtree", logo: "/logos/companies/ltimindtree.svg" },
  { name: "Mphasis", logo: "/logos/companies/mphasis.svg" },
  { name: "Hexaware", logo: "/logos/companies/hexaware.svg" },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Career Audit",
    desc: "We map your background to the right program and market segment.",
  },
  {
    step: "2",
    title: "Intensive Training",
    desc: "2–3 month track with live labs, projects, and mentor access.",
  },
  {
    step: "3",
    title: "Resume & Profile",
    desc: "ATS resume, LinkedIn, and Naukri profile — built by our team.",
  },
  {
    step: "4",
    title: "Mock Interviews",
    desc: "Daily mock rounds with feedback until you're interview-ready.",
  },
  {
    step: "5",
    title: "Placement Drive",
    desc: "Referrals, recruiter connects, and active job drive support.",
  },
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Header Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(234,88,12,0.12)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0878E8]/30 via-[#32D583]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.2)]">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2.2}>
                Proven Placement Track Record · Hyderabad Hub
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Our Placement Track Record &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6]">Student Reviews</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Real students. Real companies. Real salaries. Here&apos;s what Greenroots has delivered.
            </p>

            {/* Stats Row */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">85%</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">Placement Rate</div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">₹4.5L</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">Avg. Fresher Package</div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">60+</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">Alumni Placed</div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">3 mo</span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">Avg. Time to Offer</div>
              </div>
            </div>
          </div>
        </section>

        {/* Hiring Companies with SmoothUI InfiniteSlider */}
        <section className="py-10 sm:py-14 border-b border-gray-100 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-gray-400">
              Hiring Our Alumni
            </h3>
          </div>
          <div className="relative w-full overflow-hidden space-y-4 [mask-image:linear-gradient(to_right,transparent,white_8%,white_92%,transparent)]">
            {/* Row 1 moving forward */}
            <InfiniteSlider speed={45} speedOnHover={15} gap={20}>
              {ROW_1_COMPANIES.map((c) => (
                <div
                  key={c.name}
                  className="h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-2xl bg-gray-50/70 hover:bg-white border border-gray-200/60 hover:border-[#0878E8] shadow-xs hover:shadow-[0_8px_25px_-6px_rgba(22,101,52,0.15)] hover:-translate-y-0.5 flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-300 group"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </InfiniteSlider>

            {/* Row 2 moving reverse */}
            <InfiniteSlider speed={40} speedOnHover={15} reverse gap={20}>
              {ROW_2_COMPANIES.map((c) => (
                <div
                  key={c.name}
                  className="h-16 sm:h-20 w-36 sm:w-48 shrink-0 rounded-2xl bg-gray-50/70 hover:bg-white border border-gray-200/60 hover:border-[#0878E8] shadow-xs hover:shadow-[0_8px_25px_-6px_rgba(22,101,52,0.15)] hover:-translate-y-0.5 flex items-center justify-center p-3.5 sm:p-4.5 transition-all duration-300 group"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-7 sm:h-8 w-auto max-w-[110px] sm:max-w-[130px] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </section>

        {/* 5-Step Process */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              How It Works
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              From Enrolment to Offer Letter
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="gr-accent-top bg-white border border-slate-200/90 rounded-2xl p-6 hover:border-[#0878E8] hover:shadow-lg hover:-translate-y-1 transition-all shadow-xs flex flex-col justify-between group"
              >
                <div>
                  <div className="gr-step-num h-10 w-10 rounded-xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white font-black flex items-center justify-center text-sm mb-4 shadow-md group-hover:scale-105 transition-transform">
                    {step.step}
                  </div>
                  <h4 className="font-bold text-gray-900 text-base mb-1.5">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9]/60 to-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
                Student Voices
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
                What Our Graduates Say
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {REVIEWS.map((review, idx) => (
                <TiltCard
                  key={review.name}
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.12}
                  className="h-full rounded-2xl"
                >
                  <div className="gr-quote relative h-full bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                    {idx === 0 && (
                      <BorderBeam
                        colorFrom="#0878E8"
                        colorTo="#00B8E6"
                        duration={6}
                        size={90}
                        borderWidth={1.5}
                        radius={16}
                      />
                    )}
                    <div>
                      <div className="flex gap-1 text-amber-400 mb-4">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-xs" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed italic">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                      <div className="h-11 w-11 rounded-full bg-gradient-to-br from-[#0878E8] to-[#03101F] text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-md">
                        {review.name.slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm text-gray-900 truncate">{review.name}</div>
                        <div className="text-xs text-slate-500 font-medium truncate">{review.track}</div>
                        <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0878E8] bg-emerald-50/90 border border-emerald-200/70 px-2 py-0.5 rounded-full mt-1">
                          <CheckCircle className="h-3 w-3 text-emerald-600" /> Placed at {review.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-14 sm:mt-18 text-center">
              <MagneticButton asChild strength={15} className="w-full sm:w-auto">
                <Link
                  href="/contact/"
                  className="w-full sm:w-auto min-h-[50px] justify-center px-9 py-4 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl shadow-lg shadow-[#32D583]/25 hover:shadow-xl active:scale-[0.98] inline-flex items-center gap-2 transition-all text-center text-base"
                >
                  Start Your Career Transformation →
                </Link>
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
