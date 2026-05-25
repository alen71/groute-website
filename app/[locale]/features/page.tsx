import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  return buildMetadata({
    locale,
    path: "/features",
    title: t("featuresTitle"),
    description: t("featuresDescription"),
  });
}

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Nav");

  return (
    <section className="container-page py-24">
      <h1 className="text-4xl font-semibold tracking-tight">{t("funkcije")}</h1>
      <p className="text-muted-foreground mt-4">Coming soon.</p>
    </section>
  );
}
