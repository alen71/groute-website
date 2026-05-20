import { Icon } from "./_shared";

export function PlatformBento() {
  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <h2 className="text-[clamp(30px,3.4vw,42px)] font-semibold tracking-tight">
            Snaga Groute platforme
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground">
            Svi alati za fleet manager-a — povezani u jednu komandnu tablu, bez prebacivanja
            između sistema.
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-background p-4.5 shadow-[0_24px_48px_-28px_rgba(16,27,49,0.12)]">
          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3 md:grid-rows-3">
            <article className="relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-muted p-6 md:col-start-1 md:row-start-1 md:row-span-2">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#6BA0FF] to-primary text-white shadow-[0_8px_16px_-8px_rgba(77,135,249,0.4)]">
                <Icon name="map" size={22} className="text-white" />
              </span>
              <h3 className="mt-4 text-[21px] font-semibold tracking-tight">
                GPS u realnom vremenu
              </h3>
              <p className="mt-2.5 max-w-[280px] text-sm leading-[1.6] text-muted-foreground">
                Pozicija svakog vozila ažurirana ispod 30 sekundi. Geofence zone, alarmi na
                ulazak/izlazak, kompletna istorija ruta po vozaču i vozilu.
              </p>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-[13px] font-medium text-foreground shadow-[0_1px_2px_rgba(16,27,49,0.04)]">
                  <Icon name="route" size={13} />
                  Geofence zone
                </span>
              </div>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-border bg-muted p-6 md:col-start-2 md:row-start-1">
              <h3 className="text-[18px] font-semibold tracking-tight">Platforma na 4 jezika</h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-muted-foreground">
                Interfejs, dokumentacija i podrška na srpskom, bosanskom, engleskom i
                njemačkom.
              </p>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-border bg-muted p-6 md:col-start-2 md:row-start-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight">Ušteda na gorivu</h3>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Pilot rezultat 30 dana po vozilu
                  </div>
                </div>
                <span className="text-[11.5px] font-semibold text-primary-strong">Pilot</span>
              </div>
              <div className="mt-auto pt-2 text-[64px] font-semibold leading-none tracking-[-0.035em] text-foreground">
                −6%
              </div>
            </article>

            <article className="relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-muted p-6 md:col-start-3 md:row-start-1 md:row-span-2">
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-10px] top-2.5 h-[60%] w-[60%] opacity-40 [mask-image:radial-gradient(circle_at_top_right,#000_30%,transparent_75%)] [background-image:radial-gradient(circle_at_1px_1px,rgba(77,135,249,0.35)_1px,transparent_0)] [background-size:14px_14px]"
              />
              <div className="relative text-[clamp(72px,9vw,110px)] font-bold leading-none tracking-[-0.04em] text-foreground">
                5×
              </div>
              <div className="relative mt-auto">
                <h3 className="text-[19px] font-semibold tracking-tight">Brža operativa</h3>
                <p className="mt-2 max-w-[240px] text-[13.5px] leading-[1.55] text-muted-foreground">
                  Pet puta brži administrativni rad u poređenju sa ručnim tahograf procesom i
                  Excel evidencijom.
                </p>
              </div>
            </article>

            <article className="relative flex flex-col gap-6 rounded-2xl border border-border bg-muted p-6 md:col-span-3 md:col-start-1 md:row-start-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3.5">
                <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-b from-secondary-2 to-secondary text-[#9DB7F2]">
                  <Icon name="bell" size={20} className="text-[#9DB7F2]" />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">Brzi alarmi</h3>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">
                    Notifikacije pred istek dokumenata i HOS prekršaja.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-lg border border-border bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground">
                  Kartice
                </span>
                <span className="text-muted-2">·</span>
                <span className="rounded-lg border border-border bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground">
                  Registracije
                </span>
                <span className="text-muted-2">·</span>
                <span className="rounded-lg border-transparent bg-gradient-to-b from-[#6BA0FF] to-primary px-3.5 py-1.5 text-[13px] font-medium text-white">
                  HOS
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
