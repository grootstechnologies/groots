import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact — Free Career Audit & Counselling",
  description:
    "Book a free career audit in Hyderabad (Kukatpally) or Bengaluru (HSR Layout). Call +91 954 954 3898 or email admin@g-roots.in — replies within hours.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    title: `Contact ${SITE_NAME} — Career Counselling in Hyderabad & Bengaluru`,
    description:
      "Book a free career audit at our Hyderabad campus or Bengaluru office. Call +91 954 954 3898 or send an enquiry.",
    url: "/contact/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${SITE_NAME}`,
    description:
      "Book a free career audit at our Hyderabad campus or Bengaluru office. Call +91 954 954 3898.",
    images: [TWITTER_IMAGE],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Contact", url: `${SITE_URL}/contact/` },
        ]}
      />
      {children}
    </>
  );
}
