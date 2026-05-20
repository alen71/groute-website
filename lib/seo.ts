import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

const SITE = process.env.SITE_URL ?? "https://www.mygroute.com";

export function siteUrl(locale: string, path = "") {
  return `${SITE}/${locale}${path}`;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  image = "/og-image.png",
}: {
  locale: string;
  path: string;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const canonical = siteUrl(locale, path);
  const languages: Record<string, string> = Object.fromEntries(
    routing.locales.map((l) => [l, siteUrl(l, path)]),
  );
  languages["x-default"] = siteUrl(routing.defaultLocale, path);

  return {
    metadataBase: new URL(SITE),
    title,
    description,
    alternates: { canonical, languages },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [image],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
