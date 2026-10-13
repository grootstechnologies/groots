"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Phone, MessageCircle, Home } from "lucide-react";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL, SITE_WHATSAPP_URL } from "@/lib/site";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[APP_RUNTIME_ERROR]", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 sm:px-6 py-16 text-center">
      <div className="max-w-md w-full">
        <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-5 font-black text-2xl">
          !
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-[#071D3A] tracking-tight">
          Something went wrong
        </h1>
        <p className="mt-3 text-sm text-slate-600 leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified. Please try reloading or reach out to our team directly.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0878E8] hover:bg-[#0765c4] shadow-sm transition-all"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-[#071D3A] bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <Home className="h-4 w-4" />
            Home
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
          Need immediate assistance?
          <div className="mt-2 flex items-center justify-center gap-4">
            <a
              href={SITE_PHONE_TEL}
              className="font-semibold text-[#0878E8] hover:underline inline-flex items-center gap-1"
            >
              <Phone className="h-3 w-3" />
              {SITE_PHONE_DISPLAY}
            </a>
            <span className="text-slate-300">·</span>
            <a
              href={SITE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
