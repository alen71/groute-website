import { getTranslations } from "next-intl/server";
import { Icon } from "./_shared";

export async function PlatformBento() {
  const t = await getTranslations("Bento");
  return (
    <section className="bg-muted py-12 md:py-10">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-[680px] text-center">
          <h2>{t("title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[520px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-3">
            <article className="relative flex md:min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 md:col-start-1 md:row-start-1 md:row-span-2">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-b from-[#6BA0FF] to-primary text-white shadow-[0_8px_16px_-8px_rgba(77,135,249,0.4)]">
                <Icon name="map" size={22} className="text-white" />
              </span>
              <h3 className="mt-4 text-[21px] font-semibold tracking-tight">{t("gpsTitle")}</h3>
              <p className="mt-2.5 max-w-[280px] text-sm leading-[1.6] text-muted-foreground">
                {t("gpsBody")}
              </p>
              <div className="mt-auto pt-4">
                <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3.5 py-2 text-[13px] font-medium text-foreground shadow-[0_1px_2px_rgba(16,27,49,0.04)]">
                  <Icon name="route" size={13} />
                  {t("gpsTag")}
                </span>
              </div>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-border bg-background p-6 md:col-start-2 md:row-start-1">
              <h3 className="text-[18px] font-semibold tracking-tight">{t("langTitle")}</h3>
              <p className="mt-2 text-[13.5px] leading-[1.55] text-muted-foreground">
                {t("langBody")}
              </p>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-border bg-background p-6 md:col-start-2 md:row-start-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-[18px] font-semibold tracking-tight">{t("fuelTitle")}</h3>
                  <div className="mt-1 text-xs text-muted-foreground">{t("fuelNote")}</div>
                </div>
                <span className="text-[11.5px] font-semibold text-primary-strong">
                  {t("fuelTag")}
                </span>
              </div>
              <div className="mt-5 pt-2 text-[64px] font-semibold leading-none tracking-[-0.035em] text-foreground">
                {t("fuelStat")}
              </div>
            </article>

            <article className="relative flex md:min-h-[340px] flex-col overflow-hidden rounded-2xl border border-border bg-background p-6 md:col-start-3 md:row-start-1 md:row-span-2">
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-10px] top-2.5 h-[60%] w-[60%] opacity-40 [mask-image:radial-gradient(circle_at_top_right,#000_30%,transparent_75%)] [background-image:radial-gradient(circle_at_1px_1px,rgba(77,135,249,0.35)_1px,transparent_0)] [background-size:14px_14px]"
              />
              <div className="relative text-[clamp(72px,9vw,110px)] font-semibold leading-none tracking-[-0.04em] text-primary">
                {t("speedStat")}
              </div>
              <div className="relative mt-auto">
                <h3 className="text-[19px] font-semibold tracking-tight">{t("speedTitle")}</h3>
                <p className="mt-2 max-w-[240px] text-[13.5px] leading-[1.55] text-muted-foreground">
                  {t("speedBody")}
                </p>
              </div>
            </article>

            <article className="relative flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 md:col-span-3 md:col-start-1 md:row-start-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3.5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-secondary-2 to-secondary text-[#9DB7F2]">
                  <Icon name="bell" size={20} className="text-[#9DB7F2]" />
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight">{t("alertsTitle")}</h3>
                  <p className="mt-0.5 text-[13px] text-muted-foreground">{t("alertsBody")}</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="rounded-lg border border-border bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground">
                  {t("alertCards")}
                </span>
                <span className="text-muted-2 hidden md:inline">·</span>
                <span className="rounded-lg border border-border bg-background px-3.5 py-1.5 text-[13px] font-medium text-foreground">
                  {t("alertRegs")}
                </span>
                <span className="text-muted-2 hidden md:inline">·</span>
                <span className="rounded-lg border-transparent bg-gradient-to-b from-[#6BA0FF] to-primary px-3.5 py-1.5 text-[13px] font-medium text-white">
                  {t("alertHos")}
                </span>
              </div>
            </article>
        </div>
      </div>
    </section>
  );
}
