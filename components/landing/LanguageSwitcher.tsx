"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

type LangMeta = { locale: Locale; code: string; full: string; soon?: boolean };

const LANGS: LangMeta[] = [
  { locale: "en", code: "EN", full: "English" },
  { locale: "sr", code: "SR", full: "Srpski" },
  { locale: "bs", code: "BS", full: "Bosanski" },
  { locale: "de", code: "DE", full: "Deutsch" },
];

const SOON_SUFFIX = " — uskoro";

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
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocMouse(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocMouse);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocMouse);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(next: Locale) {
    setOpen(false);
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  const current = LANGS.find((l) => l.locale === locale) ?? LANGS[0];

  const list = (
    <ul className="flex flex-col gap-0.5">
      {LANGS.map((lang) => {
        const active = lang.locale === locale;
        const soon = lang.soon === true;
        return (
          <li key={lang.locale}>
            <button
              type="button"
              role="menuitemradio"
              aria-checked={active}
              onClick={() => pick(lang.locale)}
              disabled={soon || pending}
              className={cn(
                "flex w-full items-center justify-between gap-6 rounded-xl px-3.5 py-2.5 text-left transition-colors",
                active && "bg-muted",
                !active && !soon && "hover:bg-muted",
                soon && "cursor-not-allowed opacity-70",
              )}
            >
              <span className="flex items-center gap-2.5">
                {active && (
                  <span className="bg-primary size-1.5 rounded-full" />
                )}
                <span
                  className={cn(
                    "text-foreground text-[14.5px]",
                    active ? "font-semibold" : "font-medium",
                  )}
                >
                  {lang.full}
                </span>
              </span>
              <span className="text-muted-foreground text-[12px] font-medium tracking-[0.04em]">
                {lang.code}
                {soon ? SOON_SUFFIX : ""}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );

  if (!compact) {
    return (
      <div
        className={cn(
          "border-border bg-background rounded-2xl border p-2",
          className,
        )}
      >
        {list}
      </div>
    );
  }

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        disabled={pending}
        className={cn(
          "border-border bg-background text-foreground inline-flex h-9 items-center gap-2 rounded-full border px-2.5 text-[13px] font-semibold transition-colors",
          "focus-visible:ring-ring/25 hover:border-[#D6E2FB] focus-visible:ring-2 focus-visible:outline-none",
          open && "bg-muted border-[#D6E2FB]",
        )}
      >
        <span className="bg-primary size-1.5 rounded-full" />
        <span className="tracking-[0.04em]">{current.code}</span>
        <svg
          aria-hidden
          viewBox="0 0 10 6"
          className={cn(
            "text-muted-foreground size-2.5 transition-transform",
            open && "rotate-180",
          )}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m1 1 4 4 4-4" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="border-border bg-background absolute top-full right-0 z-50 mt-2 w-[240px] rounded-2xl border p-2 shadow-[0_24px_48px_-20px_rgba(16,27,49,0.18)]"
        >
          {list}
        </div>
      )}
    </div>
  );
}
