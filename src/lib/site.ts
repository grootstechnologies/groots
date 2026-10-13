/**
 * site.ts — Central site constants for Greenroots.
 *
 * Single source of truth for SEO, JSON-LD, contact chips, and structured data.
 * Imported by layout.tsx, the JsonLd components, and any page that needs the
 * canonical name, address, geo, phone, or email.
 *
 * Contact policy (updated):
 *   - ONE official phone number is used across the whole website:
 *     +91 954 954 3898 (9549543898).
 *   - Each office has its own email:
 *       Hyderabad (HQ)  → admin@g-roots.in
 *       Bengaluru       → adminblr@g-roots.in
 */

export const SITE_URL = "https://grootstechnologies.com";
export const SITE_NAME = "Greenroots Training & Placements";
export const SITE_TAGLINE = "Education to Employment";

/* ------------------------- Official phone ------------------------- */
export const SITE_PHONE_DISPLAY = "+91 954 954 3898";
export const SITE_PHONE_TEL = "tel:+919549543898";
export const SITE_PHONE = SITE_PHONE_DISPLAY; // backward-compatible alias
export const SITE_WHATSAPP_URL =
  "https://wa.me/919549543898?text=Hi%20Greenroots!%20I%27d%20like%20to%20know%20more%20about%20your%20training%20programs.";

/* --------------------------- Emails ------------------------------- */
export const EMAIL_HYDERABAD = "admin@g-roots.in";
export const EMAIL_BENGALURU = "adminblr@g-roots.in";
/** General / primary site email (Hyderabad HQ). */
export const SITE_EMAIL = EMAIL_HYDERABAD;

/* ----------------------- Office definitions ----------------------- */
export const HYDERABAD_OFFICE = {
  id: "hyderabad",
  label: "Hyderabad Headquarters",
  city: "Hyderabad",
  streetAddress:
    "Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  postalCode: "500072",
  addressCountry: "IN",
  fullAddress:
    "Unit 206, Manjeera Majestic Commercial, Opposite JNTU, Next to Lulu Mall, Kukatpally, Hyderabad, Telangana 500072",
  phone: SITE_PHONE_DISPLAY,
  phoneHref: SITE_PHONE_TEL,
  email: EMAIL_HYDERABAD,
  geo: { latitude: 17.4484, longitude: 78.3912 },
} as const;

export const BENGALURU_OFFICE = {
  id: "bengaluru",
  label: "Bengaluru Office",
  city: "Bengaluru",
  streetAddress: "2nd floor, 804, 27th Main Rd, 1st Sector, HSR Layout",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560102",
  addressCountry: "IN",
  fullAddress:
    "2nd floor, 804, 27th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
  phone: SITE_PHONE_DISPLAY,
  phoneHref: SITE_PHONE_TEL,
  email: EMAIL_BENGALURU,
  geo: { latitude: 12.9116, longitude: 77.6473 },
} as const;

export const OFFICES = [HYDERABAD_OFFICE, BENGALURU_OFFICE] as const;

/* ------------------- Backward-compatible aliases ------------------- */
/** Primary structured-data address (Hyderabad HQ). */
export const SITE_ADDRESS = {
  streetAddress: HYDERABAD_OFFICE.streetAddress,
  addressLocality: HYDERABAD_OFFICE.addressLocality,
  addressRegion: HYDERABAD_OFFICE.addressRegion,
  postalCode: HYDERABAD_OFFICE.postalCode,
  addressCountry: HYDERABAD_OFFICE.addressCountry,
};

export const SITE_GEO = {
  latitude: HYDERABAD_OFFICE.geo.latitude,
  longitude: HYDERABAD_OFFICE.geo.longitude,
};

/** Bengaluru address (used by sections that specifically reference the BLR office). */
export const BENGALURU_ADDRESS = {
  streetAddress: BENGALURU_OFFICE.streetAddress,
  addressLocality: BENGALURU_OFFICE.addressLocality,
  addressRegion: BENGALURU_OFFICE.addressRegion,
  postalCode: BENGALURU_OFFICE.postalCode,
  addressCountry: BENGALURU_OFFICE.addressCountry,
};

export const BENGALURU_GEO = {
  latitude: BENGALURU_OFFICE.geo.latitude,
  longitude: BENGALURU_OFFICE.geo.longitude,
};
