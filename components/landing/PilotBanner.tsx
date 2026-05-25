import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Eyebrow, Icon } from "./_shared";

function BenefitRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3.5 rounded-lg border border-white/8 bg-white/5 px-4 py-3.5">
      <span className="bg-primary/18 flex size-[30px] shrink-0 items-center justify-center rounded-full text-[#9DB7F2]">
        <Icon
          name="check"
          size={14}
          strokeWidth={2.4}
          className="text-[#9DB7F2]"
        />
      </span>
      <span className="text-[14.5px] font-medium text-white">{text}</span>
    </div>
  );
}

export async function PilotBanner() {
  const t = await getTranslations("Pilot");
  const benefits = t.raw("benefits") as string[];

  return (
    <section className="from-secondary-2 to-secondary-3 relative overflow-hidden bg-gradient-to-b py-24 text-white">
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.4)_1px,transparent_0)] [background-size:32px_32px] opacity-[0.18]"
      />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Eyebrow light>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(30px,3.4vw,42px)] leading-tight tracking-tight text-white">
              {t("titleA")}
              <br />
              {t("titlePrice")}
              <br />
              <span className="text-[#9DB7F2]">{t("titleB")}</span>
            </h2>
            <p className="mt-4 max-w-[540px] text-[17px] leading-relaxed text-[#A6B1CD]">
              {t("body")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <Button variant="blue" size="lg" asChild>
                <a href="#kontakt">{t("ctaPrimary")}</a>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <a href="#funkcije">{t("ctaSecondary")}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-3.5">
            {benefits.map((b) => (
              <BenefitRow key={b} text={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
