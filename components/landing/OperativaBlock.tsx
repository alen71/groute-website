import { Eyebrow, PhotoPlaceholder, Spec } from "./_shared";

export function OperativaBlock() {
  return (
    <section className="bg-muted py-24">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Vozač i operativa</Eyebrow>
            <h2 className="mt-3.5 text-[clamp(28px,3.2vw,42px)] font-semibold tracking-tight">
              Manje papira u depou.
              <br />
              Više vožnje na putu.
            </h2>
            <p className="mt-4 max-w-[480px] text-[17px] leading-relaxed text-muted-foreground">
              Vozač vidi zadatak na ekranu, dispečer ima evidenciju u tabli. Putni nalozi, CMR
              i tahograf fajlovi povezani sa rutom — bez prepisivanja između sistema.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <Spec value="−8.3%" label="Praznih km u pilotu" />
              <Spec value="−6%" label="Potrošnje goriva po ruti" />
              <Spec value="0" label="Manuelnih unosa u Excel" />
              <Spec value="4 jezika" label="Platforma i podrška" />
            </div>
          </div>
          <PhotoPlaceholder
            label="[ FOTO — Vozač u kabini kamiona sa Groute aplikacijom ]"
            className="min-h-[480px] rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
