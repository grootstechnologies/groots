"use client";

import { useState } from "react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { Phone, Mail, MapPin, Clock, Globe, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import TiltCard from "@/components/smoothui/tilt-card";
import BorderBeam from "@/components/smoothui/border-beam";
import MagneticButton from "@/components/smoothui/magnetic-button";
import ShineText from "@/components/smoothui/shine-text";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
  HYDERABAD_OFFICE,
  BENGALURU_OFFICE,
} from "@/lib/site";

export default function ContactPage() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !course) {
      toast({
        title: "Required Fields Missing",
        description: "Please provide your name, phone number, and selected program.",
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
          email: email.trim() || undefined,
          course: course,
          status: status || undefined,
          message: msg.trim() || undefined,
          source: "contact-page",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setName("");
      setPhone("");
      setEmail("");
      setCourse("");
      setStatus("");
      setMsg("");
      toast({
        title: "Enquiry Submitted! 🎉",
        description: data.message || "Thank you! Our career counsellor will contact you within 4 hours with your personalised roadmap.",
      });
    } catch (err: any) {
      toast({
        title: "Submission Error",
        description: err.message || "Failed to submit enquiry. Please call +91 954 954 3898 directly.",
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
        {/* Contact Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),rgba(234,88,12,0.12)_60%,transparent_100%)] pointer-events-none" />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0878E8]/30 via-[#32D583]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/30 px-4 py-1.5 text-xs font-semibold text-[#7FE5F2] mb-5 border border-[#32D583]/30 backdrop-blur-md shadow-[0_0_18px_rgba(16,185,129,0.2)]">
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <ShineText baseColor="#7FE5F2" shineColor="#ffffff" duration={2}>
                Direct Support &amp; Walk-in Kukatpally Campus
              </ShineText>
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Let&apos;s Talk About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#7FE5F2] to-[#00B8E6]">Your Career.</span>
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              Fill out the form or reach us directly. Our team will get back to you within a few hours with program details and next steps.
            </p>
          </div>
        </section>

        {/* Content Split: Details + Form */}
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 items-start">
            {/* Left: Info */}
            <div>
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-50 text-[#0878E8] border border-emerald-200/80 text-xs uppercase tracking-widest font-bold mb-3">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#071D3A] mb-3 tracking-tight">
                Reach Out Directly
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                Whether you want to explore course fees, schedule an in-person career audit, or visit our Kukatpally academy — our door is always open.
              </p>

              <div className="space-y-4">
                <div className="gr-lift flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Phone (Official)</div>
                    <a href={SITE_PHONE_TEL} className="text-base sm:text-lg font-bold text-gray-900 hover:text-[#0878E8] transition-colors">
                      {SITE_PHONE_DISPLAY}
                    </a>
                    <div className="text-xs text-slate-500 mt-0.5">Hyderabad &amp; Bengaluru</div>
                  </div>
                </div>

                <div className="gr-lift flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Email</div>
                    <a href={`mailto:${HYDERABAD_OFFICE.email}`} className="block text-base sm:text-lg font-bold text-gray-900 hover:text-[#0878E8] transition-colors">
                      Hyderabad: {HYDERABAD_OFFICE.email}
                    </a>
                    <a href={`mailto:${BENGALURU_OFFICE.email}`} className="block text-base sm:text-lg font-bold text-gray-900 hover:text-[#0878E8] transition-colors">
                      Bengaluru: {BENGALURU_OFFICE.email}
                    </a>
                  </div>
                </div>

                <div className="gr-lift flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Website</div>
                    <a href="https://grootstechnologies.com" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-bold text-gray-900 hover:text-[#0878E8] transition-colors">
                      grootstechnologies.com
                    </a>
                  </div>
                </div>

                <div className="gr-lift flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Office Addresses</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900 leading-snug mt-1">
                      {HYDERABAD_OFFICE.label}
                    </div>
                    <div className="text-sm text-gray-600 leading-snug">
                      {HYDERABAD_OFFICE.fullAddress}
                    </div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900 leading-snug mt-3">
                      {BENGALURU_OFFICE.label}
                    </div>
                    <div className="text-sm text-gray-600 leading-snug">
                      {BENGALURU_OFFICE.fullAddress}
                    </div>
                  </div>
                </div>

                <div className="gr-lift flex items-start gap-4 p-5 sm:p-6 rounded-3xl border border-slate-200/90 bg-white shadow-sm hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#32D583] to-[#0878E8] text-white flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">Office Hours</div>
                    <div className="text-sm sm:text-base font-semibold text-gray-900">
                      Monday – Saturday · 9:00 AM – 7:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <MagneticButton asChild strength={14} className="w-full">
                  <a
                    href={SITE_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[50px] py-4 px-6 bg-[#25D366] hover:bg-[#32D583] text-white font-bold rounded-xl shadow-lg shadow-emerald-950/20 hover:shadow-xl hover:shadow-emerald-900/30 inline-flex items-center justify-center gap-2 transition-all cursor-pointer text-sm sm:text-base text-center"
                  >
                    WhatsApp Us Now ({SITE_PHONE_DISPLAY}) →
                  </a>
                </MagneticButton>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div className="relative overflow-hidden bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-12 shadow-xl">
              <BorderBeam
                colorFrom="#00B8E6"
                colorTo="#00B8E6"
                duration={6}
                size={130}
                borderWidth={1.5}
                radius={24}
              />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-[#071D3A] tracking-tight">Send an Enquiry</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6 sm:mb-8">
                  We&apos;ll reply with a personalised program recommendation within 4 hours.
                </p>

                <form onSubmit={handleSubmit} className="gr-form space-y-4 sm:space-y-5">
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
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Interested Course *</label>
                      <select
                        required
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                      >
                        <option value="">-- Select Program --</option>
                        <option>Power BI 60-Day Mastery</option>
                        <option>Senior Business Analyst Program</option>
                        <option>Full-Stack Software Testing</option>
                        <option>AI-Powered Product Management</option>
                        <option>Tricentis Tosca Automation</option>
                        <option>DevSecOps Mastery Track</option>
                        <option>Data Analytics for Freshers</option>
                        <option>Data Science &amp; AI (DSP Track)</option>
                        <option>Not sure — Need career guidance</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Current Status</label>
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full min-h-[48px] px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                      >
                        <option value="">-- Select Status --</option>
                        <option>Fresh Graduate</option>
                        <option>Working (0–2 years)</option>
                        <option>Working (2–5 years)</option>
                        <option>Working (5+ years)</option>
                        <option>Career Break / Returner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Message (optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your background, career goals, or any specific questions..."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-base sm:text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>

                  <MagneticButton asChild strength={10} className="w-full">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full min-h-[50px] py-3.5 px-6 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl text-center text-sm sm:text-base transition-all shadow-lg shadow-[#32D583]/25 hover:shadow-xl hover:shadow-[#32D583]/35 cursor-pointer flex items-center justify-center"
                    >
                      {submitting ? "Submitting..." : "Submit Enquiry & Book Free Audit →"}
                    </button>
                  </MagneticButton>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
