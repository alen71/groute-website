import { getTranslations } from "next-intl/server";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";

type Benefit = { title: string; body: string };

export async function Hardware() {
  const t = await getTranslations("Hardware");
  const benefits = t.raw("benefits") as Benefit[];

  return (
    <section id="uredjaji" className="bg-muted relative py-24">
      <div className="container-page">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">
            {t("titleA")}
            <br />
            <span className="text-primary">{t("titleB")}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-[560px] text-[17px] leading-relaxed">
            {t("body")}
          </p>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-[1.05fr_1fr]">
          <PhotoPlaceholder
            label={t("imageLabel")}
            className="border-border relative min-h-[460px] rounded-2xl border bg-gradient-to-br from-[#F5F8FD] to-[#E9EFF8]"
          />

          <div className="flex flex-col gap-5">
            <div className="border-border bg-background flex flex-col rounded-2xl border p-8">
              <div className="mb-6 flex items-center gap-2.5">
                <span className="text-primary-strong text-[11px] font-semibold tracking-[0.12em] uppercase">
                  {t("benefitsHeader")}
                </span>
                <span className="bg-border h-px flex-1" />
              </div>

              <div className="flex flex-col">
                {benefits.map((row, i) => (
                  <div
                    key={row.title}
                    className={
                      i === 0 ? "py-4 pt-0" : "border-border-2 border-t py-4"
                    }
                  >
                    <h3 className="text-[17px] font-semibold tracking-tight">
                      {row.title}
                    </h3>
                    <p className="text-muted-foreground mt-1.5 text-sm leading-[1.55]">
                      {row.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-border bg-background flex items-start gap-3.5 rounded-lg border px-4 py-3.5">
              <Icon
                name="check"
                size={18}
                className="text-success"
                strokeWidth={2.3}
              />
              <div>
                <div className="text-foreground text-[13.5px] font-medium">
                  {t("noteTitle")}
                </div>
                <div className="text-muted-foreground mt-1 text-xs">
                  {t("noteBody")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
