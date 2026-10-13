"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Briefcase, Youtube, Instagram, Clock, DollarSign, Users, Award, ChevronDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const PROFILES = [
  {
    icon: Briefcase,
    title: "IT & Non-IT Professionals",
    desc: "Domain experts with real-world experience ready to pass on what they've learned in the field.",
    qualify: [
      "5+ years in any IT or Non-IT domain",
      "Expertise in Cloud, DevOps, Data, BA, Testing, HR, Finance, Soft Skills, or Aptitude",
      "Passion for teaching and mentoring the next generation",
      "Currently employed or freelancing — no need to quit your current job",
    ],
  },
  {
    icon: Youtube,
    title: "YouTubers — Educational & Career",
    desc: "Content creators who teach, inspire, and build audiences around technology, careers, or education.",
    qualify: [
      "Run a YouTube channel on tech, careers, aptitude, or education",
      "Want to monetise your content beyond AdSense",
      "Ready to co-create structured courses with us",
      "Want to grow your subscriber base through our student community",
    ],
  },
  {
    icon: Instagram,
    title: "Instagram Influencers — EdTech & Career",
    desc: "Voices shaping how students think about careers, skills, and the future of work.",
    qualify: [
      "Create technology, career growth, or education reels and content",
      "Engage students with placement tips and professional guidance",
      "Want to turn your following into a dependable revenue stream",
      "Ready to co-host sessions, masterclasses, and student webinars",
    ],
  },
];

const FAQS = [
  {
    q: "Do I need to quit my current job?",
    a: "Not at all. Most of our trainers teach evening or weekend batches, or record modules at their own pace, while staying in their full-time roles. The whole model is built around fitting in alongside what you already do.",
  },
  {
    q: "Do I need prior teaching experience?",
    a: "No. What matters is genuine, hands-on expertise and a willingness to mentor. Our team helps you structure your knowledge into a clear curriculum, so you can focus on teaching what you know best.",
  },
  {
    q: "How much time does it actually take?",
    a: "It's flexible. A live batch might be a few hours a week for the length of a cohort. Alternatively, you can record a set of modules once and keep earning as new students enrol — closer to passive income.",
  },
  {
    q: "How and when do I get paid?",
    a: "Depending on your engagement model — per live batch, per recorded module, or a revenue share — payouts are made on a regular cycle. The exact terms are agreed transparently during onboarding, before you start.",
  },
  {
    q: "I'm a YouTuber or Instagram creator, not a corporate trainer. Can I still join?",
    a: "Yes — we have a dedicated track for educational and career creators. You can co-create courses, host live masterclasses, and grow your audience through our student community, turning your following into a real revenue stream.",
  },
  {
    q: "What support do I get from Greenroots?",
    a: "Everything outside the teaching itself — student acquisition, batch scheduling, marketing, the learning platform, and placement support — is handled by us. You show up and teach; we run the operation around you.",
  },
];

export default function BecomeATrainerPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("");
  const [exp, setExp] = useState("");
  const [domain, setDomain] = useState("");
  const [social, setSocial] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !profile || !domain.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill out all marked fields to submit your trainer application.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/leads/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          email: email.trim(),
          course: domain.trim(),
          status: "trainer",
          message: msg.trim() || undefined,
          source: "trainer-application",
          metadata: {
            profileType: profile,
            experience: exp,
            socialUrl: social,
          },
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to submit application.");
      }
      setName("");
      setPhone("");
      setEmail("");
      setProfile("");
      setExp("");
      setDomain("");
      setSocial("");
      setMsg("");
      toast({
        title: "Application Submitted! 🎉",
        description: data.message || "Thank you for applying! Our onboarding team will reach out within 48 hours for a discovery call.",
      });
    } catch (err: any) {
      toast({
        title: "Submission Error",
        description: err.message || "Failed to submit application. Please contact admin@g-roots.in directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />

      <main className="flex-1 pt-24 lg:pt-28 pb-20">
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(234,88,12,0.12)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0878E8]/30 via-[#32D583]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.2)]">
              <Award className="h-3.5 w-3.5 text-amber-400" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2}>
                Now Inviting Trainers &amp; Creators · High-Yield Partnership
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Teach. Grow. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6]">Earn More.</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-3xl mx-auto leading-relaxed">
              You have the expertise. We have the students, the platform, and the placement outcomes. Join Greenroots as a trainer or content partner — and double or triple your income without leaving what you already do.
            </p>

            {/* Quick Stats */}
            <div className="mt-10 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 max-w-5xl mx-auto">
              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">
                    5yr+
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  Minimum Experience
                </div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">
                    2–3×
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  Income Potential
                </div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">
                    IT &amp; Non-IT
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  Both Welcome
                </div>
              </div>

              <div className="gr-glass relative overflow-hidden bg-white/[0.07] hover:bg-white/[0.11] backdrop-blur-md p-4 sm:p-5 lg:p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 shadow-xl hover:shadow-[0_12px_30px_rgba(16,185,129,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[110px] sm:min-h-[130px] group">
                <div className="flex items-center justify-center min-h-[36px] sm:min-h-[44px]">
                  <span className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tracking-tight whitespace-nowrap">
                    Flexible
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-300 mt-1 sm:mt-1.5 font-medium leading-snug">
                  Teach Live or Record
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              Who We&apos;re Looking For
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              3 Profiles We Want on Our Team
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {PROFILES.map((p) => {
              const Icon = p.icon;
              return (
                <TiltCard
                  key={p.title}
                  maxTilt={6}
                  scale={1.02}
                  glare={true}
                  glareOpacity={0.08}
                  className="h-full rounded-3xl"
                >
                  <div className="h-full bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
                    <div>
                      <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">{p.desc}</p>

                      <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mb-3">
                        You Qualify If You Have
                      </div>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                        {p.qualify.map((q, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#0878E8] mt-2 shrink-0" />
                            <span className="leading-snug">{q}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </section>

        {/* Income Potential Breakdown */}
        <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-[#03101F] via-[#04132A] to-[#03101F] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(16,185,129,0.15),transparent_100%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30 text-xs uppercase tracking-widest font-bold">
                Income Potential
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-3 tracking-tight">
                Double. Triple. Your Income.
              </h2>
              <p className="text-emerald-100/80 text-sm sm:text-base mt-2 max-w-xl mx-auto leading-relaxed">
                Here&apos;s what realistic earning looks like when your expertise meets Greenroots&apos; student base.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:border-white/30 transition-all duration-300">
                <div className="text-sm font-bold text-amber-300">IT Professional</div>
                <div className="text-xs text-slate-300 mt-1">Current salary ~₹60,000/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹30,000–50,000/mo</div>
                <div className="mt-5 pt-4 border-t border-white/20">
                  <div className="text-3xl sm:text-4xl font-black text-white">₹1L+</div>
                  <div className="text-xs text-slate-200 mt-1">1.5× to 2× income · Part-time teaching</div>
                </div>
              </div>

              <div className="bg-white/15 backdrop-blur-md p-6 sm:p-8 rounded-3xl border-2 border-[#32D583] relative shadow-2xl shadow-[#32D583]/10">
                <span className="absolute -top-3 right-6 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-black text-[10px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Featured
                </span>
                <div className="text-sm font-bold text-amber-300">Senior Expert (10yr+)</div>
                <div className="text-xs text-slate-300 mt-1">Current CTC ~₹1.2L/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹60,000–1L/mo</div>
                <div className="mt-5 pt-4 border-t border-white/20">
                  <div className="text-3xl sm:text-4xl font-black text-amber-300">₹2L+</div>
                  <div className="text-xs text-slate-200 mt-1">2× to 3× income · Weekend batches only</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 hover:border-white/30 transition-all duration-300">
                <div className="text-sm font-bold text-amber-300">YouTuber / Influencer</div>
                <div className="text-xs text-slate-300 mt-1">Current creator income ~₹20,000/mo</div>
                <div className="text-xl font-bold my-2 text-white">+</div>
                <div className="text-xs text-slate-300">Greenroots: ₹40,000–80,000/mo</div>
                <div className="mt-5 pt-4 border-t border-white/20">
                  <div className="text-3xl sm:text-4xl font-black text-white">₹1L+</div>
                  <div className="text-xs text-slate-200 mt-1">3× to 5× income · Leverage your audience</div>
                </div>
              </div>
            </div>

            <p className="text-center text-xs text-slate-300 mt-8 sm:mt-10">
              * Figures are illustrative. Actual earnings vary based on batch size, subject demand, and engagement model.
            </p>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
              Join the Team
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
              Apply to Become a Trainer
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              All fields marked * are required. We respond within 48 hours.
            </p>
          </div>

          <div className="relative overflow-hidden bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-xl">
            <BorderBeam
              colorFrom="#00B8E6"
              colorTo="#00B8E6"
              duration={6}
              size={130}
              borderWidth={1.5}
              radius={24}
            />
            <form onSubmit={handleSubmit} className="gr-form relative z-10 space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">I Am A *</label>
                  <select
                    required
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  >
                    <option value="">-- Select Profile --</option>
                    <option>IT Professional</option>
                    <option>Non-IT Professional</option>
                    <option>YouTuber / Content Creator</option>
                    <option>Instagram Influencer</option>
                    <option>Freelance Trainer</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">Years of Experience</label>
                  <select
                    value={exp}
                    onChange={(e) => setExp(e.target.value)}
                    className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                  >
                    <option value="">-- Select Experience --</option>
                    <option>5–7 years</option>
                    <option>8–10 years</option>
                    <option>10–15 years</option>
                    <option>15+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Domain / Area of Expertise *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Power BI, DevSecOps, QA, HR, Aptitude, Soft Skills..."
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">LinkedIn / YouTube / Instagram Handle</label>
                <input
                  type="text"
                  placeholder="Paste your profile URL or handle"
                  value={social}
                  onChange={(e) => setSocial(e.target.value)}
                  className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Tell Us About Yourself</label>
                <textarea
                  rows={3}
                  placeholder="Your background, what you teach, what you're looking for in a partnership..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                />
              </div>

              <MagneticButton asChild strength={10} className="w-full">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full min-h-[50px] py-3.5 px-6 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl text-center text-sm sm:text-base transition-all shadow-lg shadow-[#32D583]/25 hover:shadow-xl cursor-pointer flex items-center justify-center"
                >
                  {submitting ? "Submitting..." : "Submit Application →"}
                </button>
              </MagneticButton>
            </form>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#f8fafc] to-white border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold">
                Common Questions
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="gr-lift bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group">
                  <summary className="font-bold text-gray-900 text-base sm:text-lg cursor-pointer list-none flex items-center justify-between">
                    <span className="pr-4">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
                  </summary>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
