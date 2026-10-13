"use client";

import { useState } from "react";
import { Download, X, CheckCircle2, Loader2 } from "lucide-react";

/**
 * CurriculumDownloadButton — form-gated PDF download.
 *
 * Click → opens a modal form (name, phone, email). On submit, validates inputs,
 * shows a success state, triggers a download of the PDF, and auto-closes
 * after 2.5s. The button itself shows a "Download" label by default; pass a
 * `label` prop to override.
 */

const PDF_URL = "/curriculum/greenroots-curriculum-2026.pdf";

type Props = {
  label?: string;
  className?: string;
  variant?: "primary" | "ghost";
  courseCode?: string;
};

export function CurriculumDownloadButton({
  label = "Download Detailed Curriculum",
  className = "",
  variant = "primary",
  courseCode,
}: Props) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const triggerDownload = () => {
    // Build the URL with optional course code query param for analytics.
    const url = courseCode ? `${PDF_URL}?course=${encodeURIComponent(courseCode)}` : PDF_URL;
    const a = document.createElement("a");
    a.href = url;
    a.download = "greenroots-curriculum-2026.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Light validation.
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[+\d][\d\s-]{7,}$/.test(phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError("Please enter a valid email address.");
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
          course: courseCode || "all-courses",
          source: "curriculum-download",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to process download request.");
      }
      setSuccess(true);
      triggerDownload();
      // Auto-close after 2.5s.
      setTimeout(() => {
        setOpen(false);
        setSuccess(false);
        setName("");
        setPhone("");
        setEmail("");
      }, 2500);
    } catch (err: any) {
      setError(err.message || "Failed to process download. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          variant === "primary"
            ? `inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl shadow-lg shadow-[#32D583]/25 hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer ${className}`
            : `inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3.5 border border-slate-300 text-[#071D3A] font-bold rounded-xl bg-white hover:bg-slate-50 hover:border-[#0878E8] transition-all active:scale-[0.98] cursor-pointer ${className}`
        }
      >
        <Download className="h-4 w-4" />
        {label}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Download curriculum form"
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {!success ? (
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black text-[#071D3A] tracking-tight">
                  Download the curriculum
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
                  Enter your details and the PDF will download instantly.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full min-h-[44px] px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-slate-50/60 focus:bg-white focus:outline-hidden focus:border-[#0878E8] focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-900"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-semibold text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full min-h-[48px] py-3.5 px-6 bg-gradient-to-r from-[#32D583] to-[#00B8E6] hover:from-[#0878E8] hover:to-[#32D583] text-white font-bold rounded-xl text-center text-sm sm:text-base transition-all shadow-lg shadow-[#32D583]/25 hover:shadow-xl cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Preparing download…
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" />
                        Download PDF
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center">
                    We&apos;ll never spam you. Your details are used only to send you the curriculum and a follow-up call.
                  </p>
                </form>
              </div>
            ) : (
              <div className="p-10 sm:p-12 text-center">
                <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#071D3A] tracking-tight">
                  Download started!
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Your curriculum PDF is downloading. We&apos;ll follow up shortly to answer any questions.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
