"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eyebrow, Icon, PhotoPlaceholder } from "./_shared";

function Tag({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-0.5 text-[11.5px] text-[#A6B1CD]">{label}</div>
    </div>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [fleet, setFleet] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      fleetSize: fleet,
      message: String(fd.get("message") ?? ""),
      locale,
    };
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus("success");
      form.reset();
      setFleet("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="container-page">
        <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative flex min-h-[540px] flex-col justify-end overflow-hidden rounded-2xl">
            <PhotoPlaceholder
              label="[ FOTO — Kamion na otvorenom putu / industrijski portret ]"
              className="absolute inset-0 rounded-none"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-secondary-3/15 via-secondary-3/60 to-secondary-3/90"
            />
            <div className="relative p-9 text-white">
              <Eyebrow light>Kontakt</Eyebrow>
              <h2 className="mt-3.5 text-[32px] font-semibold leading-[1.15] tracking-tight text-white">
                15 minuta razgovora.
                <br />
                Konkretne brojke za vašu flotu.
              </h2>
              <p className="mt-3.5 max-w-[380px] text-[15px] leading-relaxed text-[#D6DEEC]">
                Pokazaćemo platformu uživo na vašoj operativi i pripremićemo procjenu uštede
                prilagođenu broju vozila i tipu prevoza.
              </p>
              <div className="mt-7 flex flex-wrap gap-6">
                <Tag value="< 24h" label="Odgovor na upit" />
                <Tag value="Bez slajdova" label="Razgovor o operativi" />
                <Tag value="Bez obaveza" label="Ne ugovaramo na pozivu" />
              </div>
            </div>
          </div>

          <Card className="rounded-2xl p-10 shadow-[0_1px_2px_rgba(16,27,49,0.04)]">
            {status === "success" ? (
              <div className="px-3 py-14 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-success/12 text-success">
                  <Icon name="check" size={28} strokeWidth={2.5} className="text-success" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">Hvala — javljamo se za 24h.</h3>
                <p className="mx-auto mt-2.5 max-w-[380px] text-sm text-muted-foreground">
                  Pripremićemo agendu prilagođenu vašoj floti i potvrditi termin razgovora.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 className="text-[26px] font-semibold tracking-tight">Zakažite razgovor</h3>
                <p className="mt-2.5 max-w-[440px] text-sm text-muted-foreground">
                  Ostavite kontakt — javljamo se istog dana, najkasnije za 24 sata.
                </p>

                <div className="mt-6 grid gap-3.5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">Ime i prezime</Label>
                      <Input id="name" name="name" required placeholder="Vaše ime" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="company">Naziv firme</Label>
                      <Input id="company" name="company" required placeholder="Firma d.o.o." />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="vi@firma.com" />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" name="phone" required placeholder="+387 / +381 …" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="fleet">Veličina flote</Label>
                    <Select value={fleet} onValueChange={setFleet} name="fleetSize" required>
                      <SelectTrigger id="fleet">
                        <SelectValue placeholder="Izaberite" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-30">10 – 30 vozila</SelectItem>
                        <SelectItem value="30-100">30 – 100 vozila</SelectItem>
                        <SelectItem value="100-500">100 – 500 vozila</SelectItem>
                        <SelectItem value="500+">500+ vozila</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message">
                      Šta vam je trenutno najveći izazov? (opciono)
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="npr. tahograf nam ide ručno, dokumenti po Excel-ima…"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p role="alert" className="mt-4 text-sm text-destructive">
                    Došlo je do greške. Pokušajte ponovo ili pišite na office@mygroute.com.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-5 w-full"
                >
                  {status === "submitting" ? "Slanje…" : "Zakaži razgovor"}
                </Button>
                <div className="mt-3.5 flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon name="lock" size={13} />
                  <span>
                    Podatke koristimo isključivo za zakazivanje razgovora. GDPR usklađeno.
                  </span>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
