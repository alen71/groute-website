import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";
import { cn } from "@/lib/utils";

const steps = [
  {
    num: "01",
    tag: "Pregled flote",
    title: "Vidite svako vozilo uživo.",
    body:
      "GPS pozicija, status motora i potrošnja goriva ažurirani ispod 30 sekundi. Vozilo, vozač i trenutna ruta u istom prozoru.",
    bullets: [
      "GPS update ispod 30 sekundi",
      "Vozila, vozači i rute u jednoj tabli",
      "Offline-tolerantna sinhronizacija",
    ],
    image: "[ FOTO — Dispečer ispred Groute kontrolne table ]",
  },
  {
    num: "02",
    tag: "Tahograf modul",
    title: "Skinete tahograf bez odlaska u depo.",
    body:
      "Automatski raspored skidanja DDD fajlova po vozilu. HOS pravila po EU 561/2006 monitor se uživo, izvještaji za inspekciju u jednom kliku.",
    bullets: [
      "Daljinsko DDD skidanje po rasporedu",
      "Live HOS monitoring i alerti",
      "Inspekcijski izvještaji jednim klikom",
    ],
    image: "[ FOTO — Tahograf uređaj u kabini kamiona ]",
  },
  {
    num: "03",
    tag: "Rute i dokumenti",
    title: "Sve papire držite na jednom mjestu.",
    body:
      "CMR, polise, licence i vozačke kartice u centralnom skladištu — povezani sa vozilima i rutama. Alarmi prije nego što dokument istekne.",
    bullets: [
      "Skladište dokumenata sa pristupom po ulozi",
      "Alarmi pred istek kartica i registracija",
      "Audit log sa potpisom i datumom",
    ],
    image: "[ FOTO — Vozač sa tablet uređajem / dokumentima ]",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <Eyebrow className="justify-center">Kako Groute radi</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
            Tri modula. Jedan sistem.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed text-muted-foreground">
            Sve što vaša flota traži, povezano u istom prozoru — bez prebacivanja podataka.
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {steps.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.num}
                className={cn(
                  "grid items-center gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr]",
                  reverse && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <div className="mb-4 inline-flex items-center gap-3.5">
                    <span className="flex size-[54px] items-center justify-center rounded-full bg-gradient-to-b from-secondary-2 to-secondary text-[18px] font-semibold tracking-tight text-white shadow-[0_10px_22px_-10px_rgba(16,27,49,0.5)]">
                      {s.num}
                    </span>
                    <Eyebrow>{s.tag}</Eyebrow>
                  </div>
                  <h2 className="text-[34px] font-semibold leading-[1.15] tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-3.5 max-w-[480px] text-[17px] leading-relaxed text-muted-foreground">
                    {s.body}
                  </p>
                  <ul className="mt-5">
                    {s.bullets.map((b, bi) => (
                      <li
                        key={b}
                        className={cn(
                          "flex items-start gap-3 border-b border-border py-3 text-sm text-foreground",
                          bi === 0 && "border-t",
                        )}
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                          <Icon name="check" size={12} strokeWidth={2.5} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PhotoPlaceholder label={s.image} className="min-h-[440px] rounded-2xl" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
