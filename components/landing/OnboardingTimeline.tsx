import { getTranslations } from "next-intl/server";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

type Day = { dur: string; title: string; items: string[] };

export async function OnboardingTimeline() {
  const t = await getTranslations("Onboarding");
  const days = t.raw("days") as Day[];

  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="mb-16 grid grid-cols-[60fr_40fr] items-end gap-8 md:grid-cols-2">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(32px,4.8vw,50px)] leading-none tracking-[-0.03em]">
              {t("titleA")} {t("titleB")}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-[380px] justify-self-start text-[15px] leading-[1.6] md:justify-self-end">
            {t("subtitle")}
          </p>
        </div>

        <div className="relative mx-auto max-w-[1080px]">
          <div
            aria-hidden
            className="bg-border absolute top-6 bottom-6 left-[27px] w-px md:left-1/2 md:-translate-x-px"
          />
          {days.map((d, i) => {
            const isFeatured = i === days.length - 1;
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <div
                key={d.title}
                className="relative grid grid-cols-[54px_1fr] items-center gap-5 py-4 md:grid-cols-[1fr_64px_1fr] md:gap-0"
              >
                <div
                  className={cn(
                    "rounded-2xl border p-6 transition-all md:w-full md:max-w-[440px]",
                    isFeatured
                      ? "border-secondary-3 from-secondary-2 to-secondary-3 bg-gradient-to-b text-white"
                      : "border-border bg-background hover:-translate-y-0.5 hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.18)]",
                    side === "left"
                      ? "col-start-2 md:col-start-1 md:justify-self-end md:text-left"
                      : "col-start-2 md:col-start-3 md:justify-self-start",
                  )}
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <h3
                      className={cn(
                        "text-[22px] font-semibold tracking-tight",
                        isFeatured ? "text-white" : "text-foreground",
                      )}
                    >
                      {d.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[11.5px] font-semibold whitespace-nowrap",
                        isFeatured
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
                          isFeatured ? "text-[#D6DEEC]" : "text-foreground",
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-5 shrink-0 items-center justify-center rounded-full border",
                            isFeatured
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

                <div className="border-border bg-background text-foreground relative z-10 col-start-1 row-start-1 flex size-[54px] items-center justify-center self-center rounded-full border text-lg font-semibold tracking-tight md:col-start-2 md:row-start-auto md:justify-self-center">
                  {i + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
