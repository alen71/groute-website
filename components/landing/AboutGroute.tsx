import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Eyebrow, PhotoPlaceholder } from "./_shared";

type Reason = { num: string; title: string; body: string };

export async function AboutGroute() {
  const t = await getTranslations("AboutGroute");
  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5">
              {t("titleA")}
              <br />
              {t("titleB")}
            </h2>
            <p className="text-muted-foreground mt-5 max-w-[520px] text-[17px] leading-relaxed">
              {t("body1")}
            </p>
            <p className="text-muted-foreground mt-4 max-w-[520px] text-[17px] leading-relaxed">
              {t("body2")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                {t("ctaPrimary")}
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>
          <PhotoPlaceholder
            label={t("imageLabel")}
            className="min-h-[420px] rounded-2xl lg:min-h-[520px]"
          />
        </div>

        <div className="mt-20 lg:mt-24">
          <div className="mb-12 flex flex-col items-center text-center">
            <Eyebrow>{t("reasonsEyebrow")}</Eyebrow>
            <h2 className="mt-3.5">{t("reasonsTitle")}</h2>
          </div>
          <div className="border-border grid border-b md:grid-cols-2">
            {reasons.map((r) => (
              <div
                key={r.num}
                className="border-border border-t py-8 md:px-8 md:py-10 md:odd:border-r"
              >
                <div className="flex items-start gap-6">
                  <span className="text-primary-strong shrink-0 font-mono text-[13px] font-semibold tracking-wide">
                    {r.num}
                  </span>
                  <div>
                    <h3 className="text-foreground text-[20px] font-semibold tracking-tight">
                      {r.title}
                    </h3>
                    <p className="text-muted-foreground mt-2.5 text-[15px] leading-[1.55]">
                      {r.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
