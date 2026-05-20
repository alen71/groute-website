import { Eyebrow, Icon } from "./_shared";

const featured = {
  quote:
    "Tahograf skidamo jednim klikom umjesto da vozimo kamione u depo. Samo tri vožnje manje mjesečno — već se vidi razlika u troškovima.",
  name: "Marko Đurić",
  role: "Vlasnik · Transport MD",
  fleet: "42 vozila",
  company: "TRANSPORT MD",
  date: "April 2026",
  stat: { value: "−14%", label: "Trošak po ruti za 30 dana" },
  initials: "MĐ",
};

const others = [
  {
    quote:
      "Alerti za istek kartice vozača su nam ugasili tri kazne u prvom mjesecu. Bez iznenađenja.",
    name: "Amela Hodžić",
    role: "Fleet Manager · Sarajevo Logistik",
    fleet: "28 vozila",
    company: "SARAJEVO LOGISTIK",
    date: "Mart 2026",
    initials: "AH",
  },
  {
    quote:
      "Implementacija je trajala 4 dana. Podrška stiže na WhatsApp kad treba. Ovako mora B2B alat.",
    name: "Stefan Pavlović",
    role: "COO · Balkan Cargo",
    fleet: "110 vozila",
    company: "BALKAN CARGO",
    date: "Februar 2026",
    initials: "SP",
  },
  {
    quote:
      "Platforma je očigledno pisana sa ljudima iz transporta. Sva pravila po EU 561 su tačno gdje treba.",
    name: "Dragan Kostić",
    role: "Direktor · Kostić Trans",
    fleet: "64 vozila",
    company: "KOSTIĆ TRANS",
    date: "Januar 2026",
    initials: "DK",
  },
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[520px]">
            <Eyebrow>Riječ flota</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
              Operativci koji koriste Groute
              <br />
              svaki dan.
            </h2>
            <p className="mt-4 text-[17px] leading-relaxed text-muted-foreground">
              Razgovaramo direktno sa vlasnicima i fleet managerima. Ako vam treba referenca u
              vašem regionu, povezujemo vas.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <div className="flex">
              {["MĐ", "AH", "SP", "DK"].map((ini, i) => (
                <span
                  key={ini}
                  className="flex size-[42px] items-center justify-center rounded-full border-[3px] border-background bg-gradient-to-br from-[#C9D6F0] to-[#94A8D3] text-[13px] font-semibold text-white shadow-[0_2px_6px_rgba(16,27,49,0.12)]"
                  style={{ marginLeft: i === 0 ? 0 : -10 }}
                >
                  {ini}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <div className="mt-0.5 text-[12.5px] text-muted-foreground">
                <span className="font-semibold text-foreground">4.9 / 5</span> · 4 flote · 244 vozila
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_1fr]">
          <article className="relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-white to-[#F6F9FF] p-9 pb-7 shadow-[0_24px_48px_-28px_rgba(16,27,49,0.18)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-[13px] font-semibold tracking-[0.18em] text-muted-foreground">
                {featured.company}
              </span>
              <span className="text-xs text-muted-2">{featured.date}</span>
            </div>
            <div className="mb-4 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon key={i} name="star" size={16} className="text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <p className="max-w-[540px] text-[clamp(22px,2.2vw,28px)] font-medium leading-[1.4] tracking-tight text-foreground">
              "{featured.quote}"
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-6 pt-7">
              <div className="flex items-center gap-3.5">
                <span className="flex size-[52px] items-center justify-center rounded-full bg-gradient-to-br from-primary-strong to-secondary-2 text-base font-semibold text-white">
                  {featured.initials}
                </span>
                <div>
                  <div className="text-[15px] font-semibold text-foreground">
                    {featured.name}
                  </div>
                  <div className="mt-0.5 text-[13px] text-muted-foreground">
                    {featured.role} · {featured.fleet}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3.5 rounded-lg border border-border bg-background px-4 py-3">
                <div className="text-[22px] font-semibold tracking-tight text-primary">
                  {featured.stat.value}
                </div>
                <div className="max-w-[140px] text-[11.5px] leading-[1.35] text-muted-foreground">
                  {featured.stat.label}
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-4">
            {others.map((t) => (
              <article
                key={t.name}
                className="flex flex-col gap-3.5 rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10.5px] font-semibold tracking-[0.18em] text-muted-foreground">
                    {t.company}
                  </span>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="star"
                        size={11}
                        className="text-[#F59E0B] fill-[#F59E0B]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-[14.5px] leading-[1.55] text-foreground">"{t.quote}"</p>
                <div className="mt-auto flex items-center gap-3 border-t border-border-2 pt-3.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#C9D6F0] to-[#94A8D3] text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-[13.5px] font-semibold text-foreground">{t.name}</div>
                    <div className="mt-0.5 text-[11.5px] text-muted-foreground">{t.role}</div>
                  </div>
                  <span className="text-[11px] text-muted-2">{t.fleet}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
