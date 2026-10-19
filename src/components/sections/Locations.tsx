"use client";

import { StaggeredFadeGrid } from "@/components/animmaster/staggered-fade-grid";
import { TiltCard } from "@/components/smoothui/tilt-card";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  HYDERABAD_OFFICE,
  BENGALURU_OFFICE,
} from "@/lib/site";

const CAMPUS_HUBS = [
  {
    name: "Tech Labs",
    tag: "High-spec workstations & dual monitors",
    image: "/images/hyderabad-campus-tech-labs.jpg",
  },
  {
    name: "Interview Studio",
    tag: "Mock panel & HR simulations",
    image: "/images/hyderabad-campus-interview-studio.jpg",
  },
  {
    name: "Collaboration Hub",
    tag: "Peer coding & project lounge",
    image: "/images/hyderabad-campus-collaboration-hub.jpg",
  },
  {
    name: "Career Counselling Bay",
    tag: "Walk-in career audit & placement desk",
    image: "/images/hyderabad-campus-global-study-hub.jpg",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#071D3A] tracking-tight">
            Our Hyderabad Campus
          </h2>
          <p className="mt-3.5 sm:mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
            Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad 500072 — walk-in career audit, live tech labs, and placement drives under one roof.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={SITE_PHONE_TEL}
              className="inline-flex items-center gap-2 font-bold text-[#071D3A] hover:text-[#0878E8] transition-colors"
            >
              <Phone className="h-4 w-4 text-[#0878E8]" />
              {SITE_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${HYDERABAD_OFFICE.email}`}
              className="inline-flex items-center gap-2 font-bold text-[#071D3A] hover:text-[#0878E8] transition-colors break-all"
            >
              <Mail className="h-4 w-4 text-[#0878E8]" />
              {HYDERABAD_OFFICE.email}
            </a>
          </div>
        </div>

        {/* Animmaster: Staggered Fade-In Grid with SmoothUI 3D TiltCards */}
        <StaggeredFadeGrid
          className="grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6"
          staggerDelay={0.12}
        >
          {CAMPUS_HUBS.map((hub, i) => (
            <TiltCard
              key={`hub-${i}`}
              maxTilt={8}
              glareColor="rgba(22, 101, 52, 0.18)"
              className="group relative overflow-hidden rounded-2xl bg-gray-50 shadow-xs hover:shadow-2xl transition-all duration-300 h-full border border-gray-200/70 hover:border-[#0878E8]/50"
            >
              {hub.image ? (
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <img
                    src={hub.image}
                    alt={`${hub.name} at Greenroots Hyderabad Campus`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : null}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-5 lg:p-6 pointer-events-none backdrop-blur-[1px]">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white group-hover:text-[#00B8E6] transition-colors leading-tight">
                  {hub.name}
                </h3>
                <p className="text-[11px] sm:text-xs lg:text-sm text-gray-300/90 mt-1 leading-snug">{hub.tag}</p>
              </div>
            </TiltCard>
          ))}
        </StaggeredFadeGrid>

        {/* Bengaluru / Bangalore banner */}
        <div className="mt-12 sm:mt-16 relative overflow-hidden bg-gradient-to-r from-[#03101F] via-[#04132A] to-[#03101F] rounded-3xl p-6 sm:p-10 lg:p-12 text-white shadow-xl border border-emerald-500/25">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#32D583]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0878E8]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 grid md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-7">
              <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-xs uppercase tracking-widest font-bold text-emerald-300 mb-4">
                New in 2026
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Now serving Bengaluru / Bangalore
              </h3>
              <a
                href={BENGALURU_OFFICE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-start gap-3 text-sm sm:text-base text-slate-300 hover:text-white leading-relaxed group transition-colors"
                title="Open Bengaluru Office in Google Maps"
              >
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-emerald-400/40 underline-offset-4 group-hover:decoration-emerald-400">
                  {BENGALURU_OFFICE.fullAddress}
                </span>
              </a>
              <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm sm:text-base text-slate-300 leading-relaxed">
                <a
                  href={BENGALURU_OFFICE.phoneHref}
                  className="inline-flex items-center gap-3 font-bold text-white hover:text-emerald-300 transition-colors"
                >
                  <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                  {BENGALURU_OFFICE.phone}
                </a>
                <a
                  href={`mailto:${BENGALURU_OFFICE.email}`}
                  className="inline-flex items-center gap-3 font-bold text-white hover:text-emerald-300 transition-colors break-all"
                >
                  <Mail className="h-5 w-5 text-emerald-400 shrink-0" />
                  {BENGALURU_OFFICE.email}
                </a>
              </div>
            </div>
            <div className="md:col-span-5 flex md:justify-end">
              <a
                href="/contact/"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 min-h-[48px] px-7 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl shadow-lg shadow-[#32D583]/25 hover:shadow-xl active:scale-[0.98] transition-all cursor-pointer"
              >
                Visit the Bengaluru Office
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
