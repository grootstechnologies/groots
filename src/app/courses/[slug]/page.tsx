import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Clock,
  Signal,
  Laptop,
  Users,
  Target,
  ListChecks,
  Wrench,
  Award,
  FileText,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CurriculumDownloadButton } from "@/components/courses/CurriculumDownloadButton";
import { NEW_COURSES, COURSE_BY_SLUG, type Course } from "@/data/courses/curriculum";
import { CourseJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return NEW_COURSES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  return (async () => {
    const { slug } = await params;
    const course = COURSE_BY_SLUG[slug];
    if (!course) return { title: "Course Not Found" };

    /* Truncate at the last whole word inside 155 chars. */
    const raw = course.executiveSynopsis;
    const description =
      raw.length > 155
        ? `${raw.slice(0, 155).replace(/\s+\S*$/, "")}…`
        : raw;

    return {
      /* template "%s · Greenroots" appends the brand — keep just the name. */
      title: course.name,
      description,
      alternates: { canonical: `/courses/${course.slug}/` },
      openGraph: {
        type: "website",
        title: `${course.name} — ${course.tagline}`,
        description: raw.slice(0, 200),
        url: `/courses/${course.slug}/`,
        images: [OG_IMAGE],
      },
      twitter: {
        card: "summary_large_image",
        title: `${course.name} — ${course.tagline}`,
        description: raw.slice(0, 200),
        images: [TWITTER_IMAGE],
      },
    };
  })();
}

/* ------------------------------- Page ------------------------------- */

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = COURSE_BY_SLUG[slug];
  if (!course) notFound();

  const accent = course.accentColor;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pt-18 lg:pt-20 pb-20">
        {/* Structured data */}
        <CourseJsonLd
          name={course.name}
          description={course.executiveSynopsis.slice(0, 200)}
          slug={`/courses/${course.slug}/`}
          courseCode={course.code}
          duration={course.duration}
        />
        <BreadcrumbJsonLd
          items={[
            { name: "Home", url: "https://grootstechnologies.com/" },
            { name: "Courses", url: "https://grootstechnologies.com/courses/" },
            { name: course.name, url: `https://grootstechnologies.com/courses/${course.slug}/` },
          ]}
        />
        <FaqJsonLd faqs={course.faqs} at={`/courses/${course.slug}/`} />

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#03101F] text-white py-14 sm:py-20 lg:py-24 border-b border-white/10">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${accent}40, transparent 65%)`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="text-xs sm:text-sm text-slate-400 mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="h-3 w-3" />
              <Link href="/courses/" className="hover:text-white">Courses</Link>
              <ChevronRight className="h-3 w-3" />
              <span className="text-white">{course.name}</span>
            </nav>

            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm"
              style={{
                backgroundColor: `${accent}22`,
                color: accent,
                border: `1px solid ${accent}55`,
              }}
            >
              {course.code} · {course.category}
            </span>

            <h1
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mt-4"
            >
              {course.name}
            </h1>

            <p className="mt-3 text-lg sm:text-xl font-bold tracking-tight" style={{ color: accent }}>
              {course.strategicHeadline}
            </p>

            <p className="mt-4 text-sm sm:text-base lg:text-lg text-emerald-100/80 max-w-3xl leading-relaxed">
              {course.executiveSynopsis}
            </p>

            {/* Quick stats */}
            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Stat icon={Clock} label="Duration" value={course.duration} />
              <Stat icon={Signal} label="Hours" value={course.weeklyHours} />
              <Stat icon={Laptop} label="Mode" value={course.learningMode} />
              <Stat icon={Users} label="Batch Size" value={course.batchSize} />
            </div>

            {/* CTA: Download — NOT Enroll Now */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3.5">
              <CurriculumDownloadButton
                courseCode={course.code}
                label="Download Detailed Curriculum"
                className="w-full sm:w-auto"
              />
              <a
                href="tel:+919549543898"
                className="w-full sm:w-auto min-h-[48px] text-center px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-emerald-400/30 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                Talk to a Counsellor
              </a>
            </div>
          </div>
        </section>

        {/* Strategic card — audience, prereqs, path */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            <StrategicCard
              icon={Target}
              title="Who this is for"
              accent={accent}
              items={course.targetAudience}
            />
            <StrategicCard
              icon={ListChecks}
              title="Prerequisites"
              accent={accent}
              items={course.prerequisites}
            />
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
              <div
                className="h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0 mb-4"
                style={{ backgroundColor: accent }}
              >
                <Award className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-[#071D3A] mb-2">Primary career path</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{course.primaryCareerPath}</p>
              <div className="mt-5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="text-[11px] uppercase font-bold text-slate-400 mb-1">Outcome</div>
                <p className="text-xs sm:text-sm font-medium text-slate-700 leading-relaxed">
                  {course.targetOutcome}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <Section
          eyebrow="Key Takeaways"
          title={`What you&apos;ll walk away with`}
          accent={accent}
        >
          <div className="grid md:grid-cols-2 gap-4">
            {course.keyTakeaways.map((k, i) => (
              <div
                key={k}
                className="flex items-start gap-3 bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md transition-all"
              >
                <span
                  className="h-8 w-8 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ backgroundColor: accent }}
                >
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">{k}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tooling Ecosystem */}
        <Section eyebrow="Tooling Ecosystem" title="The tools you&apos;ll master" accent={accent}>
          <div className="gr-accent-top overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-[11px] uppercase tracking-wider text-slate-500 font-bold">
                <tr>
                  <th className="px-5 py-3 w-1/3">Domain</th>
                  <th className="px-5 py-3">Tools</th>
                </tr>
              </thead>
              <tbody>
                {course.toolingEcosystem.map((t, i) => (
                  <tr
                    key={t.domain}
                    className={i % 2 === 0 ? "bg-white" : "bg-slate-50/40"}
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#071D3A] align-top">
                      {t.domain}
                    </td>
                    <td className="px-5 py-3.5 text-slate-600 align-top">
                      <div className="flex flex-wrap gap-1.5">
                        {t.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100/80 hover:bg-slate-200/70 text-slate-700 border border-slate-200/60 transition-colors"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Production Artifacts */}
        <Section eyebrow="Production Artifacts" title="Real things you&apos;ll ship" accent={accent}>
          <div className="grid md:grid-cols-2 gap-5">
            {course.productionArtifacts.map((a) => (
              <div
                key={a.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0 mb-4"
                  style={{ backgroundColor: accent }}
                >
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-[#071D3A] mb-2">{a.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section eyebrow="Certifications" title="What you&apos;ll earn" accent={accent}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {course.certifications.map((c) => (
              <div
                key={c.title}
                className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div
                  className="h-9 w-9 rounded-lg flex items-center justify-center text-white shrink-0 mb-3"
                  style={{ backgroundColor: accent }}
                >
                  <Award className="h-4 w-4" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#071D3A] mb-1.5">
                  {c.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Detailed Curriculum — download CTA, no inline phase cards */}
        <section className="bg-gradient-to-b from-[#03101F] via-[#04132A] to-[#03101F] py-14 sm:py-20 border-y border-white/10 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs uppercase tracking-widest font-bold text-emerald-300 mb-5">
              Detailed Curriculum
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {course.phases.length}-Phase Curriculum · {course.duration}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
              The full curriculum — every phase, every module, every project, every reading — is in the
              downloadable PDF. We keep it out of the web page so it stays in sync with the live cohorts.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3.5">
              <CurriculumDownloadButton
                courseCode={course.code}
                label="Download Detailed Curriculum"
              />
              <a
                href="tel:+919549543898"
                className="min-h-[48px] text-center px-6 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-emerald-400/30 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                Talk to a Counsellor
              </a>
            </div>

            {/* Phase outline — titles only, no inline card detail */}
            <div className="mt-10 max-w-3xl mx-auto grid sm:grid-cols-2 gap-3 text-left">
              {course.phases.map((p) => (
                <div
                  key={p.phase}
                  className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3"
                >
                  <div className="text-[11px] font-mono font-bold text-emerald-300 uppercase tracking-wider">
                    {p.phase}
                  </div>
                  <div className="text-sm font-bold text-white mt-1">{p.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8 sm:mb-10">
            <span
              className="inline-flex items-center px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold"
              style={{
                backgroundColor: `${accent}18`,
                color: accent,
                border: `1px solid ${accent}30`,
              }}
            >
              FAQs
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071D3A] mt-3 tracking-tight">
              Questions, answered
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {course.faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-white border border-slate-200/90 rounded-2xl px-5 sm:px-6 shadow-xs overflow-hidden"
              >
                <AccordionTrigger className="text-left text-[15px] sm:text-base font-bold text-[#071D3A] hover:no-underline min-h-[52px]">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-[15px] text-slate-600 leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="relative overflow-hidden bg-gradient-to-r from-[#03101F] via-[#04132A] to-[#03101F] rounded-3xl p-8 sm:p-12 text-center shadow-2xl border border-emerald-500/25">
            <div
              className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none"
              style={{ backgroundColor: `${accent}22` }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Ready to start the {course.name}?
              </h2>
              <p className="text-sm sm:text-base text-emerald-100/80 mt-3 max-w-xl mx-auto leading-relaxed">
                Download the full curriculum, then book a free career audit. We&apos;ll tell you if this is the right track for you.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3.5">
                <CurriculumDownloadButton
                  courseCode={course.code}
                  label="Download Curriculum"
                />
                <a
                  href="tel:+919549543898"
                  className="min-h-[48px] text-center px-6 py-3.5 bg-white text-[#071D3A] font-bold rounded-xl hover:bg-slate-100 active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Phone className="h-4 w-4" />
                  +91 954 954 3898
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* ------------------------ Small sub-components ------------------------ */

function Stat({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-white/[0.06] border border-white/10 rounded-xl px-4 py-3 backdrop-blur-sm">
      <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold text-slate-300">
        <Icon className="h-3.5 w-3.5 text-emerald-300" />
        {label}
      </div>
      <div className="mt-1 text-sm sm:text-base font-bold text-white leading-snug">
        {value}
      </div>
    </div>
  );
}

function StrategicCard({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: typeof Target;
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-lg transition-all duration-300">
      <div
        className="h-10 w-10 rounded-xl flex items-center justify-center text-white shrink-0 mb-4"
        style={{ backgroundColor: accent }}
      >
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-bold text-[#071D3A] mb-3">{title}</h3>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
            <span
              className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
              style={{ backgroundColor: accent }}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8 sm:mb-10">
        <span
          className="inline-flex items-center px-3.5 py-1 rounded-full text-xs uppercase tracking-widest font-bold"
          style={{
            backgroundColor: `${accent}18`,
            color: accent,
            border: `1px solid ${accent}30`,
          }}
        >
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-[#071D3A] mt-3 tracking-tight" dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {children}
    </section>
  );
}
