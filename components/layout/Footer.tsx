import { getTranslations } from "next-intl/server";

export async function Footer() {
  const t = await getTranslations("Footer");
  const site = await getTranslations("Site");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 dark:border-zinc-800/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {year} {site("name")}. {t("rights")}
        </p>
        <a href="mailto:office@mygroute.com" className="hover:text-zinc-700 dark:hover:text-zinc-300">
          office@mygroute.com
        </a>
      </div>
    </footer>
  );
}
