"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
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

type Status = "idle" | "submitting" | "success" | "error";

export function FinalCTA() {
  const t = useTranslations("Cta");
  const locale = useLocale();
  const [status, setStatus] = useState<Status>("idle");
  const [fleet, setFleet] = useState("");

  const tags = t.raw("tags") as Array<{ value: string; label: string }>;

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
              label={t("imageLabel")}
              className="absolute inset-0 rounded-none"
            />
            <div
              aria-hidden
              className="from-secondary-3/15 via-secondary-3/60 to-secondary-3/90 absolute inset-0 bg-gradient-to-b"
            />
            <div className="relative p-9 text-white">
              <Eyebrow light>{t("eyebrow")}</Eyebrow>
              <h2 className="mt-3.5 text-[32px] leading-[1.15] tracking-tight text-white">
                {t("titleA")}
                <br />
                {t("titleB")}
              </h2>
              <p className="mt-3.5 max-w-[380px] text-[15px] leading-relaxed text-[#D6DEEC]">
                {t("body")}
              </p>
              <div className="mt-7 flex flex-wrap gap-6">
                {tags.map((tg) => (
                  <div key={tg.value} className="flex flex-col">
                    <div className="text-lg font-semibold tracking-tight text-white">
                      {tg.value}
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-[#A6B1CD]">
                      {tg.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="rounded-2xl p-6 shadow-[0_1px_2px_rgba(16,27,49,0.04)] md:p-10">
            {status === "success" ? (
              <div className="px-3 py-14 text-center">
                <div className="bg-success/12 text-success mx-auto flex size-16 items-center justify-center rounded-full">
                  <Icon
                    name="check"
                    size={28}
                    strokeWidth={2.5}
                    className="text-success"
                  />
                </div>
                <h3 className="mt-4 text-xl font-semibold">
                  {t("successTitle")}
                </h3>
                <p className="text-muted-foreground mx-auto mt-2.5 max-w-[380px] text-sm">
                  {t("successBody")}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h3 className="text-[26px] font-semibold tracking-tight">
                  {t("formTitle")}
                </h3>
                <p className="text-muted-foreground mt-2.5 max-w-[440px] text-sm">
                  {t("formSubtitle")}
                </p>

                <div className="mt-6 grid gap-3.5">
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="name">{t("name")}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder={t("namePh")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="company">{t("company")}</Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        placeholder={t("companyPh")}
                      />
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="email">{t("email")}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder={t("emailPh")}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="phone">{t("phone")}</Label>
                      <Input
                        id="phone"
                        name="phone"
                        required
                        placeholder={t("phonePh")}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="fleet">{t("fleet")}</Label>
                    <Select
                      value={fleet}
                      onValueChange={setFleet}
                      name="fleetSize"
                      required
                    >
                      <SelectTrigger id="fleet">
                        <SelectValue placeholder={t("fleetPh")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="10-30">{t("fleet1")}</SelectItem>
                        <SelectItem value="30-100">{t("fleet2")}</SelectItem>
                        <SelectItem value="100-500">{t("fleet3")}</SelectItem>
                        <SelectItem value="500+">{t("fleet4")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="message">{t("message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("messagePh")}
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p role="alert" className="text-destructive mt-4 text-sm">
                    {t("error")}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "submitting"}
                  className="mt-5 w-full"
                >
                  {status === "submitting" ? t("submitting") : t("submit")}
                </Button>
                <div className="text-muted-foreground mt-3.5 flex items-center gap-2 text-xs">
                  <Icon name="lock" size={13} />
                  <span>{t("privacy")}</span>
                </div>
              </form>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
