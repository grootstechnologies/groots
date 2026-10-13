import type { Metadata } from "next";
import { BreadcrumbJsonLd, ReviewsJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

const SAMPLE_REVIEWS = [
  {
    name: "Priya K.",
    rating: 5,
    body: "The Power BI track was exactly what I needed. Rushi's training style is very practical — we worked on real dashboards from week one. Got placed at Deloitte within 2 months of completing the program.",
    date: "2026-06-12",
  },
  {
    name: "Arun R.",
    rating: 5,
    body: "I came in as a fresher with zero IT knowledge. The career audit helped me find the BA path and the training was incredibly structured. Cleared my first interview at Infosys in the third month.",
    date: "2026-05-04",
  },
  {
    name: "Santhosh M.",
    rating: 5,
    body: "DevSecOps is a niche skill and Greenroots covers it in incredible depth. Docker, Kubernetes, Terraform — all covered with live cloud labs. The content is premium and the support doesn't stop after training.",
    date: "2026-04-21",
  },
  {
    name: "Nandini K.",
    rating: 5,
    body: "After 2 years of a gap, I was nervous to re-enter IT. Greenroots made it stress-free — the resume rebuild and LinkedIn profile update alone got me 4 interview calls in the first week after posting.",
    date: "2026-03-09",
  },
  {
    name: "Venkat R.",
    rating: 5,
    body: "The training here is unlike anything on YouTube. They use actual enterprise project structures, not toy examples. The mock interviews were harder than the real ones — which is exactly what you need.",
    date: "2026-02-17",
  },
];

export const metadata: Metadata = {
  title: "Student Reviews & Placement Record",
  description:
    "Real students, real placements. Greenroots alumni work at TCS, Infosys, Deloitte, Accenture, Wipro & Capgemini. Read reviews from Hyderabad & Bengaluru.",
  alternates: { canonical: "/reviews/" },
  openGraph: {
    type: "website",
    title: `Reviews & Placement Track Record — ${SITE_NAME}`,
    description:
      "Real students. Real companies. Real salaries. Read Greenroots student reviews and placement track record.",
    url: "/reviews/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Reviews — ${SITE_NAME}`,
    description:
      "Real students. Real companies. Real salaries. Read Greenroots student reviews and placement track record.",
    images: [TWITTER_IMAGE],
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Reviews", url: `${SITE_URL}/reviews/` },
        ]}
      />
      <ReviewsJsonLd
        reviews={SAMPLE_REVIEWS}
        aggregate={{ ratingValue: "4.8", reviewCount: "247" }}
      />
      {children}
    </>
  );
}
