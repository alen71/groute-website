"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "./_shared";

const items = [
  {
    q: "Koliko košta Groute?",
    a: "Cijenu ne objavljujemo na sajtu — zavisi od veličine flote i izabranog paketa. Pošaljite upit, vraćamo personalizovanu ponudu u 24 sata.",
  },
  {
    q: "Koliko traje implementacija?",
    a: "Cilj je pun onboarding ispod 5 radnih dana. Ugradnja po vozilu traje oko 3 sata — naši podizvođači rade na terenu u BiH i Srbiji.",
  },
  {
    q: "Šta ako tokom pilota nismo zadovoljni?",
    a: "Vraćamo €100 depozit po uređaju u potpunosti, bez pitanja. Pilot je 30 dana, do 2 vozila, sa besplatnom instalacijom.",
  },
  {
    q: "Da li radite sa malim flotama?",
    a: "Naš sweet spot je 10–500 vozila. Ispod 10 vozila ne radimo, osim ako postoji jasna strateška vrijednost — javite se, razgovaraćemo.",
  },
  {
    q: "Koje hardvere koristite?",
    a: "Teltonika FMC650 (teška vozila), FMC150 (laka vozila) i FMC234 (prikolice). Uređaji se kupuju jednokratno i ostaju vlasništvo klijenta.",
  },
  {
    q: "Da li ste GDPR usklađeni?",
    a: "Da. Groute je data processor po GDPR-u. Klijent je vlasnik svojih podataka i može ih eksportovati u svakom trenutku.",
  },
  {
    q: "Koje jezike platforma podržava?",
    a: "Interfejs i podrška na srpskom, bosanskom, engleskom i njemačkom. Ugovori i dokumentacija u jeziku koji odaberete.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[700px] text-center">
          <Eyebrow className="justify-center">Često postavljana pitanja</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
            Pitanja koja čujemo svaki dan.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground">
            Ako ne nađete odgovor, pišite — javljamo se istog dana.
          </p>
        </div>

        <div className="mx-auto max-w-[880px]">
          <Accordion type="single" collapsible defaultValue="item-0" className="border-t border-border">
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
