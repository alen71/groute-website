import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Icon, PhotoPlaceholder } from "./_shared";

export async function Hero() {
  const t = await getTranslations("Hero");
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-secondary-2 to-secondary-3 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] [mask-image:linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.4)_50%,transparent)] [background-image:linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.22] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.5)_25%,rgba(0,0,0,0.3)_65%,transparent)] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:32px_32px]"
      />

      <div className="container-page relative pt-[72px] pb-20">
        <div className="mx-auto max-w-[820px] text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-[#D6DEEC] backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary shadow-[0_0_0_3px_rgba(77,135,249,0.25)]" />
            {t("badge")}
          </span>
          <h1 className="mt-6 text-[clamp(34px,5.2vw,64px)] font-semibold leading-[1.05] tracking-[-0.03em] text-white">
            {t("titleA")}
            <br />
            <span className="text-[#9DB7F2]">{t("titleB")}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] text-[17px] leading-relaxed text-[#A6B1CD]">
            {t("subtitle")}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
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
          <div className="mt-5 flex flex-wrap justify-center gap-4 text-[12.5px] text-[#8C97B5]">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-[#9DB7F2]" /> {t("trust1")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-[#9DB7F2]" /> {t("trust2")}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="check" size={13} className="text-[#9DB7F2]" /> {t("trust3")}
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
