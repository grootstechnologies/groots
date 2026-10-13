import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

/**
 * /courses/ route metadata.
 *
 * CRITICAL (audit finding): courses/page.tsx is a client component, so it
 * cannot export metadata. Without this layout the route inherited the root
 * layout's canonical "/" — telling search engines the courses hub *is* the
 * homepage. This layout supplies the correct title, description, canonical
 * URL, and social preview images.
 */
export const metadata: Metadata = {
  title: "Tech Courses — DevSecOps, Analytics & AI",
  description:
    "Job-ready tech courses at Greenroots — DevSecOps, Data Analytics and Data Science & AI. Live + recorded, placement support. From ₹20,000.",
  alternates: { canonical: "/courses/" },
  openGraph: {
    type: "website",
    title: `Tech Courses — DevSecOps, Analytics & AI | ${SITE_NAME}`,
    description:
      "DevSecOps, Data Analytics and Data Science & AI programs with placement support. Hyderabad campus & Bengaluru office. From ₹20,000.",
    url: "/courses/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tech Courses — ${SITE_NAME}`,
    description:
      "DevSecOps, Data Analytics and Data Science & AI programs with placement support. From ₹20,000.",
    images: [TWITTER_IMAGE],
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Courses", url: `${SITE_URL}/courses/` },
        ]}
      />
      {children}
    </>
  );
}
