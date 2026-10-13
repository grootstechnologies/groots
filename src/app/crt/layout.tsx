import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Campus Recruitment Training (CRT) for Colleges",
  description:
    "Campus Recruitment Training for colleges in Hyderabad & Bengaluru — aptitude, communication & placement prep. 40–120 hour programs.",
  alternates: { canonical: "/crt/" },
  openGraph: {
    type: "website",
    title: `Campus Recruitment Training (CRT) — ${SITE_NAME}`,
    description:
      "CRT for engineering and degree colleges across Hyderabad and Bengaluru. Communication, aptitude, verbal ability, and placement prep.",
    url: "/crt/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `CRT — ${SITE_NAME}`,
    description:
      "Campus Recruitment Training for engineering and degree colleges across Hyderabad and Bengaluru.",
    images: [TWITTER_IMAGE],
  },
};

export default function CRTLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "CRT", url: `${SITE_URL}/crt/` },
        ]}
      />
      {children}
    </>
  );
}
