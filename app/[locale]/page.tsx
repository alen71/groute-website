import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
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
    path: "",
    title: t("homeTitle"),
    description: t("homeDescription"),
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Hero");

  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center">
      <h1 className="max-w-3xl text-balance text-5xl font-semibold tracking-tight sm:text-6xl">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-2xl text-balance text-lg text-zinc-600 dark:text-zinc-400">
        {t("subtitle")}
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          {t("ctaPrimary")}
        </Link>
        <Link
          href="/features"
          className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-sm font-medium transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
        >
          {t("ctaSecondary")}
        </Link>
      </div>
    </section>
  );
}
