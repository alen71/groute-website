import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";

export function ForWho() {
  return (
    <section id="zasto" className="py-24">
      <div className="container-page">
        <div className="mb-14 max-w-[640px]">
          <Eyebrow>Za koga je Groute</Eyebrow>
          <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
            Za svaku flotu.
            <br />
            Od pet do petsto vozila.
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground">
            Radimo sa malim porodičnim prevoznicima jednako kao i sa logističkim centrima i
            autobuskim kompanijama. Platforma se prilagođava broju vozila — ne obrnuto.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:grid-rows-2">
          <article className="relative flex min-h-[520px] items-end overflow-hidden rounded-2xl border border-border lg:row-span-2">
            <PhotoPlaceholder
              label="[ FOTO — Tegljač na međunarodnoj ruti ]"
              className="absolute inset-0 rounded-none"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-secondary-3/10 via-secondary-3/65 to-secondary-3/[0.92]"
            />
            <div className="relative w-full p-9 text-white">
              <div className="mb-3.5 font-mono text-sm font-semibold tracking-wide text-[#9DB7F2]">
                01
              </div>
              <Badge variant="glass">Najčešći klijenti</Badge>
              <h3 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-tight text-white">
                Transportni operateri
              </h3>
              <p className="mt-3 max-w-[480px] text-[15.5px] leading-[1.55] text-[#D6DEEC]">
                Kamioni i tegljači, domaća i međunarodna distribucija. Fokus na tahograf
                compliance, optimizaciju goriva i smanjenje praznih kilometara.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  { i: "doc" as const, t: "Tahograf na daljinu" },
                  { i: "route" as const, t: "Optimizacija ruta" },
                  { i: "chart" as const, t: "Trošak po km" },
                  { i: "shield" as const, t: "EU 561/2006" },
                ].map((x) => (
                  <span
                    key={x.t}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/14 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
                  >
                    <Icon name={x.i} size={13} className="text-white" />
                    {x.t}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-white/12 pt-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#A6B1CD]">
                  Ključni problemi
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  Tahograf, gorivo i prazni kilometri — riješeno na jednom mjestu.
                </div>
              </div>
            </div>
          </article>

          {[
            {
              num: "02",
              icon: "map" as const,
              title: "Logistički centri",
              body:
                "Mješovita flota i više terminala. Dispečer i operativni timovi koji koordiniraju dolaske, utovare i isporuke u realnom vremenu.",
              metaA: "Više terminala",
              metaB: "Realtime koordinacija",
            },
            {
              num: "03",
              icon: "truck" as const,
              title: "Autobuski prevoznici",
              body:
                "Linijski i turistički prevoz putnika kroz više zemalja. Praćenje vozila, vozača, kartica i sati vožnje po EU regulativi.",
              metaA: "Linijski + turistički",
              metaB: "EU regulativa",
            },
          ].map((c) => (
            <article
              key={c.num}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-[#D6E2FB] hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.15)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
                  {c.num}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl border border-[#D6E2FB] bg-gradient-to-b from-primary-soft to-[#DCE7FD] text-primary-strong">
                  <Icon name={c.icon} size={20} />
                </span>
              </div>
              <h3 className="mt-4 text-[20px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.55] text-muted-foreground">{c.body}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border-2 pt-4 text-[13px] text-muted-foreground">
                <span>{c.metaA}</span>
                <span className="font-semibold text-primary">{c.metaB}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
