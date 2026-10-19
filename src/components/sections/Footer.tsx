import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { DualLogo } from "@/components/logo";
import {
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
  SITE_WHATSAPP_URL,
  HYDERABAD_OFFICE,
  BENGALURU_OFFICE,
} from "@/lib/site";

const PROGRAMS = [
  { name: "DevSecOps", href: "/courses/devops/" },
  { name: "Data Analytics", href: "/courses/data-analytics/" },
  { name: "Data Science", href: "/courses/data-science/" },
];

const QUICK_LINKS = [
  { name: "All Courses", href: "/courses/" },
  { name: "Reviews", href: "/reviews/" },
  { name: "CRT", href: "/crt/" },
  { name: "Become a Trainer", href: "/become-a-trainer/" },
  { name: "Contact", href: "/contact/" },
  { name: "Privacy", href: "/privacy/" },
];

const SOCIALS = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/grootstechnologies/",
    Icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/grootstechnologies/",
    Icon: Instagram,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@greenroots_techtalks",
    Icon: Youtube,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20chat.",
    Icon: MessageCircle,
  },
];

const CONTACT_CHIPS = [
  {
    label: "Phone — Hyderabad",
    value: `Hyd: ${SITE_PHONE_DISPLAY}`,
    href: SITE_PHONE_TEL,
    Icon: Phone,
  },
  {
    label: "Phone — Bengaluru",
    value: `Blr: ${BENGALURU_OFFICE.phone}`,
    href: BENGALURU_OFFICE.phoneHref,
    Icon: Phone,
  },
  {
    label: "Email — Hyderabad",
    value: HYDERABAD_OFFICE.email,
    href: `mailto:${HYDERABAD_OFFICE.email}`,
    Icon: Mail,
  },
  {
    label: "Email — Bengaluru",
    value: BENGALURU_OFFICE.email,
    href: `mailto:${BENGALURU_OFFICE.email}`,
    Icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "Chat with us",
    href: SITE_WHATSAPP_URL,
    Icon: MessageCircle,
  },
];

const OFFICES = [HYDERABAD_OFFICE, BENGALURU_OFFICE];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 text-slate-800 border-t border-slate-200/90">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand + contact chips */}
          <div className="lg:col-span-5">
            <Link
              href="/"
              className="inline-flex mb-4 group transition-transform duration-200 hover:scale-[1.02]"
              aria-label="Greenroots Home"
            >
              <DualLogo
                interval={2600}
                prioritySrc="primary"
                className="h-10 sm:h-12 w-auto"
              />
            </Link>

            {/* Inline contact chips */}
            <div className="flex flex-wrap gap-2 mt-4">
              {CONTACT_CHIPS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white border border-slate-200/90 hover:border-[#0878E8]/40 hover:text-[#0878E8] text-slate-700 transition-all shadow-xs"
                >
                  <c.Icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{c.value}</span>
                </a>
              ))}
            </div>

            {/* Offices — Hyderabad + Bengaluru with respective phone & email */}
            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              {OFFICES.map((o) => (
                <div
                  key={o.id}
                  className="gr-lift rounded-2xl border border-slate-200/90 bg-white/70 p-4 shadow-xs hover:border-[#0878E8]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <a
                    href={o.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/loc block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] rounded-lg"
                    title={`Open ${o.label} in Google Maps`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <h4 className="text-xs font-bold text-[#071D3A] uppercase tracking-wider flex items-center gap-1.5 group-hover/loc:text-[#0878E8] transition-colors">
                        <MapPin className="h-3.5 w-3.5 text-[#0878E8] shrink-0" />
                        <span>{o.label}</span>
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[10px] normal-case font-semibold text-[#0878E8] bg-[#0878E8]/10 group-hover/loc:bg-[#0878E8] group-hover/loc:text-white px-2 py-0.5 rounded-full transition-all">
                        <span>Map</span>
                        <ExternalLink className="h-2.5 w-2.5" />
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 group-hover/loc:text-slate-900 group-hover/loc:underline decoration-[#0878E8]/50 underline-offset-2 leading-snug transition-colors">
                      {o.fullAddress}
                    </p>
                  </a>
                  <div className="mt-3 pt-2.5 border-t border-slate-100 space-y-1.5 text-xs sm:text-sm">
                    <a
                      href={o.phoneHref}
                      className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-[#0878E8] transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-[#0878E8] shrink-0" />
                      <span>{o.phone}</span>
                    </a>
                    <a
                      href={`mailto:${o.email}`}
                      className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-[#0878E8] transition-colors break-all"
                    >
                      <Mail className="h-3.5 w-3.5 text-[#0878E8] shrink-0" />
                      <span>{o.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons — circular */}
            <div className="flex items-center gap-2.5 mt-5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="h-9 w-9 rounded-full inline-flex items-center justify-center bg-white border border-slate-200/90 hover:border-[#0878E8] hover:bg-[#0878E8] hover:text-white text-slate-700 transition-all duration-200 shadow-xs"
                >
                  <s.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0878E8]" />
                Programs
              </h3>
              <ul className="space-y-2">
                {PROGRAMS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#0878E8] hover:translate-x-1 transition-all inline-flex items-center gap-1.5 font-medium"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#32D583]" />
                Quick Links
              </h3>
              <ul className="space-y-2">
                {QUICK_LINKS.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-slate-600 hover:text-[#0878E8] hover:translate-x-1 transition-all inline-flex items-center gap-1.5 font-medium"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-medium">
            © {new Date().getFullYear()} Green Roots Technologies. All rights reserved.
          </p>
          <Link
            href="/privacy/"
            className="text-xs text-slate-500 hover:text-[#0878E8] font-medium transition-colors hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
