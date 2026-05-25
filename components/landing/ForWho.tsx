import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";

type IconName = "map" | "truck" | "doc" | "route" | "chart" | "shield";

type Featured = {
  num: string;
  badge: string;
  title: string;
  body: string;
  tags: Array<{ icon: IconName; text: string }>;
  footerTitle: string;
  footerBody: string;
  imageLabel: string;
};

type Small = {
  num: string;
  icon: IconName;
  title: string;
  body: string;
  metaA: string;
  metaB: string;
};

export async function ForWho() {
  const t = await getTranslations("ForWho");
  const featured = t.raw("featured") as Featured;
  const small = t.raw("small") as Small[];

  return (
    <section id="zasto" className="py-24">
      <div className="container-page">
        <div className="mb-14 max-w-[640px]">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
          <h2 className="mt-3.5">
            {t("titleA")}
            <br />
            {t("titleB")}
          </h2>
          <p className="mt-4 max-w-[520px] text-[17px] leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:grid-rows-2">
          <article className="relative flex min-h-[520px] items-end overflow-hidden rounded-2xl border border-border lg:row-span-2">
            <PhotoPlaceholder
              label={featured.imageLabel}
              className="absolute inset-0 rounded-none"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-secondary-3/10 via-secondary-3/65 to-secondary-3/[0.92]"
            />
            <div className="relative w-full p-9 text-white">
              <div className="mb-3.5 font-mono text-sm font-semibold tracking-wide text-[#9DB7F2]">
                {featured.num}
              </div>
              <Badge variant="glass">{featured.badge}</Badge>
              <h3 className="mt-4 text-[30px] font-semibold leading-[1.15] tracking-tight text-white">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[480px] text-[15.5px] leading-[1.55] text-[#D6DEEC]">
                {featured.body}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.tags.map((x) => (
                  <span
                    key={x.text}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/14 bg-white/[0.08] px-3 py-1.5 text-xs font-medium text-white backdrop-blur"
                  >
                    <Icon name={x.icon} size={13} className="text-white" />
                    {x.text}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-white/12 pt-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-[#A6B1CD]">
                  {featured.footerTitle}
                </div>
                <div className="mt-1 text-sm font-medium text-white">
                  {featured.footerBody}
                </div>
              </div>
            </div>
          </article>

          {small.map((c) => (
            <article
              key={c.num}
              className="flex flex-col rounded-2xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-[#D6E2FB] hover:shadow-[0_18px_36px_-18px_rgba(16,27,49,0.15)]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold tracking-wide text-muted-foreground">
                  {c.num}
                </span>
                <span className="flex size-10 items-center justify-center rounded-xl border border-[#D6E2FB] bg-gradient-to-b from-primary-soft to-[#DCE7FD] text-primary-strong">
                  <Icon name={c.icon} size={20} />
                </span>
              </div>
              <h3 className="mt-4 text-[20px] font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-2.5 mb-6 text-sm leading-[1.55] text-muted-foreground">{c.body}</p>
              <div className="mt-auto flex items-center justify-between border-t border-border-2 pt-4 text-[13px] text-muted-foreground">
                <span>{c.metaA}</span>
                <span className="font-semibold text-primary">{c.metaB}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
