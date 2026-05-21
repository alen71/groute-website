@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — dev server on **port 4000** (README says 3000 — it's wrong)
- `pnpm build` — production build
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm lint` — eslint
- `pnpm format` — prettier write

No test suite. Verify changes via `pnpm typecheck` + hitting the dev server (`curl http://localhost:4000/{locale}`).

## Architecture

Marketing site for fleet-management SaaS. Single landing page assembled from section components, served in 4 locales.

**Stack:** Next.js 16 App Router + React 19 + Tailwind v4 + next-intl. See `AGENTS.md` re: Next.js 16 breaking changes — consult `node_modules/next/dist/docs/` before non-trivial framework work.

### Page assembly

`app/[locale]/page.tsx` is the home. Each section is a discrete component in `components/landing/<Section>.tsx`. To add or reorder a section: import + drop into the JSX of `page.tsx`. Sections are **async server components by default**; mark `"use client"` only when state/refs/effects are needed (e.g., `FuelCalculator`, `LanguageSwitcher`, `Nav`, `FAQ`).

### i18n (next-intl)

- Locales: `en` (default), `bs`, `sr`, `de` — defined in `i18n/routing.ts`.
- URL pattern: `/{locale}/...` (always-prefixed).
- Translations: `messages/{locale}.json`, keyed by namespace (`Hero`, `Bento`, `FuelSavings`, etc. — namespace per section).
- Server: `await getTranslations("Namespace")`.
- Client: `useTranslations("Namespace")` + `useLocale()`.
- **Adding a key requires editing all 4 locale files** in the same namespace. Missing keys render the key name as a placeholder.
- `t.raw("arrayKey")` reads JSON arrays/objects when sections need structured data (cards, rows, specs). Casts to a local TS type at call site.
- Locale-aware navigation: import `Link`, `useRouter`, `usePathname` from `@/i18n/navigation` (not `next/navigation`).

### Hydration gotcha

Node's bundled ICU lacks data for some locales (e.g. `bs-BA`) → `Intl.NumberFormat` in SSR falls back to en-US, then re-formats in browser → hydration mismatch. **Avoid `Intl.NumberFormat`** for non-en formatting in components rendered both server- and client-side. `FuelCalculator.tsx` ships a small deterministic formatter (`formatNumber` / `formatEUR`) keyed off a `LOCALE_SEP` table — copy that pattern.

### Styling

- Tailwind v4. Theme tokens live as CSS variables in `app/globals.css` (`--primary`, `--secondary`, `--muted-foreground`, etc.) and are exposed to Tailwind via `--color-*` aliases.
- `cn(...)` from `lib/utils.ts` (clsx + tailwind-merge) is the standard class composer.
- Component-scoped CSS goes inside `@layer components` in `globals.css` (e.g., `.fuel-range`). No CSS modules.

#### Colors — strict rule

**Every color must come from the theme.** Never use raw hex in class names (`text-[#XXXXXX]`, `bg-[#XXXXXX]`, `border-[#XXXXXX]`, `from-[#XXXXXX]`, `to-[#XXXXXX]`, etc.) or in inline styles.

If you need a color that isn't in the theme:
1. Add it to **both** blocks in `app/globals.css`:
   - `:root` — raw value: `--my-color: #abcdef;`
   - `@theme inline` — Tailwind alias: `--color-my-color: var(--my-color);`
2. Then use the semantic class: `text-my-color`, `bg-my-color`, etc.

Existing palette includes:
- Primary scale: `primary`, `primary-strong`, `primary-light` (#6BA0FF), `primary-accent` (#9DB7F2, on-dark), `primary-edge` (#D6E2FB, border), `primary-tint` (#F4F8FF, lightest bg), `primary-soft` (#EEF3FE)
- Secondary (dark) + on-dark text scale: `secondary-foreground` (white), `secondary-foreground-2` (#D6DEEC) … `secondary-foreground-6` (#7B89A8) — increasing dimness
- Standard: `background`, `foreground`, `muted`, `muted-foreground`, `muted-2`, `border`, `border-2`, `card`, `destructive`, `success`, `warning`, `paper`

Add new tokens semantically (purpose-named, not hex-named) so dark-mode / rebrand stays trivial.

### Shared atoms

`components/landing/_shared.tsx` exports `Icon` (lucide wrapper), `Logo`, `Eyebrow`, `Spec`, `PhotoPlaceholder`. New icons must be added to both the `IconName` union and `iconMap`. `components/ui/*` holds shadcn primitives (Button, Card, Input, etc.).

### Contact form

`app/api/contact/route.ts` — Resend POST handler. Zod-validated. Requires `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`.

### SEO

`lib/seo.ts` builds locale-aware `Metadata` via `buildMetadata({ locale, path, title, description })`. `app/sitemap.ts` and `app/robots.ts` are auto-generated and include hreflang per locale.
