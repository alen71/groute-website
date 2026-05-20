import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { Eyebrow, Icon, Spec } from "./_shared";

type Row = { country: string; missed: string; hos: string; manip: string };

export async function ComplianceBlock() {
  const t = await getTranslations("Compliance");
  const specs = t.raw("specs") as Array<{ value: string; label: string }>;
  const rows = t.raw("rows") as Row[];

  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-[640px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5">{t("title")}</h2>
            <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-muted-foreground">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex shrink-0 gap-9 pt-2">
            {specs.map((s) => (
              <Spec key={s.label} value={s.value} label={s.label} large />
            ))}
          </div>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
            <div className="flex items-center gap-2.5">
              <Icon name="shield" size={16} className="text-primary" />
              <span className="text-sm font-semibold">{t("tableTitle")}</span>
            </div>
            <span className="text-xs text-muted-foreground">{t("tableNote")}</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FBFCFE] text-muted-foreground">
                <th className="px-6 py-3.5 text-left text-[11px] font-medium uppercase tracking-[0.06em]">
                  {t("colCountry")}
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  {t("colMissed")}
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  {t("colHos")}
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  {t("colManip")}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.country} className="border-t border-border-2">
                  <td className="px-6 py-4.5 text-[15px] font-semibold text-foreground">
                    {r.country}
                  </td>
                  <td className="px-6 py-4.5 text-right text-foreground">{r.missed}</td>
                  <td className="px-6 py-4.5 text-right text-foreground">{r.hos}</td>
                  <td className="px-6 py-4.5 text-right font-semibold text-[#B91C1C]">
                    {r.manip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
}
