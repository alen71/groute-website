import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function Header() {
  const t = await getTranslations("Nav");
  const site = await getTranslations("Site");

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          {site("name")}
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link href="/features" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("features")}
          </Link>
          <Link href="/pricing" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("pricing")}
          </Link>
          <Link href="/contact" className="hover:text-zinc-600 dark:hover:text-zinc-300">
            {t("contact")}
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden h-9 items-center rounded-full bg-zinc-900 px-4 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300 sm:inline-flex"
          >
            {t("requestDemo")}
          </Link>
        </div>
      </div>
    </header>
  );
}
