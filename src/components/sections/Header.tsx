"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DualLogo } from "@/components/logo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses/" },
  { label: "Reviews", href: "/reviews/" },
  { label: "CRT", href: "/crt/" },
  { label: "Become a Trainer", href: "/become-a-trainer/" },
  { label: "Contact", href: "/contact/" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // Derive the active link directly from the pathname — no setState, no effect.
  const active = (() => {
    if (pathname.startsWith("/courses")) return "Courses";
    if (pathname.startsWith("/reviews")) return "Reviews";
    if (pathname.startsWith("/crt")) return "CRT";
    if (pathname.startsWith("/become-a-trainer")) return "Become a Trainer";
    if (pathname.startsWith("/contact")) return "Contact";
    return "Home";
  })();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    handleScroll(); // initialize on mount without cascading render
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-[#071D3A]/10 shadow-[0_4px_20px_-4px_rgba(7,29,58,0.08)]"
          : "bg-white/95 backdrop-blur-md border-b border-[#071D3A]/8"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 lg:h-20 items-center justify-between gap-6 sm:gap-10">
          {/* Animated dual logo — crossfades between GROOTS and GREEN ROOTS
              TRAINING & PLACEMENTS every 2.6s. Both logos keep their original
              colors intact (we never recolor them). */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 py-0.5 transition-all duration-200 hover:opacity-95 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2 rounded-lg"
            aria-label="Greenroots Home"
          >
            <DualLogo
              interval={2600}
              prioritySrc="primary"
              className="h-11 sm:h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.label;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 xl:px-4 py-2 text-[14px] xl:text-[14.5px] rounded-lg transition-all duration-200 ease-out inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-1 ${
                    isActive
                      ? "font-semibold text-[#0878E8] bg-[#0878E8]/[0.08] relative after:absolute after:bottom-1 after:left-3.5 after:right-3.5 after:h-[2px] after:bg-[#0878E8] after:rounded-full"
                      : "font-medium text-slate-600 hover:text-[#071D3A] hover:bg-slate-100/70"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 -mr-1.5 min-h-[44px] min-w-[44px] inline-flex items-center justify-center text-slate-700 hover:text-[#071D3A] rounded-lg hover:bg-slate-100/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] focus-visible:ring-offset-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          >
            {open ? (
              <X className="h-6 w-6 stroke-[2]" />
            ) : (
              <Menu className="h-6 w-6 stroke-[2]" />
            )}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <div className="lg:hidden border-t border-[#071D3A]/8 bg-white/98 backdrop-blur-xl py-3 px-2 shadow-[0_12px_28px_-6px_rgba(7,29,58,0.1)] animate-in fade-in slide-in-from-top-1.5 duration-200 ease-out">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => {
                const isActive = active === link.label;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setOpen(false);
                    }}
                    className={`px-3.5 py-2.5 min-h-[44px] flex items-center justify-between text-[14.5px] rounded-lg transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0878E8] ${
                      isActive
                        ? "bg-[#0878E8]/10 text-[#0878E8] font-semibold"
                        : "text-slate-700 font-medium hover:bg-slate-100/70 hover:text-[#071D3A] active:bg-slate-100"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#0878E8]" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
