import { getTranslations } from "next-intl/server";
import { Logo } from "./_shared";

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border border-b px-4 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
      <div className="mb-6 text-[13px] text-muted-foreground">{title}</div>
      <div className="flex flex-col gap-3.5 text-[14.5px] text-foreground">{children}</div>
    </div>
  );
}

export async function Footer() {
  const t = await getTranslations("Footer");
  const site = await getTranslations("Site");
  const year = new Date().getFullYear();

  const taglineHtml = { __html: t.raw("tagline") as string };

  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full">
        <div className="border-b border-border px-4 pb-6 pt-8 md:px-8">
          <Logo height={28} />
          <p
            className="mt-4 max-w-[540px] text-sm leading-[1.55] text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
            dangerouslySetInnerHTML={taglineHtml}
          />
        </div>

        <div className="grid border-b border-border md:grid-cols-3">
          <FooterCol title={t("contactTitle")}>
            <a href="mailto:hello@groute.app" className="transition-colors hover:text-primary">
              hello@groute.app
            </a>
            <a href="tel:+38765000000" className="transition-colors hover:text-primary">
              +387 65 000 000
            </a>
            <span className="flex flex-col gap-0.5">
              <span>{t("addressLine1")}</span>
              <span>{t("addressLine2")}</span>
            </span>
          </FooterCol>

          <FooterCol title={t("navTitle")}>
            <a href="#top" className="transition-colors hover:text-primary">
              {t("navHome")}
            </a>
            <a href="#platforma" className="transition-colors hover:text-primary">
              {t("navPlatform")}
            </a>
            <a href="#funkcije" className="transition-colors hover:text-primary">
              {t("navModules")}
            </a>
            <a href="#uredjaji" className="transition-colors hover:text-primary">
              {t("navIntegrations")}
            </a>
            <a href="#zasto" className="transition-colors hover:text-primary">
              {t("navAbout")}
            </a>
          </FooterCol>

          <FooterCol title={t("socialsTitle")}>
            <a href="#" className="transition-colors hover:text-primary">
              LinkedIn
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              YouTube
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              X / Twitter
            </a>
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 px-4 py-5 text-[13.5px] text-muted-foreground md:px-8">
          <div>
            © {year} {site("name")} Fleet Management. {t("rights")}
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              {t("privacy")}
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              {t("cookies")}
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
