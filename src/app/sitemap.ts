import type { MetadataRoute } from "next";
import { SITE_URL } from "@/app/layout";

export const dynamic = "force-static";

const ROUTES: { url: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified?: string }[] = [
  { url: "/", priority: 1.0, changeFrequency: "weekly" },
  { url: "/courses/", priority: 0.9, changeFrequency: "weekly" },
  { url: "/courses/devops/", priority: 0.85, changeFrequency: "monthly" },
  { url: "/courses/data-analytics/", priority: 0.85, changeFrequency: "monthly" },
  { url: "/courses/data-science/", priority: 0.85, changeFrequency: "monthly" },
  { url: "/reviews/", priority: 0.75, changeFrequency: "weekly" },
  { url: "/crt/", priority: 0.75, changeFrequency: "monthly" },
  { url: "/contact/", priority: 0.65, changeFrequency: "monthly" },
  { url: "/become-a-trainer/", priority: 0.55, changeFrequency: "monthly" },
  { url: "/privacy/", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
