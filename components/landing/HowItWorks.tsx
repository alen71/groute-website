import { getTranslations } from "next-intl/server";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";
import { cn } from "@/lib/utils";

type Step = {
  num: string;
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  image: string;
};

export async function HowItWorks() {
  const t = await getTranslations("HowItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">{t("title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed">
            {t("subtitle")}
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
