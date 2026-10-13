import type { Metadata } from "next";

/**
 * JsonLd.tsx — Structured data components for Greenroots.
 *
 * All components read from the SITE_* constants defined in `src/lib/site.ts`
 * so that name, address, geo, phone, etc. stay in sync everywhere they appear.
 *
 * Components exported:
 *   - OrganizationJsonLd
 *   - LocalBusinessJsonLd
 *   - WebsiteJsonLd
 *   - WebPageSpeakableJsonLd   (AEO: speakable + webpage entity)
 *   - BreadcrumbJsonLd
 *   - CourseJsonLd
 *   - FaqJsonLd
 *   - ReviewsJsonLd
 *   - PersonJsonLd
 *   - ServiceJsonLd
 *
 * Each component renders a `<script type="application/ld+json">` block. Because
 * Next.js hoists <script> tags with a `type` other than the default to the
 * <head> automatically, these appear in the page head as raw JSON.
 */

import {
  SITE_URL,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_PHONE_DISPLAY,
  EMAIL_HYDERABAD,
  EMAIL_BENGALURU,
  HYDERABAD_OFFICE,
  BENGALURU_OFFICE,
} from "@/lib/site";

const ORG_SAME_AS = [
  "https://www.linkedin.com/company/grootstechnologies/",
  "https://www.instagram.com/grootstechnologies/",
  "https://youtube.com/@greenroots_techtalks",
  "https://grootstechnologies.com",
];

const ORG_KNOWS_ABOUT = [
  "DevSecOps training",
  "Data Analytics training",
  "Data Science training",
  "Power BI training",
  "Campus Recruitment Training",
  "Career counselling",
  "Placement support",
  "Software Testing training",
];

const AREA_SERVED = [
  "Hyderabad",
  "Kukatpally",
  "KPHB",
  "Madhapur",
  "Gachibowli",
  "Hitech City",
  "Bengaluru",
  "Bangalore",
  "HSR Layout",
  "Koramangala",
  "BTM Layout",
  "Electronic City",
  "Whitefield",
  "Indiranagar",
  "Marathahalli",
];

const HYDERABAD_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: HYDERABAD_OFFICE.streetAddress,
  addressLocality: HYDERABAD_OFFICE.addressLocality,
  addressRegion: HYDERABAD_OFFICE.addressRegion,
  postalCode: HYDERABAD_OFFICE.postalCode,
  addressCountry: HYDERABAD_OFFICE.addressCountry,
};

const HYDERABAD_GEO = {
  "@type": "GeoCoordinates",
  latitude: HYDERABAD_OFFICE.geo.latitude,
  longitude: HYDERABAD_OFFICE.geo.longitude,
};

const BENGALURU_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: BENGALURU_OFFICE.streetAddress,
  addressLocality: BENGALURU_OFFICE.addressLocality,
  addressRegion: BENGALURU_OFFICE.addressRegion,
  postalCode: BENGALURU_OFFICE.postalCode,
  addressCountry: BENGALURU_OFFICE.addressCountry,
};

const BENGALURU_GEO = {
  "@type": "GeoCoordinates",
  latitude: BENGALURU_OFFICE.geo.latitude,
  longitude: BENGALURU_OFFICE.geo.longitude,
};

/**
 * Shared contact points — used by BOTH the Organization and the
 * EducationalOrganization (LocalBusiness) entities. The audit flagged the
 * LocalBusiness entity for having no contactPoint; sharing one definition
 * keeps NAP data identical across entities.
 */
const CONTACT_POINTS = [
  {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: SITE_PHONE_DISPLAY,
    email: EMAIL_HYDERABAD,
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi", "Kannada"],
  },
  {
    "@type": "ContactPoint",
    contactType: "admissions",
    telephone: SITE_PHONE_DISPLAY,
    email: EMAIL_HYDERABAD,
    areaServed: ["Hyderabad", "Telangana"],
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  {
    "@type": "ContactPoint",
    contactType: "admissions",
    telephone: SITE_PHONE_DISPLAY,
    email: EMAIL_BENGALURU,
    areaServed: ["Bengaluru", "Bangalore", "Karnataka"],
    availableLanguage: ["English", "Kannada", "Hindi"],
  },
];

/**
 * Convert a human duration ("3 months", "10 weeks", "90 hours", "60 days")
 * into an ISO-8601 duration for schema.org courseWorkload.
 */
function toIsoDuration(d: string): string | undefined {
  const s = d.toLowerCase();
  const months = s.match(/(\d+)\s*month/);
  const weeks = s.match(/(\d+)\s*week/);
  const days = s.match(/(\d+)\s*day/);
  const hours = s.match(/(\d+)\s*hour/);
  if (months || weeks || days) {
    let out = "P";
    if (months) out += `${months[1]}M`;
    if (weeks) out += `${weeks[1]}W`;
    if (days) out += `${days[1]}D`;
    return out;
  }
  if (hours) return `PT${hours[1]}H`;
  return undefined;
}

/**
 * Generic JSON-LD script helper — converts an object to a script tag.
 */
function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Dangerously set — this is structured data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ------------------------- Organization -------------------------- */
export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: SITE_NAME,
    alternateName: "Greenroots Technologies",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/groots-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    description: `${SITE_NAME} — ${SITE_TAGLINE}. Job-ready technology training in DevSecOps, Data Analytics, and Data Science with placement support in Hyderabad and Bengaluru.`,
    slogan: SITE_TAGLINE,
    email: EMAIL_HYDERABAD,
    telephone: SITE_PHONE_DISPLAY,
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Rushi Naik",
      },
    ],
    address: [HYDERABAD_ADDRESS, BENGALURU_ADDRESS],
    geo: [HYDERABAD_GEO, BENGALURU_GEO],
    contactPoint: CONTACT_POINTS,
    sameAs: ORG_SAME_AS,
    knowsAbout: ORG_KNOWS_ABOUT,
  };
  return <JsonLdScript data={data} />;
}

/* ----------------------- LocalBusiness -------------------------- */
export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}#localbusiness`,
    name: SITE_NAME,
    alternateName: "Greenroots Training Institute",
    url: SITE_URL,
    logo: `${SITE_URL}/logos/groots-logo.png`,
    image: `${SITE_URL}/og-image.png`,
    telephone: SITE_PHONE_DISPLAY,
    email: EMAIL_HYDERABAD,
    description: `${SITE_NAME} — ${SITE_TAGLINE}. Job-ready DevSecOps, Data Analytics, and Data Science training in Hyderabad and Bengaluru with placement support.`,
    priceRange: "₹₹",
    slogan: SITE_TAGLINE,
    // Both campuses as first-class addresses (NAP consistency for AEO/GEO).
    address: [HYDERABAD_ADDRESS, BENGALURU_ADDRESS],
    geo: [HYDERABAD_GEO, BENGALURU_GEO],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    contactPoint: CONTACT_POINTS,
    department: [
      {
        "@type": "EducationalOrganization",
        name: "Greenroots Hyderabad Campus",
        description:
          "Greenroots training campus in Kukatpally, Hyderabad — DevSecOps, Data Analytics, and Data Science labs with mock interview studios.",
        telephone: SITE_PHONE_DISPLAY,
        email: EMAIL_HYDERABAD,
        address: HYDERABAD_ADDRESS,
        geo: HYDERABAD_GEO,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
      {
        "@type": "EducationalOrganization",
        name: "Greenroots Bengaluru Office",
        description:
          "Greenroots office in HSR Layout, Bengaluru — in-person career audits, mentor sessions, and placement drives.",
        telephone: SITE_PHONE_DISPLAY,
        email: EMAIL_BENGALURU,
        address: BENGALURU_ADDRESS,
        geo: BENGALURU_GEO,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "247",
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: ORG_SAME_AS,
  };
  return <JsonLdScript data={data} />;
}

/* ------------------------- Website ------------------------------ */
export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: SITE_NAME,
    alternateName: "Greenroots",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    publisher: { "@id": `${SITE_URL}#organization` },
    inLanguage: "en-IN",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/courses/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
  return <JsonLdScript data={data} />;
}

/* -------------------- WebPage + Speakable (AEO) ------------------- */
/**
 * WebPageSpeakableJsonLd — Answer-Engine-Optimization block for the home page.
 *
 * Declares the page as a WebPage about the organisation, marks the sections
 * voice assistants / AI answer engines should read aloud or quote, and links
 * the page entity back to the Organization + LocalBusiness entities so the
 * brand, phone, emails, and both office addresses resolve as one knowledge
 * entity.
 */
export function WebPageSpeakableJsonLd({
  name,
  description,
  url = `${SITE_URL}/`,
  speakableSelectors = ["#hero-headline", "#hero-subheadline", "#quick-answers"],
}: {
  name: string;
  description: string;
  url?: string;
  speakableSelectors?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: { "@id": `${SITE_URL}#organization` },
    primaryImageOfPage: `${SITE_URL}/og-image.png`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: speakableSelectors,
    },
  };
  return <JsonLdScript data={data} />;
}

/* ------------------------- Breadcrumb -------------------------- */
export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return <JsonLdScript data={data} />;
}

/* --------------------------- Course ---------------------------- */
/**
 * CourseJsonLd — Course entity per schema.org + Google's Course rich-result
 * requirements. The audit flagged missing hasCourseInstance and offers, both
 * now supplied: a Blended CourseInstance (live online + in-person mentor
 * sessions at both campuses) and an Offer reflecting the site-wide "from
 * ₹20,000" pricing shown on /courses/.
 */
export function CourseJsonLd({
  name,
  description,
  slug,
  provider = SITE_NAME,
  courseCode,
  duration,
}: {
  name: string;
  description: string;
  slug: string;
  provider?: string;
  courseCode?: string;
  duration?: string;
}) {
  const url = `${SITE_URL}${slug}`;
  const workload = duration ? toIsoDuration(duration) : undefined;
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url,
    ...(courseCode ? { courseCode } : {}),
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: [SITE_URL],
    },
    inLanguage: "en-IN",
    offers: {
      "@type": "Offer",
      category: "Paid",
      url,
      priceCurrency: "INR",
      priceSpecification: {
        "@type": "CompoundPriceSpecification",
        minPrice: 20000,
        priceCurrency: "INR",
        valueAddedTaxIncluded: true,
      },
      availability: "https://schema.org/InStock",
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Blended",
        ...(workload ? { courseWorkload: workload } : {}),
        location: [
          {
            "@type": "Place",
            name: "Greenroots Hyderabad Campus",
            address: HYDERABAD_ADDRESS,
          },
          {
            "@type": "Place",
            name: "Greenroots Bengaluru Office",
            address: BENGALURU_ADDRESS,
          },
        ],
      },
    ],
  };
  return <JsonLdScript data={data} />;
}

/* ----------------------------- FAQ ----------------------------- */
/**
 * FaqJsonLd — FAQPage entity. `at` namespaces the @id per page (home vs each
 * course) so the same FAQPage entity ID is never reused across different URLs.
 */
export function FaqJsonLd({
  faqs,
  at = "/",
}: {
  faqs: { q: string; a: string }[];
  at?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}${at}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return <JsonLdScript data={data} />;
}

/* ---------------------------- Reviews -------------------------- */
export function ReviewsJsonLd({
  reviews,
  aggregate,
}: {
  reviews: { name: string; rating: number; body: string; date?: string }[];
  aggregate?: { ratingValue: string; reviewCount: string };
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE_NAME} — Job-Ready Tech Training`,
    description: `${SITE_TAGLINE}. Real student placements in DevSecOps, Data Analytics, and Data Science across Hyderabad and Bengaluru.`,
    /* Google Product snippets require at least one image. */
    image: [`${SITE_URL}/og-image.png`],
    brand: { "@type": "Brand", name: SITE_NAME },
    url: `${SITE_URL}/reviews/`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate?.ratingValue ?? "4.8",
      reviewCount: aggregate?.reviewCount ?? "247",
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.body,
      ...(r.date ? { datePublished: r.date } : {}),
    })),
  };
  return <JsonLdScript data={data} />;
}

/* ----------------------------- Person -------------------------- */
export function PersonJsonLd({
  name,
  jobTitle,
  description,
  slug,
  image,
  sameAs,
}: {
  name: string;
  jobTitle: string;
  description: string;
  slug: string;
  image?: string;
  sameAs?: string[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
    jobTitle,
    description,
    url: `${SITE_URL}${slug}`,
    worksFor: { "@id": `${SITE_URL}#organization` },
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    ...(sameAs ? { sameAs } : {}),
  };
  return <JsonLdScript data={data} />;
}

/* ---------------------------- Service -------------------------- */
export function ServiceJsonLd({
  name,
  description,
  slug,
  provider = SITE_NAME,
}: {
  name: string;
  description: string;
  slug: string;
  provider?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${slug}`,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: SITE_URL,
    },
    areaServed: AREA_SERVED.map((n) => ({ "@type": "City", name: n })),
    serviceType: "Technology training",
  };
  return <JsonLdScript data={data} />;
}

/* Re-export metadata type for convenience in layout files. */
export type { Metadata };
