"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Icon, Logo } from "./_shared";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Nav() {
  const t = useTranslations("Nav");
  const [open, setOpen] = useState(false);

  const links = [
    { label: t("platforma"), href: "#platforma" },
    { label: t("funkcije"), href: "#funkcije" },
    { label: t("uredjaji"), href: "#uredjaji" },
    { label: t("faq"), href: "#faq" },
  ];

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 960 && open) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="border-border sticky top-0 z-50 border-b bg-white/85 backdrop-blur-lg backdrop-saturate-150">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center">
          <Logo height={22} />
        </a>
        <nav className="text-foreground/85 hidden items-center gap-8 text-sm font-medium lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-primary transition-colors hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Button variant="primary" size="sm" asChild>
            <a href="#kontakt">{t("cta")}</a>
          </Button>
        </div>
        <button
          type="button"
          aria-label={t("openMenu")}
          onClick={() => setOpen((v) => !v)}
          className="border-border bg-background flex size-10 items-center justify-center rounded-lg border lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
      </div>
      {open && (
        <div className="border-border bg-background border-t px-6 pt-3 pb-6 lg:hidden">
          <div className="pb-3">
            <LanguageSwitcher compact={false} />
          </div>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-border-2 text-foreground block border-b py-3.5 text-base font-medium"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="primary"
            size="lg"
            className="mt-5 w-full"
            asChild
            onClick={() => setOpen(false)}
          >
            <a href="#kontakt">{t("cta")}</a>
          </Button>
        </div>
      )}
    </header>
  );
}
