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
          <article className="border-border bg-background relative flex flex-col overflow-hidden rounded-2xl border p-6 md:col-start-1 md:row-span-2 md:row-start-1 md:min-h-[340px]">
            <span className="from-primary-light to-primary flex size-11 items-center justify-center rounded-xl bg-gradient-to-b text-white shadow-[0_8px_16px_-8px_rgba(77,135,249,0.4)]">
              <Icon name="map" size={22} className="text-white" />
            </span>
            <h3 className="mt-4 text-[21px] font-semibold tracking-tight">
              {t("gpsTitle")}
            </h3>
            <p className="text-muted-foreground mt-2.5 max-w-[280px] text-sm leading-[1.6]">
              {t("gpsBody")}
            </p>
            <div className="mt-auto pt-4">
              <span className="border-border bg-background text-foreground inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-[13px] font-medium shadow-[0_1px_2px_rgba(16,27,49,0.04)]">
                <Icon name="route" size={13} />
                {t("gpsTag")}
              </span>
            </div>
          </article>

          <article className="border-border bg-background relative flex flex-col rounded-2xl border p-6 md:col-start-2 md:row-start-1">
            <h3 className="text-[18px] font-semibold tracking-tight">
              {t("langTitle")}
            </h3>
            <p className="text-muted-foreground mt-2 text-[13.5px] leading-[1.55]">
              {t("langBody")}
            </p>
          </article>

          <article className="border-border bg-background relative flex flex-col rounded-2xl border p-6 md:col-start-2 md:row-start-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-[18px] font-semibold tracking-tight">
                  {t("fuelTitle")}
                </h3>
                <div className="text-muted-foreground mt-1 text-xs">
                  {t("fuelNote")}
                </div>
              </div>
              <span className="text-primary-strong text-[11.5px] font-semibold">
                {t("fuelTag")}
              </span>
            </div>
            <div className="text-foreground mt-5 pt-2 text-[64px] leading-none font-semibold tracking-[-0.035em]">
              {t("fuelStat")}
            </div>
          </article>

          <article className="border-border bg-background relative flex flex-col overflow-hidden rounded-2xl border p-6 md:col-start-3 md:row-span-2 md:row-start-1 md:min-h-[340px]">
            <div
              aria-hidden
              className="pointer-events-none absolute top-2.5 right-[-10px] h-[60%] w-[60%] [background-image:radial-gradient(circle_at_1px_1px,rgba(77,135,249,0.35)_1px,transparent_0)] [mask-image:radial-gradient(circle_at_top_right,#000_30%,transparent_75%)] [background-size:14px_14px] opacity-40"
            />
            <div className="text-primary relative text-[clamp(72px,9vw,110px)] leading-none font-semibold tracking-[-0.04em]">
              {t("speedStat")}
            </div>
            <div className="relative mt-auto">
              <h3 className="text-[19px] font-semibold tracking-tight">
                {t("speedTitle")}
              </h3>
              <p className="text-muted-foreground mt-2 max-w-[240px] text-[13.5px] leading-[1.55]">
                {t("speedBody")}
              </p>
            </div>
          </article>

          <article className="border-border bg-background relative flex flex-col gap-4 rounded-2xl border p-6 md:col-span-3 md:col-start-1 md:row-start-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3.5">
              <span className="from-secondary-2 to-secondary text-primary-accent flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b">
                <Icon name="bell" size={20} className="text-primary-accent" />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight">
                  {t("alertsTitle")}
                </h3>
                <p className="text-muted-foreground mt-0.5 text-[13px]">
                  {t("alertsBody")}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="border-border bg-background text-foreground rounded-lg border px-3.5 py-1.5 text-[13px] font-medium">
                {t("alertCards")}
              </span>
              <span className="text-muted-2 hidden md:inline">·</span>
              <span className="border-border bg-background text-foreground rounded-lg border px-3.5 py-1.5 text-[13px] font-medium">
                {t("alertRegs")}
              </span>
              <span className="text-muted-2 hidden md:inline">·</span>
              <span className="from-primary-light to-primary rounded-lg border-transparent bg-gradient-to-b px-3.5 py-1.5 text-[13px] font-medium text-white">
                {t("alertHos")}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
