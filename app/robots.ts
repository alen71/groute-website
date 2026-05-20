import type { MetadataRoute } from "next";

const SITE = process.env.SITE_URL ?? "https://www.mygroute.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
