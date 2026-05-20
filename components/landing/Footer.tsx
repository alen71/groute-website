import { Logo } from "./_shared";

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border p-8 md:border-r md:last:border-r-0">
      <div className="mb-6 text-[13px] text-muted-foreground">{title}</div>
      <div className="flex flex-col gap-3.5 text-[14.5px] text-foreground">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="w-full">
        <div className="border-b border-border px-8 pb-6 pt-8">
          <Logo height={28} />
          <p className="mt-4 max-w-[540px] text-sm leading-[1.55] text-muted-foreground">
            Groute je osnovan sa ciljem da{" "}
            <strong className="font-semibold text-foreground">operativu flote</strong> podigne
            na sljedeći nivo. Spajamo planiranje ruta, tahograf i tok dokumenata u jednu
            platformu — izgrađenu za prevoznike na Balkanu.
          </p>
        </div>

        <div className="grid border-b border-border md:grid-cols-3">
          <FooterCol title="Kontakt">
            <a href="mailto:hello@groute.app" className="transition-colors hover:text-primary">
              hello@groute.app
            </a>
            <a href="tel:+38765000000" className="transition-colors hover:text-primary">
              +387 65 000 000
            </a>
            <span className="flex flex-col gap-0.5">
              <span>Brčko Distrikt</span>
              <span>Bosna i Hercegovina</span>
            </span>
          </FooterCol>

          <FooterCol title="Navigacija">
            <a href="#top" className="transition-colors hover:text-primary">
              Početna
            </a>
            <a href="#platforma" className="transition-colors hover:text-primary">
              Platforma
            </a>
            <a href="#funkcije" className="transition-colors hover:text-primary">
              Moduli
            </a>
            <a href="#uredjaji" className="transition-colors hover:text-primary">
              Integracije
            </a>
            <a href="#zasto" className="transition-colors hover:text-primary">
              O nama
            </a>
          </FooterCol>

          <FooterCol title="Društvene mreže">
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

        <div className="flex flex-wrap items-center justify-between gap-6 px-8 py-5 text-[13.5px] text-muted-foreground">
          <div>© {year} Groute Fleet Management. Sva prava zadržana.</div>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="transition-colors hover:text-foreground">
              Politika privatnosti
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Politika kolačića
            </a>
            <a href="#" className="transition-colors hover:text-foreground">
              Uslovi korištenja
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
