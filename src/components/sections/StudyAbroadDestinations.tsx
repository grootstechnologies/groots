import Link from "next/link";
import { Globe, Plane } from "lucide-react";
import { TiltCard } from "@/components/smoothui/tilt-card";
import { MagneticButton } from "@/components/smoothui/magnetic-button";
import { ShineText } from "@/components/smoothui/shine-text";

type Destination = {
  flag: string;
  country: string;
  tag: string;
  desc: string;
};

const DESTINATIONS: Destination[] = [
  {
    flag: "🇺🇸",
    country: "USA",
    tag: "Top STEM Hub",
    desc: "Ivy League, Big Tech recruiting, OPT/STEM extension. Most graduate scholarships available.",
  },
  {
    flag: "🇦🇺",
    country: "Australia",
    tag: "Top World Rankings",
    desc: "Multiple universities in the world's Top 100, 2–4 year post-study work visa, strong STEM industry pipeline.",
  },
  {
    flag: "🇨🇦",
    country: "Canada",
    tag: "PR-Friendly",
    desc: "PGWP up to 3 years, transparent immigration, strong tech ecosystem in Toronto & Vancouver.",
  },
  {
    flag: "🇬🇧",
    country: "UK",
    tag: "2-Yr Grad Visa",
    desc: "1-year masters, 2-year graduate visa, Russell Group prestige with controlled cost.",
  },
  {
    flag: "🇩🇪",
    country: "Germany",
    tag: "Low / No Tuition",
    desc: "Public universities mostly tuition-free, Europe's engineering capital, 18-month job-search visa.",
  },
  {
    flag: "🇮🇪",
    country: "Ireland",
    tag: "Tech Gateway",
    desc: "European HQ for Google, Meta, Apple. 2-year stay-back after masters, English-speaking.",
  },
  {
    flag: "🇳🇿",
    country: "New Zealand",
    tag: "Quality of Life",
    desc: "Small intake, excellent placement ratios, 3-year post-study work visa.",
  },
  {
    flag: "🇸🇬",
    country: "Singapore",
    tag: "Asia's Hub",
    desc: "NUS & NTU world-top-20, close to India, strong fintech / data science roles.",
  },
];

export function StudyAbroadDestinations() {
  return (
    <section id="study-abroad" className="py-16 lg:py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/10 px-4 py-1.5 mb-4">
            <Globe className="h-3.5 w-3.5 text-[#0878E8]" />
            <ShineText
              text="Greenroots × SIG Global Edu — Official Partner"
              className="text-xs font-semibold text-[#0878E8]"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D3A]">
            Where do you want to land?
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Eight popular destinations our students choose. Tell us which and we'll map your fit, budget, and timeline in the free counselling session.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {DESTINATIONS.map((dest) => (
            <TiltCard
              key={dest.country}
              maxTilt={9}
              glareColor="rgba(22, 101, 52, 0.12)"
              className="bg-gray-50 hover:bg-white rounded-2xl p-6 ring-1 ring-gray-100 hover:ring-[#0878E8]/40 hover:shadow-lg transition-all duration-300 group h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl leading-none">{dest.flag}</span>
                  <h3 className="text-xl font-bold text-[#071D3A]">
                    {dest.country}
                  </h3>
                </div>
                <p className="text-xs font-semibold text-[#32D583] uppercase tracking-wide mb-2">
                  {dest.tag}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {dest.desc}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        <div className="mt-12 text-center flex justify-center">
          <MagneticButton
            href="/study-abroad"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] text-white font-semibold rounded-xl hover:from-[#0878E8] hover:to-[#32D583] transition-all shadow-lg shadow-[#32D583]/25"
          >
            <Plane className="h-4 w-4" />
            Get Free Counselling →
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
