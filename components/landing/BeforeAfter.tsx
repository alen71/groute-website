import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon } from "./_shared";
import { cn } from "@/lib/utils";

const before = [
  "Tahograf skidate ručno u depou",
  "Dokumenti razasuti po emailovima i papirima",
  "Kazne saznajete kad inspektor stigne",
  "Trošak po vozilu računate naknadno",
  "Vozač zove dispečera za svaku izmjenu rute",
];

const after = [
  "DDD fajlovi se skidaju daljinski po rasporedu",
  "Sva dokumentacija u jednom skladištu sa alertima",
  "Auto-upozorenje prije nego inspektor dođe",
  "Trošak po km, vozaču i ruti u realnom vremenu",
  "Vozač vidi izmjene rute u aplikaciji odmah",
];

function CompareCol({
  title,
  items,
  variant,
}: {
  title: string;
  items: string[];
  variant: "before" | "after";
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
            "text-[13px] font-semibold tracking-[0.04em] uppercase",
            isAfter ? "text-primary-strong" : "text-muted-foreground",
          )}
        >
          {title}
        </span>
        {isAfter && (
          <Badge
            variant="default"
            className="bg-primary border-primary text-white"
          >
            Groute
          </Badge>
        )}
      </div>
      <ul className="flex flex-col">
        {items.map((it, i) => (
          <li
            key={it}
            className={cn(
              "flex items-start gap-3.5 py-3.5",
              "border-b",
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

export function BeforeAfter() {
  return (
    <section id="platforma" className="py-24">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-[700px] text-center">
          <Eyebrow className="justify-center">Šta se mijenja</Eyebrow>
          <h2 className="mt-3.5">
            Operativa bez Excel tabela i ručnih izvještaja.
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-[540px] text-[17px] leading-relaxed">
            Pet alata, papira i WhatsApp poruka pretvaramo u jedan sistem. Bez
            kopiranja podataka.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <CompareCol title="Prije Groute" items={before} variant="before" />
          <CompareCol title="Sa Groute" items={after} variant="after" />
        </div>
      </div>
    </section>
  );
}
