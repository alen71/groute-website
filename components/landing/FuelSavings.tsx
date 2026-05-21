import { Fragment } from "react";
import { getTranslations } from "next-intl/server";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";
import { FuelCalculator } from "./FuelCalculator";

const FORMULA_KEYS = ["formulaA", "formulaB", "formulaC", "formulaD"] as const;

type Card = {
  icon: "gauge" | "trendDown" | "chart" | "fuel";
  title: string;
  body: string;
  metric: string;
};

export async function FuelSavings() {
  const t = await getTranslations("FuelSavings");
  const cards = t.raw("cards") as Card[];

  return (
    <section id="fuel" className="py-24">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[720px] text-center">
          <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">
            {t("titleA")}
            <br />
            {t("titleB")}
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr]">
          <FuelCalculator />

          <div className="grid gap-4">
            {cards.map((c, i) => (
              <article
                key={c.icon}
                className={cn(
                  "border-border bg-background hover:border-primary-edge relative flex items-start gap-4 rounded-2xl border p-6 transition-colors",
                  i === 0 && "from-background to-primary-tint bg-linear-to-br",
                )}
              >
                <span className="bg-primary/10 text-primary-strong flex size-12 shrink-0 items-center justify-center rounded-xl">
                  <Icon name={c.icon} size={22} />
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-foreground text-[18px] font-semibold tracking-tight">
                      {c.title}
                    </h3>
                    <span className="bg-primary/10 text-primary-strong shrink-0 rounded-md px-2 py-0.5 text-[12px] font-semibold">
                      {c.metric}
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 text-[14.5px] leading-[1.6]">
                    {c.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-border bg-muted text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 rounded-2xl border border-dashed px-6 py-5 text-[13.5px]">
          {FORMULA_KEYS.map((key, i) => (
            <Fragment key={key}>
              {i > 0 && <span className="text-muted-2">×</span>}
              <span className="text-foreground font-mono font-medium">
                {t(key)}
              </span>
            </Fragment>
          ))}
          <span className="text-muted-2">→</span>
          <span className="bg-primary/10 text-primary-strong inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 font-mono font-semibold">
            <Icon name="trendDown" size={13} />
            {t("formulaResult")}
          </span>
        </div>
      </div>
    </section>
  );
}
