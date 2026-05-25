import { getTranslations } from "next-intl/server";
import { Eyebrow, PhotoPlaceholder, Spec } from "./_shared";

export async function OperativaBlock() {
  const t = await getTranslations("OperativaBlock");
  const specs = t.raw("specs") as Array<{ value: string; label: string }>;

  return (
    <section className="bg-background py-24">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5">
              {t("titleA")}
              <br />
              {t("titleB")}
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-muted-foreground">
              {t("body")}
            </p>
            <div className="mt-8 grid gap-3 border-t border-border pt-6 sm:grid-cols-2 sm:gap-4">
              {specs.map((s) => (
                <div
                  key={s.label}
                  className="border-border bg-muted rounded-xl border p-6"
                >
                  <Spec value={s.value} label={s.label} />
                </div>
              ))}
            </div>
          </div>
          <PhotoPlaceholder
            label={t("imageLabel")}
            className="min-h-[480px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
