import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Icon, PhotoPlaceholder } from "./_shared";

export async function Hero() {
  const t = await getTranslations("Hero");
  return (
    <section
      id="top"
      className="from-secondary-2 to-secondary-3 relative overflow-hidden bg-gradient-to-b text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)_50%,transparent)] [background-size:64px_64px] opacity-[0.08]"
      />
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.3)_65%,transparent)] [background-size:32px_32px] opacity-[0.22]"
      />

      <div className="container-page relative pt-[72px] pb-20">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="text-secondary-foreground-2 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium backdrop-blur">
            <span className="bg-primary size-1.5 rounded-full shadow-[0_0_0_3px_rgba(77,135,249,0.25)]" />
            {t("badge")}
          </span>
          <h1 className="mt-6 text-[clamp(34px,5.2vw,64px)] leading-[1.05] font-semibold tracking-[-0.03em] text-white">
            {t("titleA")}
            <br />
            <span className="text-primary-accent">{t("titleB")}</span>
          </h1>
          <p className="text-secondary-foreground-4 mx-auto mt-6 max-w-[600px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-7 flex justify-center">
            <div className="inline-grid grid-cols-1 gap-3 sm:flex sm:flex-row sm:flex-wrap sm:justify-center">
              <Button variant="blue" size="lg" asChild>
                <a href="#kontakt">{t("ctaPrimary")}</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#demo">
                  {t("ctaSecondary")}
                  <Icon name="arrow" size={15} />
                </a>
              </Button>
            </div>
          </div>
          <div className="text-secondary-foreground-5 mt-5 flex flex-wrap justify-center gap-4 text-[12.5px]">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-primary-accent" />{" "}
              {t("trust1")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-primary-accent" />{" "}
              {t("trust2")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-primary-accent" />{" "}
              {t("trust3")}
            </span>
          </div>
        </div>

        <div className="relative mt-14">
          <PhotoPlaceholder
            dark
            label={t("imageLabel")}
            className="h-[560px] rounded-2xl border border-white/8 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
