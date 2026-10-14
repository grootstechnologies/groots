import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import "./enhancements.css";
import { Toaster } from "@/components/ui/toaster";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd,
  WebsiteJsonLd,
} from "@/components/seo/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_PHONE,
  SITE_EMAIL,
  SITE_ADDRESS,
  SITE_GEO,
} from "@/lib/site";

/* Re-export the site constants for any callers that still import them from
   layout.tsx. The canonical definitions now live in src/lib/site.ts so the
   JsonLd components can import them without creating a circular dependency
   with this layout file. */
export {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_PHONE,
  SITE_EMAIL,
  SITE_ADDRESS,
  SITE_GEO,
};

/* ----------------------------- Fonts ------------------------------ */

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

/* ----------------------------- Metadata ----------------------------- */

const KEYWORDS = [
  // Brand
  "Greenroots",
  "Greenroots Training",
  "Greenroots Placements",
  "Greenroots Hyderabad",
  "Greenroots Bengaluru",
  "Greenroots Bangalore",
  // Courses
  "DevSecOps training Hyderabad",
  "DevSecOps training Bengaluru",
  "DevSecOps course Bangalore",
  "Data Analytics training Hyderabad",
  "Data Analytics course Bengaluru",
  "Data Science training Hyderabad",
  "Data Science course Bengaluru",
  "Data Science course Bangalore",
  "Power BI training Hyderabad",
  "Power BI training Bengaluru",
  // Local / location
  "tech training institute Hyderabad",
  "tech training institute Bengaluru",
  "IT training institute HSR Layout",
  "Kukatpally training institute",
  "HSR Layout training institute",
  // Outcomes
  "placement support training",
  "job-ready tech courses",
  "career audit",
  "CRT training",
  "campus recruitment training",
  "career counselling Bengaluru",
  "career counselling Hyderabad",
  // Course types
  "live online training",
  "classroom training Bengaluru",
  "Docker Kubernetes training",
  "Python data science",
  "SQL Power BI training",
];

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    /* ≤60 chars so Google doesn't truncate the SERP title. */
    default: "Greenroots — Job-Ready Tech Courses in Hyderabad & Bengaluru",
    template: "%s · Greenroots",
  },
  description:
    "Job-ready DevSecOps, Data Analytics & Data Science courses with placement support. Hyderabad (Kukatpally) & Bengaluru (HSR Layout). Call +91 954 954 3898.",
  keywords: KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: "Green Roots Technologies" }],
  creator: "Green Roots Technologies",
  publisher: "Green Roots Technologies",
  category: "Education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description:
      "Job-ready DevSecOps, Data Analytics, and Data Science training in Hyderabad and Bengaluru with placement support. Book a free career audit at our Kukatpally campus or HSR Layout office.",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "",
  },
  other: {
    "theme-color": "#071D3A",
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru, Karnataka; Hyderabad, Telangana",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png?v=3", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/logo.svg?v=3", type: "image/svg+xml" },
      { url: "/icon-512.png?v=3", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png?v=3", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#071D3A",
  width: "device-width",
  initialScale: 1,
};

/* ----------------------------- Layout ------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Preconnect for Google Fonts (loaded via next/font, but keep
            preconnect hints for any direct font fetches). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon stack — favicon.ico first, then png fallbacks. */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png?v=3" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png?v=3" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png?v=3" sizes="16x16" type="image/png" />
        <link rel="icon" href="/logo.svg?v=3" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        <link rel="icon" href="/icon-512.png?v=3" sizes="512x512" type="image/png" />
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1076535108538909');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1076535108538909&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-background text-foreground`}
      >
        {/* Site-wide structured data — Organization, LocalBusiness, Website */}
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        {children}
        <Toaster />
        <Script src="/enhancements.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
