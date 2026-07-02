import type { MetadataRoute } from "next";

const SITE_URL = "https://avira-baesek.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // עמודי נגן של לקוחות + קבצי הפלייליסטים — פרטיים, לא לאינדוקס
      disallow: ["/play/", "/playlists/"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
