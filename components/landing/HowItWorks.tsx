import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";
import { cn } from "@/lib/utils";

type Step = {
  num: string;
  tag: "Starter" | "Professional";
  title: string;
  body: string;
  bullets: string[];
  accent: string;
  image: string;
};

export async function HowItWorks() {
  const t = await getTranslations("HowItWorks");
  const steps = t.raw("steps") as Step[];

  return (
    <section id="funkcije" className="bg-muted py-24">
      <div className="container-page">
        <div className="mx-auto mb-16 max-w-[680px] text-center">
          <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">{t("title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="bg-background">
              <span className="bg-primary size-1.5 rounded-full" />
              {t("starter")}
            </Badge>
            <Badge variant="dark">
              <span className="size-1.5 rounded-full bg-[#9DB7F2]" />
              {t("professional")}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {steps.map((s, i) => {
            const reverse = i % 2 === 1;
            const isPro = s.tag === "Professional";
            return (
              <div
                key={s.num}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16",
                  reverse && "lg:[&>*:first-child]:order-2",
                )}
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3.5">
                    <span className="from-secondary-2 to-secondary flex size-[54px] items-center justify-center rounded-full bg-gradient-to-b text-[18px] font-semibold tracking-tight text-white shadow-[0_10px_22px_-10px_rgba(16,27,49,0.5)]">
                      {s.num}
                    </span>
                    <Badge variant={isPro ? "dark" : "outline"}>{s.tag}</Badge>
                    {s.accent && (
                      <span className="text-primary-strong font-mono text-[11px] tracking-wide">
                        {s.accent}
                      </span>
                    )}
                  </div>
                  <h2 className="text-[34px] leading-[1.15] font-semibold tracking-tight">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground mt-3.5 max-w-[480px] text-[17px] leading-relaxed">
                    {s.body}
                  </p>
                  <ul className="mt-5">
                    {s.bullets.map((b, bi) => (
                      <li
                        key={b}
                        className={cn(
                          "border-border text-foreground flex items-start gap-3 border-b py-3 text-sm",
                          bi === 0 && "border-t",
                        )}
                      >
                        <span className="bg-primary/12 text-primary mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full">
                          <Icon name="check" size={12} strokeWidth={2.5} />
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PhotoPlaceholder
                  label={s.image}
                  className="min-h-[440px] rounded-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
