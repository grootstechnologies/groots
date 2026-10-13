"use client";

import { useEffect } from "react";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[GLOBAL_APP_ERROR]", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-slate-900 min-h-screen flex items-center justify-center p-6 text-center">
        <div className="max-w-md w-full">
          <div className="w-14 h-14 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-5 font-black text-2xl">
            !
          </div>
          <h1 className="text-2xl font-black text-[#071D3A]">Application Error</h1>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A critical error occurred while rendering the application. Please try reloading the page.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              onClick={() => reset()}
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-[#0878E8] hover:bg-[#0765c4] transition-all"
            >
              Reload Page
            </button>
          </div>
          <div className="mt-6 text-xs text-slate-400">
            Greenroots Technical Support:{" "}
            <a href={SITE_PHONE_TEL} className="underline text-[#0878E8]">
              {SITE_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
