import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: "map" as const,
    tag: "Starter" as const,
    title: "GPS u realnom vremenu",
    body:
      "Pozicija svakog vozila ažurirana ispod 30 sekundi, sa kompletnom istorijom ruta.",
    bullets: [
      "Ažuriranje ispod 30 sekundi",
      "Zone praćenja i upozorenja",
      "Istorija po vozilu i vozaču",
    ],
    accent: "Ažuriranje svakih 28s",
  },
  {
    icon: "doc" as const,
    tag: "Professional" as const,
    title: "Tahograf i DDD",
    body:
      "Daljinsko skidanje DDD fajlova po vašem rasporedu, analiza vremena vožnje i izvještaji za inspekciju.",
    bullets: [
      "Automatsko preuzimanje DDD-a",
      "Praćenje pravila vožnje EU 561/2006",
      "Izvještaji za inspekciju jednim klikom",
    ],
    accent: "EU 561/2006",
  },
  {
    icon: "shield" as const,
    tag: "Professional" as const,
    title: "Usklađenost i upozorenja",
    body:
      "Upozorenja pred istek kartica vozača, registracija, tehničkih pregleda i licenci.",
    bullets: [
      "Upozorenja 30 / 14 / 7 dana ranije",
      "Evidencija svih izmjena",
      "Ocjena po vozaču i ruti",
    ],
    accent: "Cilj — nula kazni",
  },
  {
    icon: "route" as const,
    tag: "Starter" as const,
    title: "Optimizacija ruta",
    body:
      "Predlog rute sa procjenom troška goriva, vremena vožnje i rokova vozačeve kartice.",
    bullets: [
      "Procjena troška prije polaska",
      "Pauze vozača automatski uračunate",
      "Optimizacija sa više stajališta",
    ],
    accent: "−8,3% praznih km",
  },
  {
    icon: "wrench" as const,
    tag: "Starter" as const,
    title: "Servis i održavanje",
    body:
      "Praćenje servisnih intervala po vozilu, podsjetnici prije rokova i evidencija troškova.",
    bullets: ["Intervali po vozilu", "Podsjetnici prije roka", "Trošak po vozilu i tipu"],
    accent: "Bez iznenadnih kvarova",
  },
  {
    icon: "chart" as const,
    tag: "Starter" as const,
    title: "Telematika vozila",
    body:
      "Potrošnja goriva, stil vožnje po vozaču i podaci sa vozila u jednoj tabli.",
    bullets: [
      "Čitanje podataka direktno iz vozila",
      "Ocjena vozača",
      "Trošak po kilometru i ruti",
    ],
    accent: "−6% goriva u pilotu",
  },
];

export function FunctionBadges() {
  return (
    <section id="funkcije" className="py-24">
      <div className="container-page">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <Eyebrow>Sve funkcije</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
              Šest modula. Jedna platforma.
            </h2>
            <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground">
              Starter pokriva GPS, rute, servis i telematiku. Professional dodaje cijeli
              tahograf stack i dokumente. Sve u istom prozoru, na 4 jezika.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Badge variant="outline" className="bg-white">
              <span className="size-1.5 rounded-full bg-primary" />
              Starter
            </Badge>
            <Badge variant="dark">
              <span className="size-1.5 rounded-full bg-[#9DB7F2]" />
              Professional
            </Badge>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const isPro = f.tag === "Professional";
            return (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 pb-6 transition-all hover:-translate-y-1 hover:border-[#D6E2FB] hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.18)]"
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity",
                    "group-hover:opacity-100",
                  )}
                />
                <div className="flex items-center justify-between gap-2.5">
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl",
                      isPro
                        ? "border border-secondary-3 bg-gradient-to-b from-[#1B3160] to-[#0F1B36] text-[#9DB7F2] shadow-[inset_0_-2px_0_rgba(0,0,0,0.2),0_6px_12px_-6px_rgba(16,27,49,0.4)]"
                        : "border border-[#D6E2FB] bg-gradient-to-b from-primary-soft to-[#DCE7FD] text-primary-strong shadow-[inset_0_-2px_0_rgba(77,135,249,0.08)]",
                    )}
                  >
                    <Icon name={f.icon} size={22} strokeWidth={1.7} />
                  </span>
                  <Badge variant={isPro ? "dark" : "outline"}>{f.tag}</Badge>
                </div>

                <h3 className="mt-4 text-[19px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-[1.55] text-muted-foreground">{f.body}</p>

                <ul className="mt-4 flex flex-col gap-2 border-t border-dashed border-border pt-4">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-foreground">
                      <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon name="check" size={10} strokeWidth={2.6} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-border-2 pt-3.5">
                  <span className="font-mono text-[11px] tracking-wide text-primary-strong">
                    {f.accent}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
