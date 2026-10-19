"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
  HYDERABAD_OFFICE,
  BENGALURU_OFFICE,
} from "@/lib/site";

const OFFICES = [HYDERABAD_OFFICE, BENGALURU_OFFICE];

import { MagneticButton } from "@/components/smoothui/magnetic-button";
import { ShineText } from "@/components/smoothui/shine-text";

export function Contact() {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !phone.trim()) {
      toast({
        title: "Required Fields Missing",
        description: "Please enter your first name and phone number.",
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
          name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          phone: phone.trim(),
          email: email.trim() || undefined,
          message: message.trim() || undefined,
          source: "home-contact",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setMessage("");
      toast({
        title: "Message Sent Successfully! 🎉",
        description: data.message || "Thank you for reaching out. A dedicated counsellor will contact you within 4 hours.",
      });
    } catch (err: any) {
      toast({
        title: "Submission Error",
        description: err.message || "Failed to submit message. Please call +91 954 954 3898 directly.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 lg:py-24 bg-gray-50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex mb-3">
            <ShineText
              text="⚡ FAST RESPONSE WITHIN 4 HOURS"
              className="text-xs font-bold uppercase tracking-wider text-[#0878E8] bg-[#0878E8]/10 px-4 py-1.5 rounded-full"
            />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Start with a free counselling call
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Tell us where you want to land. We reply within 4 hours with a personalised counselling slot, recommended tests, and a rough budget map.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: contact info */}
          <div className="space-y-5 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-[#0878E8]/10 text-[#0878E8] flex items-center justify-center mb-3.5 ring-1 ring-[#0878E8]/20">
                  <Phone className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Phone
                </h3>
                <p className="mt-1.5 text-[#071D3A] font-bold text-sm">
                  <a href={SITE_PHONE_TEL} className="hover:text-[#0878E8] transition-colors">
                    Hyderabad: {SITE_PHONE_DISPLAY}
                  </a>
                </p>
                <p className="mt-1 text-[#071D3A] font-bold text-sm">
                  <a href={BENGALURU_OFFICE.phoneHref} className="hover:text-[#0878E8] transition-colors">
                    Bengaluru: {BENGALURU_OFFICE.phone}
                  </a>
                </p>
              </div>
              <div className="bg-white rounded-2xl p-5 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="h-11 w-11 rounded-xl bg-[#0878E8]/10 text-[#0878E8] flex items-center justify-center mb-3.5 ring-1 ring-[#0878E8]/20">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Email
                </h3>
                <p className="mt-1.5 text-[#071D3A] font-bold text-sm break-all">
                  <a href={`mailto:${HYDERABAD_OFFICE.email}`} className="hover:text-[#0878E8] transition-colors">
                    Hyderabad: {HYDERABAD_OFFICE.email}
                  </a>
                </p>
                <p className="mt-1 text-[#071D3A] font-bold text-sm break-all">
                  <a href={`mailto:${BENGALURU_OFFICE.email}`} className="hover:text-[#0878E8] transition-colors">
                    Bengaluru: {BENGALURU_OFFICE.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200/80 shadow-xs hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="h-8 w-8 rounded-lg bg-[#0878E8]/10 text-[#0878E8] flex items-center justify-center">
                  <MapPin className="h-4.5 w-4.5 text-[#0878E8]" />
                </div>
                <h3 className="text-lg font-bold text-[#071D3A]">Our Offices</h3>
              </div>
              <div className="space-y-4">
                {OFFICES.map((loc, i) => (
                  <div key={`loc-${i}`} className="rounded-xl bg-gray-50/80 border border-gray-100 p-4">
                    <a
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/loc block hover:opacity-95"
                      title={`Open ${loc.label} in Google Maps`}
                    >
                      <h4 className="text-sm font-bold text-[#071D3A] flex items-center justify-between group-hover/loc:text-[#0878E8] transition-colors">
                        <span>{loc.label}</span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#0878E8] bg-[#0878E8]/10 group-hover/loc:bg-[#0878E8] group-hover/loc:text-white px-2 py-0.5 rounded-full transition-all">
                          <span>Map</span>
                          <ExternalLink className="h-2.5 w-2.5" />
                        </span>
                      </h4>
                      <p className="mt-1 text-sm text-gray-600 group-hover/loc:text-slate-900 leading-relaxed group-hover/loc:underline decoration-[#0878E8]/40 underline-offset-2 transition-colors">
                        {loc.fullAddress}
                      </p>
                    </a>
                    <div className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-sm pt-2 border-t border-gray-200/60">
                      <a href={loc.phoneHref} className="inline-flex items-center gap-1.5 font-semibold text-[#071D3A] hover:text-[#0878E8] transition-colors">
                        <Phone className="h-3.5 w-3.5 text-[#0878E8]" />
                        {loc.phone}
                      </a>
                      <a href={`mailto:${loc.email}`} className="inline-flex items-center gap-1.5 font-semibold text-[#071D3A] hover:text-[#0878E8] transition-colors break-all">
                        <Mail className="h-3.5 w-3.5 text-[#0878E8]" />
                        {loc.email}
                      </a>
                    </div>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                    Office Hours
                  </h4>
                  <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                    Monday – Saturday: 9:00 AM – 7:00 PM <br />
                    Sunday: By appointment / counselling
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex">
                  <MagneticButton
                    href={SITE_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-[#0878E8] hover:text-[#0A2447] bg-[#0878E8]/10 hover:bg-[#0878E8]/15 px-3.5 sm:px-4.5 py-2.5 rounded-xl transition-colors text-center"
                  >
                    Chat with us on WhatsApp ({SITE_PHONE_DISPLAY}) →
                  </MagneticButton>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="relative bg-white rounded-3xl shadow-xl border border-slate-200/90 p-5 sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/15 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/15 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/15 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone"
                    className="w-full px-4 py-3 min-h-[46px] rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/15 focus:border-[#0878E8] text-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message or goals here"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white focus:bg-white text-base sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#0878E8]/15 focus:border-[#0878E8] resize-none text-slate-900 transition-all placeholder:text-slate-400"
                />
              </div>
              <div className="pt-2">
                <MagneticButton
                  asChild
                  className="w-full block"
                >
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full min-h-[48px] py-3.5 sm:py-4 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-bold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] shadow-lg shadow-[#32D583]/25 hover:shadow-xl active:scale-[0.98] transition-all disabled:opacity-70 cursor-pointer flex items-center justify-center text-center"
                  >
                    {submitting ? "Sending..." : "Get Free Counselling →"}
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
