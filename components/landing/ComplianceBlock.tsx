import { Card } from "@/components/ui/card";
import { Eyebrow, Icon, Spec } from "./_shared";

const rows = [
  { country: "Srbija", missed: "€1.700", hos: "€4.300", manip: "€7.000" },
  { country: "Hrvatska", missed: "€6.630", hos: "€6.630", manip: "€6.630" },
  { country: "Slovenija", missed: "€2.000", hos: "€2.000", manip: "€14.500+" },
  { country: "BiH", missed: "€5.100", hos: "€10.200", manip: "€10.200" },
];

export function ComplianceBlock() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-[640px]">
            <Eyebrow>Kazne na Balkanu</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
              Jedna propuštena kazna pokriva Groute na godinu dana.
            </h2>
            <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-muted-foreground">
              Tahograf prekršaji nisu šala. Groute uživo monitoriše HOS pravila i alarmira
              prije nego što inspektor stane vozilo — preventiva, ne reakcija.
            </p>
          </div>
          <div className="flex shrink-0 gap-9 pt-2">
            <Spec value="100%" label="EU 561/2006 usklađenost" large />
            <Spec value="0" label="Manuelnih izvještaja" large />
          </div>
        </div>

        <Card className="overflow-hidden p-0">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
            <div className="flex items-center gap-2.5">
              <Icon name="shield" size={16} className="text-primary" />
              <span className="text-sm font-semibold">Pregled kazni · regionalni izvori</span>
            </div>
            <span className="text-xs text-muted-foreground">
              Procjene — provjerite kod nadležnih organa pri ugovaranju.
            </span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#FBFCFE] text-muted-foreground">
                <th className="px-6 py-3.5 text-left text-[11px] font-medium uppercase tracking-[0.06em]">
                  Zemlja
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  Propušten DDD download
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  HOS prekršaj
                </th>
                <th className="px-6 py-3.5 text-right text-[11px] font-medium uppercase tracking-[0.06em]">
                  Manipulacija
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
