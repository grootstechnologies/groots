/**
 * seo.ts — shared metadata constants used by every route's metadata export.
 *
 * Next.js replaces (not merges) a child route's `openGraph` / `twitter` with
 * the child's own object, which previously dropped the root layout's OG image
 * on 9/10 pages. Every page-level metadata now pulls OG_IMAGE / TWITTER_IMAGE
 * from here so social + AI crawlers always get a preview image.
 */

export const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Greenroots Training & Placements — Education to Employment",
} as const;

export const TWITTER_IMAGE = "/og-image.png" as const;
