import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";

export function Hardware() {
  return (
    <section id="uredjaji" className="relative py-24">
      <div className="container-page">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow>Hardver</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
            Teltonika FMC650.
            <br />
            <span className="text-primary">Provjeren uređaj za vašu flotu.</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-[17px] leading-relaxed text-muted-foreground">
            Mali uređaj koji se ugrađuje u kamion i sve podatke iz vozila šalje pravo u Groute
            tablu. Vi vidite gdje su vozila, koliko troše i je li sve u redu — bez odlaska u
            depo i bez papira.
          </p>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-[1.05fr_1fr]">
          <PhotoPlaceholder
            label="[ FOTO — Teltonika FMC650 uređaj ]"
            className="relative min-h-[460px] rounded-2xl border border-border bg-gradient-to-br from-[#F5F8FD] to-[#E9EFF8]"
          >
          </PhotoPlaceholder>
          <div className="absolute pointer-events-none" />

          <div className="flex flex-col rounded-2xl border border-border bg-background p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary-strong">
                Šta vi dobijate
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>

            <div className="flex flex-col">
              {[
                {
                  title: "Stalan signal, gdje god kamion ide",
                  body:
                    "Uređaj se sam povezuje na najjaču dostupnu mrežu. Nema praznih tačaka na karti, ni u udaljenim ruralnim dionicama.",
                },
                {
                  title: "Tahograf i podaci iz vozila — automatski",
                  body:
                    "Tahograf fajlovi, brzina, gorivo i pređeni kilometri šalju se direktno u Groute tablu. Nema ručnog prepisivanja u Excel.",
                },
                {
                  title: "Otporan na uslove rada",
                  body:
                    "Izrađen za vibracije, prašinu, kišu i ekstremne temperature kabine. Bez kvarova nakon prvog ljeta ili zime.",
                },
                {
                  title: "Vozila vidite tačno gdje jesu",
                  body:
                    "Precizna pozicija na cijeloj ruti od Balkana do EU — i kad vozilo pređe granicu i kad uđe u tunel.",
                },
              ].map((row, i) => (
                <div
                  key={row.title}
                  className={
                    i === 0
                      ? "py-4 pt-0"
                      : "border-t border-border-2 py-4"
                  }
                >
                  <h3 className="text-[17px] font-semibold tracking-tight">{row.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.55] text-muted-foreground">
                    {row.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-start gap-3.5 rounded-lg border border-border bg-muted px-4 py-3.5">
              <Icon name="check" size={18} className="text-success" strokeWidth={2.3} />
              <div>
                <div className="text-[13.5px] font-medium text-foreground">
                  Uređaj se kupuje jednokratno i ostaje vaše vlasništvo.
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  Inicijalni data plan dolazi sa uređajem — dopune financira Groute.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
