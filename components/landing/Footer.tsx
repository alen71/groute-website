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
    <div className="border-border border-b px-4 py-8 last:border-b-0 md:border-r md:border-b-0 md:px-8 md:last:border-r-0">
      <div className="text-muted-foreground mb-6 text-[13px]">{title}</div>
      <div className="text-foreground flex flex-col gap-3.5 text-[14.5px]">
        {children}
      </div>
    </div>
  );
}

export async function Footer() {
  const t = await getTranslations("Footer");
  const site = await getTranslations("Site");
  const year = new Date().getFullYear();

  const taglineHtml = { __html: t.raw("tagline") as string };

  return (
    <footer className="border-border bg-background border-t">
      <div className="w-full">
        <div className="border-border border-b px-4 pt-8 pb-6 md:px-8">
          <Logo height={28} />
          <p
            className="text-muted-foreground [&_strong]:text-foreground mt-4 max-w-[540px] text-sm leading-[1.55] [&_strong]:font-semibold"
            dangerouslySetInnerHTML={taglineHtml}
          />
        </div>

        <div className="border-border grid border-b md:grid-cols-3">
          <FooterCol title={t("contactTitle")}>
            <a
              href="mailto:hello@groute.app"
              className="hover:text-primary transition-colors"
            >
              hello@groute.app
            </a>
            <a
              href="tel:+38765000000"
              className="hover:text-primary transition-colors"
            >
              +387 65 000 000
            </a>
            <span className="flex flex-col gap-0.5">
              <span>{t("addressLine1")}</span>
              <span>{t("addressLine2")}</span>
            </span>
          </FooterCol>

          <FooterCol title={t("navTitle")}>
            <a href="#top" className="hover:text-primary transition-colors">
              {t("navHome")}
            </a>
            <a
              href="#platforma"
              className="hover:text-primary transition-colors"
            >
              {t("navPlatform")}
            </a>
            <a
              href="#funkcije"
              className="hover:text-primary transition-colors"
            >
              {t("navModules")}
            </a>
            <a
              href="#uredjaji"
              className="hover:text-primary transition-colors"
            >
              {t("navIntegrations")}
            </a>
            <a href="#zasto" className="hover:text-primary transition-colors">
              {t("navAbout")}
            </a>
          </FooterCol>

          <FooterCol title={t("socialsTitle")}>
            <a href="#" className="hover:text-primary transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              YouTube
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              X / Twitter
            </a>
          </FooterCol>
        </div>

        <div className="text-muted-foreground flex flex-wrap items-center justify-between gap-6 px-4 py-5 text-[13.5px] md:px-8">
          <div>
            © {year} {site("name")} Fleet Management. {t("rights")}
          </div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              {t("privacy")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("cookies")}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {t("terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
