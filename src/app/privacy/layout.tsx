import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Greenroots Training & Placements collects, uses and protects your data on grootstechnologies.com. DPDP Act, 2023 compliant.",
  alternates: { canonical: "/privacy/" },
  openGraph: {
    type: "website",
    title: `Privacy Policy — ${SITE_NAME}`,
    description:
      "Privacy Policy for Greenroots Training & Placements. DPDP Act, 2023 compliant.",
    url: "/privacy/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `Privacy Policy — ${SITE_NAME}`,
    description:
      "Privacy Policy for Greenroots Training & Placements. DPDP Act, 2023 compliant.",
    images: [TWITTER_IMAGE],
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Privacy Policy", url: `${SITE_URL}/privacy/` },
        ]}
      />
      {children}
    </>
  );
}
