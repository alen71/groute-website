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
    path: "/pricing",
    title: t("pricingTitle"),
    description: t("pricingDescription"),
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <section className="container-page py-24">
      <h1 className="text-4xl font-semibold tracking-tight">—</h1>
      <p className="text-muted-foreground mt-4">Contact us for pricing.</p>
    </section>
  );
}
