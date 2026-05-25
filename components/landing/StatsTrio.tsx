import { getTranslations } from "next-intl/server";
import { Card } from "@/components/ui/card";
import { Icon } from "./_shared";

const ICONS = ["map", "clock", "shield"] as const;

export async function StatsTrio() {
  const t = await getTranslations("StatsTrio");
  const items = t.raw("items") as Array<{ value: string; label: string; note: string }>;
  return (
    <section className="border-b border-border bg-background py-14">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((s, i) => (
            <Card key={s.label} className="flex items-center gap-5 p-6">
              <span className="flex size-[54px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#6BA0FF] to-primary text-white shadow-[0_8px_16px_-6px_rgba(77,135,249,0.5)]">
                <Icon name={ICONS[i] ?? "map"} size={22} className="text-white" />
              </span>
              <div className="min-w-0">
                <div className="text-[26px] font-semibold tracking-tight text-foreground">
                  {s.value}
                </div>
                <div className="mt-1 text-[16px] font-medium text-foreground">{s.label}</div>
                <div className="mt-1 text-[13.5px] leading-snug text-muted-foreground">{s.note}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
