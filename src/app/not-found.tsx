import Link from "next/link";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BookOpen, Star, Briefcase, Phone, Home, ArrowRight } from "lucide-react";
import { DualLogo } from "@/components/logo";

export const metadata = {
  title: "404 - Page Not Found | Greenroots Training & Placements",
  description: "The page you are looking for does not exist. Explore our job-ready tech courses in DevSecOps, Data Analytics, and Data Science.",
};

const SUGGESTED_LINKS = [
  {
    title: "Browse Courses",
    description: "DevSecOps, Data Analytics, and Data Science with 100% placement support.",
    href: "/courses/",
    icon: BookOpen,
    color: "from-blue-500/10 to-blue-600/5 text-[#0878E8]",
  },
  {
    title: "Student Reviews",
    description: "Read real stories and salary packages from hired alumni.",
    href: "/reviews/",
    icon: Star,
    color: "from-amber-500/10 to-amber-600/5 text-amber-500",
  },
  {
    title: "Campus Recruitment (CRT)",
    description: "College training and institutional placement bootcamps.",
    href: "/crt/",
    icon: Briefcase,
    color: "from-emerald-500/10 to-emerald-600/5 text-emerald-600",
  },
  {
    title: "Get in Touch",
    description: "Speak with our counsellors in Hyderabad and Bengaluru.",
    href: "/contact/",
    icon: Phone,
    color: "from-purple-500/10 to-purple-600/5 text-purple-600",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Error 404
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-black text-[#071D3A] tracking-tight">
            Lost in the Cloud?
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto">
            The page you are looking for doesn’t exist or has moved. Let’s get your tech career path back on track.
          </p>

          {/* Action button */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0878E8] hover:bg-[#0765c4] shadow-md hover:shadow-lg transition-all"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
            <Link
              href="/courses/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#071D3A] bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Explore Courses
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Helpful Navigation Cards */}
          <div className="mt-12 text-left">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 text-center mb-4">
              Or jump straight to:
            </h2>
            <div className="grid sm:grid-cols-2 gap-3.5">
              {SUGGESTED_LINKS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group p-4 rounded-2xl border border-slate-200/90 bg-white hover:border-[#0878E8]/40 hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} shrink-0 group-hover:scale-105 transition-transform`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#071D3A] group-hover:text-[#0878E8] transition-colors flex items-center gap-1">
                      {item.title}
                      <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
