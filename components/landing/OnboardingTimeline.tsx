import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

const days = [
  {
    dur: "30 min",
    side: "left" as const,
    title: "Ugovor potpisan",
    items: [
      "Naručujemo Teltonika uređaje",
      "Otvaramo WhatsApp/Viber kanal",
      "Zakazujemo uvodni poziv",
    ],
  },
  {
    dur: "45 min",
    side: "right" as const,
    title: "Uvodni poziv",
    items: [
      "Popis flote — vozila i brojevi šasije",
      "Tip uređaja po vozilu",
      "Zone praćenja i upozorenja",
    ],
  },
  {
    dur: "2 dana",
    side: "left" as const,
    title: "Dolazak uređaja",
    items: ["Uređaji stižu na adresu", "Dogovaramo termin ugradnje", "Pripremamo platformu"],
  },
  {
    dur: "3h / vozilo",
    side: "right" as const,
    title: "Ugradnja u vozila",
    items: ["Provjera GPS-a po vozilu", "Povezivanje tahografa", "Provjera prenosa podataka"],
  },
  {
    dur: "45 min",
    side: "left" as const,
    title: "Sve radi",
    featured: true,
    items: [
      "Obuka za vaš tim",
      "30 min obuke + 15 min pitanja",
      "Sistem u punoj upotrebi",
    ],
  },
];

export function OnboardingTimeline() {
  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="mb-16 grid items-end gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>Putokaz pokretanja</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(32px,4.4vw,54px)] font-semibold leading-none tracking-[-0.03em]">
              Spremni za rad
              <br />
              za 5 dana.
            </h2>
          </div>
          <p className="max-w-[380px] justify-self-start text-[15px] leading-[1.6] text-muted-foreground md:justify-self-end">
            Od potpisa do operative — bez čekanja na uređaje sedmicama, bez konzultantskih
            projekata. Ako prelazi 8 dana, eskalira u prioritet.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1080px]">
          <div
            aria-hidden
            className="absolute left-[27px] top-6 bottom-6 w-px bg-border md:left-1/2 md:-translate-x-px"
          />
          {days.map((d, i) => (
            <div
              key={d.title}
              className={cn(
                "relative grid items-center py-4 md:grid-cols-[1fr_64px_1fr]",
                "grid-cols-[54px_1fr] gap-5 md:gap-0",
              )}
            >
              <div
                className={cn(
                  "rounded-2xl border p-6 transition-all md:max-w-[380px]",
                  d.featured
                    ? "border-secondary-3 bg-gradient-to-b from-secondary-2 to-secondary-3 text-white"
                    : "border-border bg-background hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.18)]",
                  d.side === "left"
                    ? "md:col-start-1 md:justify-self-end md:text-left col-start-2"
                    : "md:col-start-3 md:justify-self-start col-start-2",
                )}
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h3
                    className={cn(
                      "text-[22px] font-semibold tracking-tight",
                      d.featured ? "text-white" : "text-foreground",
                    )}
                  >
                    {d.title}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full border px-2.5 py-1 text-[11.5px] font-semibold whitespace-nowrap",
                      d.featured
                        ? "border-white/18 bg-white/[0.08] text-white"
                        : "border-border bg-muted text-foreground",
                    )}
                  >
                    {d.dur}
                  </span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {d.items.map((it) => (
                    <li
                      key={it}
                      className={cn(
                        "flex items-center gap-2.5 text-sm",
                        d.featured ? "text-[#D6DEEC]" : "text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-5 shrink-0 items-center justify-center rounded-full border",
                          d.featured
                            ? "border-[#9DB7F2] text-[#9DB7F2]"
                            : "border-foreground text-foreground",
                        )}
                      >
                        <Icon name="check" size={11} strokeWidth={2.4} />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={cn(
                  "relative z-10 flex size-[54px] items-center justify-center self-center rounded-full border border-border bg-background text-lg font-semibold tracking-tight text-foreground",
                  "row-start-1 col-start-1 md:col-start-2 md:row-start-auto md:justify-self-center",
                )}
              >
                {i + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
