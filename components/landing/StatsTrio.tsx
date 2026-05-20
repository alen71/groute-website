import { Card } from "@/components/ui/card";
import { Icon } from "./_shared";

const stats = [
  { icon: "map" as const, value: "<30s", label: "GPS update", note: "Pozicija svakog vozila u realnom vremenu" },
  { icon: "clock" as const, value: "< 5 dana", label: "Prosječan onboarding", note: "Od potpisa do operative uživo" },
  { icon: "shield" as const, value: "100%", label: "EU 561/2006 usklađenost", note: "Tahograf i HOS po regulativi" },
];

export function StatsTrio() {
  return (
    <section className="border-b border-border bg-background py-14">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <Card key={s.label} className="flex items-center gap-5 p-6">
              <span className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#6BA0FF] to-primary text-white shadow-[0_8px_16px_-6px_rgba(77,135,249,0.5)]">
                <Icon name={s.icon} size={22} className="text-white" />
              </span>
              <div className="min-w-0">
                <div className="text-[26px] font-semibold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-0.5 text-sm font-medium text-foreground">{s.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.note}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
