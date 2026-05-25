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
            <p className="text-muted-foreground mt-4 text-[17px] leading-relaxed">
              Razgovaramo direktno sa vlasnicima i fleet managerima. Ako vam
              treba referenca u vašem regionu, povezujemo vas.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <div className="flex">
              {["MĐ", "AH", "SP", "DK"].map((ini, i) => (
                <span
                  key={ini}
                  className="border-background flex size-[42px] items-center justify-center rounded-full border-[3px] bg-gradient-to-br from-[#C9D6F0] to-[#94A8D3] text-[13px] font-semibold text-white shadow-[0_2px_6px_rgba(16,27,49,0.12)]"
                  style={{ marginLeft: i === 0 ? 0 : -10 }}
                >
                  {ini}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon
                    key={i}
                    name="star"
                    size={13}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>
              <div className="text-muted-foreground mt-0.5 text-[12.5px]">
                <span className="text-foreground font-semibold">4.9 / 5</span> ·
                4 flote · 244 vozila
              </div>
            </div>
          </div>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_1fr]">
          <article className="border-border relative flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white to-[#F6F9FF] p-9 pb-7 shadow-[0_24px_48px_-28px_rgba(16,27,49,0.18)]">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-muted-foreground text-[13px] font-semibold tracking-[0.18em]">
                {featured.company}
              </span>
              <span className="text-muted-2 text-xs">{featured.date}</span>
            </div>
            <div className="mb-4 flex gap-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon
                  key={i}
                  name="star"
                  size={16}
                  className="fill-[#F59E0B] text-[#F59E0B]"
                />
              ))}
            </div>
            <p className="text-foreground max-w-[540px] text-[clamp(22px,2.2vw,28px)] leading-[1.4] font-medium tracking-tight">
              "{featured.quote}"
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-6 pt-7">
              <div className="flex items-center gap-3.5">
                <span className="from-primary-strong to-secondary-2 flex size-[52px] items-center justify-center rounded-full bg-gradient-to-br text-base font-semibold text-white">
                  {featured.initials}
                </span>
                <div>
                  <div className="text-foreground text-[15px] font-semibold">
                    {featured.name}
                  </div>
                  <div className="text-muted-foreground mt-0.5 text-[13px]">
                    {featured.role} · {featured.fleet}
                  </div>
                </div>
              </div>
              <div className="border-border bg-background flex items-center gap-3.5 rounded-lg border px-4 py-3">
                <div className="text-primary text-[22px] font-semibold tracking-tight">
                  {featured.stat.value}
                </div>
                <div className="text-muted-foreground max-w-[140px] text-[11.5px] leading-[1.35]">
                  {featured.stat.label}
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-4">
            {others.map((t) => (
              <article
                key={t.name}
                className="border-border bg-background flex flex-col gap-3.5 rounded-2xl border p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-[10.5px] font-semibold tracking-[0.18em]">
                    {t.company}
                  </span>
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Icon
                        key={i}
                        name="star"
                        size={11}
                        className="fill-[#F59E0B] text-[#F59E0B]"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-foreground text-[14.5px] leading-[1.55]">
                  "{t.quote}"
                </p>
                <div className="border-border-2 mt-auto flex items-center gap-3 border-t pt-3.5">
                  <span className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-[#C9D6F0] to-[#94A8D3] text-xs font-semibold text-white">
                    {t.initials}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="text-foreground text-[13.5px] font-semibold">
                      {t.name}
                    </div>
                    <div className="text-muted-foreground mt-0.5 text-[11.5px]">
                      {t.role}
                    </div>
                  </div>
                  <span className="text-muted-2 text-[11px]">{t.fleet}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
