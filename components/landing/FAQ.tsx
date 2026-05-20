"use client";

import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./_shared";

type Item = { q: string; a: string };

export function FAQ() {
  const t = useTranslations("Faq");
  const items = t.raw("items") as Item[];

  return (
    <section id="faq" className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[700px] text-center">
          <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">{t("title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="mx-auto max-w-[880px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="border-t border-border"
          >
            {items.map((it, i) => (
              <AccordionItem key={it.q} value={`item-${i}`}>
                <AccordionTrigger>{it.q}</AccordionTrigger>
                <AccordionContent>{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
