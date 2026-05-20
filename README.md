# groute marketing website

Marketing site for [groute](https://www.mygroute.com) — fleet management software.

## Stack

- **Next.js 16** (App Router) + TypeScript
- **Tailwind CSS v4**
- **next-intl** — i18n (`en`, `bs`, `sr`, `de`)
- **shadcn/ui** primitives + **lucide-react** icons
- **Resend** — transactional email (contact form)
- **Vercel** — hosting
- **pnpm** — package manager

## Quick start

```bash
pnpm install
cp .env.example .env.local       # fill in RESEND_API_KEY etc.
pnpm dev                          # http://localhost:3000 → /en
```

## Scripts

- `pnpm dev` — dev server
- `pnpm build` — production build
- `pnpm start` — run production build
- `pnpm lint` — eslint
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm format` — prettier write

## Environment variables

| Var | Purpose |
|---|---|
| `RESEND_API_KEY` | Contact form sender (required for `/api/contact`) |
| `CONTACT_EMAIL_TO` | Inbox for demo requests (default in `.env.example`) |
| `CONTACT_EMAIL_FROM` | Verified Resend sender. Falls back to `onboarding@resend.dev` for testing. |
| `SITE_URL` | Public base URL — used by sitemap/robots/canonical. Default `https://www.mygroute.com`. |

Set the same vars in Vercel project settings for deploys.

## i18n

Locales live in `messages/{en,bs,sr,de}.json`. URL pattern is `/{locale}/...`.

**Add a translation key:** add it under the same namespace in all four locale files. Don't hardcode user-facing strings in components — use `useTranslations(namespace)`.

**Add a new locale:**
1. Add code to `i18n/routing.ts` `locales` array.
2. Create `messages/<code>.json` mirroring `en.json`.
3. Add label to `LABELS` in `components/layout/LanguageSwitcher.tsx`.

## Project structure

```
app/
├── [locale]/         # localized pages
├── api/contact/      # Resend POST handler
├── sitemap.ts        # auto-generated, includes hreflang
└── robots.ts
components/
├── ui/               # shadcn primitives
├── layout/           # Header, Footer, LanguageSwitcher
└── contact/          # ContactForm
i18n/                 # next-intl routing + navigation + request config
lib/                  # cn(), seo helper, resend client
messages/             # locale JSON files
```

## Deploy

### One-time setup

```bash
pnpm i -g vercel
vercel login
vercel link        # link to existing project, or create new
vercel env add RESEND_API_KEY production
vercel env add CONTACT_EMAIL_TO production
vercel env add SITE_URL production
```

Or via UI: `vercel.com/new` → import GitHub repo → Vercel auto-detects Next.js → add env vars → Deploy.

### Recurring

- Connected to Git: `git push origin main` → auto-build + deploy.
- Manual: `vercel --prod`.
