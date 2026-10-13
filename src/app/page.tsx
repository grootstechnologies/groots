import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StudentsHired } from "@/components/sections/StudentsHired";
import { Locations } from "@/components/sections/Locations";
import { Programs } from "@/components/sections/Programs";
import { Founders } from "@/components/sections/Founders";
import { Testimonials } from "@/components/sections/Testimonials";
import { CampusLife } from "@/components/sections/CampusLife";
import { Results } from "@/components/sections/Results";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { QuickAnswers } from "@/components/sections/QuickAnswers";
import {
  FaqJsonLd,
  BreadcrumbJsonLd,
  WebPageSpeakableJsonLd,
} from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME, SITE_TAGLINE } from "@/app/layout";

export const metadata: Metadata = {
  /* absolute — the home page must not get the "%s · Greenroots" template. */
  title: {
    absolute: "Greenroots — Job-Ready Tech Courses in Hyderabad & Bengaluru",
  },
  description:
    "Job-ready DevSecOps, Data Analytics & Data Science courses with placement support. Hyderabad (Kukatpally) & Bengaluru (HSR Layout). Call +91 954 954 3898.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Job-ready DevSecOps, Data Analytics, and Data Science training in Hyderabad and Bengaluru with placement support. Book a free career audit today.",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — ${SITE_TAGLINE}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Job-ready DevSecOps, Data Analytics, and Data Science training in Hyderabad and Bengaluru with placement support.",
    images: ["/og-image.png"],
  },
};

const STUDENT_FAQS = [
  {
    q: "What courses does Greenroots offer in 2026?",
    a: "Three focused, industry-aligned tracks: DevSecOps Mastery Track (3 months, cloud + security), Data Analytics for Freshers (10 weeks, Power BI + Python + SQL + Tableau), and Data Science & AI (3 months, ML + deep learning + NLP + deployment). All three are live + recorded, with placement support in both Hyderabad and Bengaluru.",
  },
  {
    q: "Where are Greenroots' campuses located?",
    a: "We have two offices. Our Hyderabad headquarters is at Unit 206, Manjeera Majestic Commercial, Opp. JNTU, Next to Lulu Mall, Kukatpally, Hyderabad 500072 (email: admin@g-roots.in), and our Bengaluru office is at 2nd floor, 804, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102 (email: adminblr@g-roots.in). Both are reachable on our official number +91 954 954 3898.",
  },
  {
    q: "Are these courses beginner-friendly or do I need prior experience?",
    a: "Data Analytics for Freshers is built for absolute beginners — no coding background required. DevSecOps and Data Science & AI are deeper tracks; DevSecOps assumes basic Linux + Git + one programming language, and Data Science & AI assumes solid Python and undergrad maths. Our free career audit will help you pick the right track.",
  },
  {
    q: "What is the placement track record?",
    a: "100% placement track record for students who complete the program, projects, and mock interviews. Median time to first offer is around 8–12 weeks after completion, with hiring partners including TCS, Infosys, Wipro, Deloitte, Accenture, Capgemini, and many Bengaluru startups.",
  },
  {
    q: "Do you offer EMI options?",
    a: "Yes — 2- and 3-month EMI options are available on all programs. Talk to our counsellor at +91 954 954 3898 for the current fee schedule and EMI plans.",
  },
  {
    q: "Can I attend from Bengaluru or Hyderabad?",
    a: "Yes. Classes are live online. You can attend in-person mentor sessions at our Hyderabad campus (Kukatpally) or our Bengaluru office (HSR Layout). Placement referrals run in both cities.",
  },
  {
    q: "What does the free career audit include?",
    a: "A 45-minute 1-on-1 session where we review your background, market demand, and salary potential for each track, then recommend the path with the strongest return. Available in person at our Hyderabad or Bengaluru offices, or over the phone.",
  },
  {
    q: "Do I get a certificate at the end?",
    a: "Yes — every track awards a Greenroots certificate on completion of all projects, the capstone, and a final mock panel review. We also help you prep for industry certifications like CKA, AWS SAA, and Microsoft PL-300.",
  },
  {
    q: "What if I miss a live class?",
    a: "Every session is recorded and uploaded within 24 hours. You keep access to the recordings, labs, and mentor channel for 12 months after graduation.",
  },
  {
    q: "Is CRT (Campus Recruitment Training) available?",
    a: "Yes. Greenroots partners with colleges across Hyderabad and Bengaluru to deliver CRT — covering communication, aptitude, verbal ability, and placement prep. Colleges can reach us at +91 954 954 3898 to start a partnership conversation.",
  },
  {
    q: "How do I get started?",
    a: "Book a free career audit by calling or WhatsApp-ing our official number +91 954 954 3898, emailing admin@g-roots.in (Hyderabad) or adminblr@g-roots.in (Bengaluru), or fill out the enquiry form on our Contact page. Our counsellor will get back to you within a few hours with a personalised program recommendation.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FaqJsonLd faqs={STUDENT_FAQS} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
        ]}
      />
      <WebPageSpeakableJsonLd
        name={`${SITE_NAME} — ${SITE_TAGLINE} | Job-Ready Tech Courses in Hyderabad & Bengaluru`}
        description="Greenroots Training & Placements offers job-ready DevSecOps, Data Analytics, and Data Science courses with placement support at our Hyderabad campus (Kukatpally) and Bengaluru office (HSR Layout). Official number: +91 954 954 3898."
      />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Hero />
        <LogoStrip />
        <StudentsHired />
        <Locations />
        <Programs />
        <Founders />
        <Testimonials />
        <CampusLife />
        <Results />
        <QuickAnswers faqs={STUDENT_FAQS} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
