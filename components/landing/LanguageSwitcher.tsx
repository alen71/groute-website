"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = {
  en: "EN",
  bs: "BS",
  sr: "SR",
  de: "DE",
};

const FULL: Record<Locale, string> = {
  en: "English",
  bs: "Bosanski",
  sr: "Srpski",
  de: "Deutsch",
};

export function LanguageSwitcher({
  compact = true,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const next = e.target.value as Locale;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <label className={cn("relative inline-flex items-center", className)}>
      <span className="sr-only">Jezik</span>
      <select
        value={locale}
        onChange={onChange}
        disabled={pending}
        className={cn(
          "appearance-none rounded-lg border border-border bg-background pl-3 pr-8 text-[13px] font-medium text-foreground transition-colors focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25",
          compact ? "h-9" : "h-11 w-full",
        )}
      >
        {routing.locales.map((l) => (
          <option key={l} value={l}>
            {compact ? LABELS[l] : FULL[l]}
          </option>
        ))}
      </select>
      <svg
        aria-hidden
        viewBox="0 0 10 6"
        className="pointer-events-none absolute right-2.5 size-2.5 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m1 1 4 4 4-4" />
      </svg>
    </label>
  );
}
