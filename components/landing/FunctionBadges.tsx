import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

type Item = {
  icon: "map" | "doc" | "shield" | "route" | "wrench" | "chart";
  tag: "Starter" | "Professional";
  title: string;
  body: string;
  bullets: string[];
  accent: string;
};

export async function FunctionBadges() {
  const t = await getTranslations("FunctionBadges");
  const features = t.raw("items") as Item[];

  return (
    <section id="funkcije" className="py-24">
      <div className="container-page">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-3.5">{t("title")}</h2>
            <p className="text-muted-foreground mt-4 max-w-[520px] text-[17px] leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Badge variant="outline" className="bg-white">
              <span className="size-1.5 rounded-full bg-primary" />
              {t("starter")}
            </Badge>
            <Badge variant="dark">
              <span className="size-1.5 rounded-full bg-[#9DB7F2]" />
              {t("professional")}
            </Badge>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const isPro = f.tag === "Professional";
            return (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-background p-7 pb-6 transition-all hover:-translate-y-1 hover:border-[#D6E2FB] hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.18)]"
              >
                <span
                  className={cn(
                    "pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity",
                    "group-hover:opacity-100",
                  )}
                />
                <div className="flex items-center justify-between gap-2.5">
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-xl",
                      isPro
                        ? "border border-secondary-3 bg-gradient-to-b from-[#1B3160] to-[#0F1B36] text-[#9DB7F2] shadow-[inset_0_-2px_0_rgba(0,0,0,0.2),0_6px_12px_-6px_rgba(16,27,49,0.4)]"
                        : "border border-[#D6E2FB] bg-gradient-to-b from-primary-soft to-[#DCE7FD] text-primary-strong shadow-[inset_0_-2px_0_rgba(77,135,249,0.08)]",
                    )}
                  >
                    <Icon name={f.icon} size={22} strokeWidth={1.7} />
                  </span>
                  <Badge variant={isPro ? "dark" : "outline"}>{f.tag}</Badge>
                </div>

                <h3 className="mt-4 text-[19px] font-semibold tracking-tight">{f.title}</h3>
                <p className="mt-2 text-sm leading-[1.55] text-muted-foreground">{f.body}</p>

                <ul className="mt-4 flex flex-col gap-2 border-t border-dashed border-border pt-4">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-[13.5px] text-foreground">
                      <span className="mt-0.5 flex size-[18px] shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon name="check" size={10} strokeWidth={2.6} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between border-t border-border-2 pt-3.5">
                  <span className="font-mono text-[11px] tracking-wide text-primary-strong">
                    {f.accent}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
