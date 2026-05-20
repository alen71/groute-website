"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Icon, Logo } from "./_shared";

const links = [
  { label: "Platforma", href: "#platforma" },
  { label: "Funkcije", href: "#funkcije" },
  { label: "Uređaji", href: "#uredjaji" },
  { label: "Resursi", href: "#resursi" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth > 960 && open) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/85 backdrop-blur-lg backdrop-saturate-150">
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <a href="#top" className="flex items-center">
          <Logo height={22} />
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/85 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition-colors hover:text-primary hover:opacity-100"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <Button variant="primary" size="sm" asChild>
            <a href="#kontakt">Kontaktirajte nas</a>
          </Button>
        </div>
        <button
          type="button"
          aria-label="Otvori meni"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg border border-border bg-background lg:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={18} />
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-border-2 py-3.5 text-base font-medium text-foreground"
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
            <a href="#kontakt">Kontaktirajte nas</a>
          </Button>
        </div>
      )}
    </header>
  );
}
