"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Icon } from "./_shared";

type Sep = { decimal: string; group: string; eurBefore: boolean };

const LOCALE_SEP: Record<string, Sep> = {
  en: { decimal: ".", group: ",", eurBefore: true },
  bs: { decimal: ",", group: ".", eurBefore: true },
  sr: { decimal: ",", group: ".", eurBefore: true },
  de: { decimal: ",", group: ".", eurBefore: false },
};

function formatWithSep(n: number, sep: Sep, decimals: number) {
  const fixed = Math.abs(n).toFixed(decimals);
  const [i, d] = fixed.split(".");
  const grouped = i.replace(/\B(?=(\d{3})+(?!\d))/g, sep.group);
  return d ? `${grouped}${sep.decimal}${d}` : grouped;
}

function formatNumber(n: number, locale: string, decimals = 0) {
  return formatWithSep(n, LOCALE_SEP[locale] ?? LOCALE_SEP.en, decimals);
}

function formatEUR(n: number, locale: string, decimals = 0) {
  const sep = LOCALE_SEP[locale] ?? LOCALE_SEP.en;
  const body = formatWithSep(n, sep, decimals);
  return sep.eurBefore ? `€${body}` : `${body} €`;
}

const KM_PER_YEAR = 40_000;
const L_PER_100KM = 30;
const SAVINGS_PCT = 0.06;

const DEFAULT_FLEET = 50;
const DEFAULT_PRICE = 1.5;

const FLEET_MIN = 5;
const FLEET_MAX = 500;
const FLEET_STEP = 5;

const PRICE_MIN = 1.0;
const PRICE_MAX = 2.5;
const PRICE_STEP = 0.05;

export function FuelCalculator() {
  const t = useTranslations("FuelSavings");
  const locale = useLocale();

  const [fleet, setFleet] = useState(DEFAULT_FLEET);
  const [price, setPrice] = useState(DEFAULT_PRICE);

  const savings = useMemo(
    () => fleet * KM_PER_YEAR * (L_PER_100KM / 100) * price * SAVINGS_PCT,
    [fleet, price],
  );

  const isDefault = fleet === DEFAULT_FLEET && Math.abs(price - DEFAULT_PRICE) < 1e-9;

  function reset() {
    setFleet(DEFAULT_FLEET);
    setPrice(DEFAULT_PRICE);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 text-white sm:p-10">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-24 h-[320px] w-[320px] rounded-full bg-primary/35 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-10 h-[260px] w-[260px] rounded-full bg-primary/20 blur-[110px]"
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] font-medium text-[#9DB7F2]">
            <Icon name="fuel" size={13} />
            {t("heroTag")}
          </span>
          <button
            type="button"
            onClick={reset}
            disabled={isDefault}
            className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#9DB7F2] transition-opacity hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {t("resetLabel")}
          </button>
        </div>

        <div className="mt-8">
          <div className="text-[13px] uppercase tracking-[0.08em] text-[#A6B1CD]">
            {t("heroLead")}
          </div>
          <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[clamp(48px,6.4vw,88px)] font-bold leading-[1.02] tracking-[-0.04em] tabular-nums">
            <span className="text-primary">−</span>
            <span>{formatEUR(savings, locale, 0)}</span>
            <span className="text-[clamp(16px,1.6vw,22px)] font-semibold text-[#9DB7F2]">
              / {t("heroPeriod")}
            </span>
          </div>
          <p className="mt-4 max-w-[440px] text-[14px] leading-relaxed text-[#C8D2E8]">
            {t("heroBody")}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <Slider
            label={t("vehiclesLabel")}
            value={`${formatNumber(fleet, locale)} ${t("vehiclesUnit")}`}
            min={FLEET_MIN}
            max={FLEET_MAX}
            step={FLEET_STEP}
            current={fleet}
            onChange={setFleet}
            ariaLabel={t("vehiclesLabel")}
          />
          <Slider
            label={t("fuelPriceLabel")}
            value={`${formatEUR(price, locale, 2)} / L`}
            min={PRICE_MIN}
            max={PRICE_MAX}
            step={PRICE_STEP}
            current={price}
            onChange={setPrice}
            ariaLabel={t("fuelPriceLabel")}
          />
        </div>

        <div className="mt-7 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
          <Cell
            value={`${formatNumber(KM_PER_YEAR, locale)} km`}
            label={t("kmLabel")}
          />
          <Cell value={`${L_PER_100KM} L/100km`} label={t("consumptionLabel")} />
        </div>

        <div className="mt-5 text-[11.5px] text-[#7B89A8]">{t("disclaimer")}</div>
      </div>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
  ariaLabel,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  current: number;
  onChange: (n: number) => void;
  ariaLabel: string;
}) {
  const pct = ((current - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.08em] text-[#A6B1CD]">
          {label}
        </span>
        <span className="text-[15px] font-semibold text-white tabular-nums">
          {value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={ariaLabel}
        className="fuel-range mt-3 w-full"
        style={
          {
            background: `linear-gradient(to right, var(--color-primary) 0%, var(--color-primary) ${pct}%, rgba(255,255,255,0.12) ${pct}%, rgba(255,255,255,0.12) 100%)`,
          } as React.CSSProperties
        }
      />
    </div>
  );
}

function Cell({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-[17px] font-semibold tracking-tight text-white tabular-nums">
        {value}
      </div>
      <div className="mt-1 text-[12px] text-[#9DB7F2]">{label}</div>
    </div>
  );
}
