import { MessageCircleQuestion, Phone, ChevronDown } from "lucide-react";
import { SITE_PHONE_DISPLAY, SITE_PHONE_TEL } from "@/lib/site";

/**
 * QuickAnswers — Answer Engine Optimization (AEO) section for the home page.
 *
 * Renders the exact same questions & answers that are emitted as FAQPage
 * JSON-LD (see STUDENT_FAQS in src/app/page.tsx), so answer engines
 * (Google AI Overviews, ChatGPT, Perplexity, voice assistants) can quote
 * visible, crawlable content — not just hidden structured data.
 *
 * Format: accordion cards (native <details>/<summary>) matching the
 * Become-a-Trainer FAQ style — white rounded cards, bold question with a
 * rotating chevron, expandable answer. All answers stay in the
 * server-rendered HTML, so nothing is hidden from crawlers.
 *
 * Copy rules for AEO:
 *   - Each question is phrased as a natural-language question users ask.
 *   - The first sentence of each answer is a direct, self-contained answer.
 *   - NAP (name, address, phone) facts stay consistent with JSON-LD.
 */

export function QuickAnswers({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <section
      id="quick-answers"
      aria-labelledby="quick-answers-heading"
      className="gr-dots py-12 sm:py-16 lg:py-20 bg-slate-50/70 border-y border-slate-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0878E8]/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0878E8]">
            <MessageCircleQuestion className="h-3.5 w-3.5" />
            Quick answers
          </span>
          <h2
            id="quick-answers-heading"
            className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-[#071D3A] tracking-tight"
          >
            Frequently asked questions, answered straight
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
            Direct answers to the questions students ask us most about
            Greenroots Training &amp; Placements — courses, campuses in
            Hyderabad and Bengaluru, placements, fees, and how to enrol.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="gr-lift bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 group"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between [&::-webkit-details-marker]:hidden">
                <h3 className="pr-4 font-bold text-gray-900 text-[15px] sm:text-base lg:text-lg leading-snug">
                  {f.q}
                </h3>
                <ChevronDown className="h-5 w-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 shrink-0" />
              </summary>
              <p className="mt-3 text-[13px] sm:text-sm lg:text-base text-slate-600 leading-relaxed pt-3 border-t border-slate-100">
                {f.a}
              </p>
            </details>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-gray-500 text-center">
          Still have a question? Call us at{" "}
          <a
            href={SITE_PHONE_TEL}
            className="inline-flex items-center gap-1 font-bold text-[#0878E8] hover:underline"
          >
            <Phone className="h-3.5 w-3.5" />
            {SITE_PHONE_DISPLAY}
          </a>{" "}
          — the official number for both our Hyderabad and Bengaluru offices.
        </p>
      </div>
    </section>
  );
}
