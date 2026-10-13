import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Become a Trainer — Teaching Careers",
  description:
    "Teach DevSecOps, Data Analytics, Data Science or CRT at Greenroots. Flexible hours, transparent payouts, full operational support. Apply today.",
  alternates: { canonical: "/become-a-trainer/" },
  openGraph: {
    type: "website",
    title: `Become a Trainer — ${SITE_NAME}`,
    description:
      "Teach DevSecOps, Data Analytics, Data Science, or CRT at Greenroots. Flexible hours, transparent payouts, full operational support.",
    url: "/become-a-trainer/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Become a Trainer — ${SITE_NAME}`,
    description:
      "Teach DevSecOps, Data Analytics, Data Science, or CRT at Greenroots. Flexible hours, transparent payouts.",
    images: [TWITTER_IMAGE],
  },
};

export default function BecomeATrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Become a Trainer", url: `${SITE_URL}/become-a-trainer/` },
        ]}
      />
      {children}
    </>
  );
}
