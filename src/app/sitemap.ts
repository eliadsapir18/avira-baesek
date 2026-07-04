import type { MetadataRoute } from "next";
import { INDUSTRIES } from "./industries";

const SITE_URL = "https://avira-baesek.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // עמודי ה-SEO פר סוג עסק — /cafe, /restaurant וכו'
    ...INDUSTRIES.map((i) => ({
      url: `${SITE_URL}/${i.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
