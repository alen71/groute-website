import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

function CompareCol({
  title,
  items,
  variant,
  groute,
}: {
  title: string;
  items: string[];
  variant: "before" | "after";
  groute: string;
}) {
  const isAfter = variant === "after";
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8",
        isAfter
          ? "border border-[#D6E2FB] bg-gradient-to-b from-white to-[#F4F8FF]"
          : "border-border bg-muted border",
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <span
          className={cn(
            "text-[13px] font-semibold uppercase tracking-[0.04em]",
            isAfter ? "text-primary-strong" : "text-muted-foreground",
          )}
        >
          {title}
        </span>
        {isAfter && (
          <Badge variant="default" className="bg-primary border-primary text-white">
            {groute}
          </Badge>
        )}
      </div>
      <ul className="flex flex-col">
        {items.map((it, i) => (
          <li
            key={it}
            className={cn(
              "flex items-start gap-3.5 py-3.5 border-b",
              i === 0 && "border-t",
              isAfter
                ? "text-foreground border-[#E1ECFD] font-medium"
                : "border-border text-muted-foreground decoration-muted-2/50 line-through",
              "text-[15px]",
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-[22px] shrink-0 items-center justify-center rounded-full",
                isAfter
                  ? "bg-primary/12 text-primary"
                  : "bg-muted-2/15 text-muted-2",
              )}
            >
              <Icon
                name={isAfter ? "check" : "plus"}
                size={isAfter ? 12 : 10}
                strokeWidth={2.4}
              />
            </span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function BeforeAfter() {
  const t = await getTranslations("BeforeAfter");
  const site = await getTranslations("Site");
  const before = t.raw("before") as string[];
  const after = t.raw("after") as string[];
  return (
    <section id="platforma" className="py-24">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <Eyebrow className="justify-center">{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">{t("title")}</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CompareCol
            title={t("beforeTitle")}
            items={before}
            variant="before"
            groute={site("name")}
          />
          <CompareCol
            title={t("afterTitle")}
            items={after}
            variant="after"
            groute={site("name")}
          />
        </div>
      </div>
    </section>
  );
}
