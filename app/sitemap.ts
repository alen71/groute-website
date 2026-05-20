import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const SITE = process.env.SITE_URL ?? "https://www.mygroute.com";
const PATHS = ["", "/features", "/pricing", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.flatMap((path) =>
    routing.locales.map((locale) => {
      const languages: Record<string, string> = Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE}/${l}${path}`]),
      );
      languages["x-default"] = `${SITE}/${routing.defaultLocale}${path}`;
      return {
        url: `${SITE}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: path === "" ? 1 : 0.7,
        alternates: { languages },
      };
    }),
  );
}
