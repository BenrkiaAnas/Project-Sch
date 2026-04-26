# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (Turbopack, outputs to .next/dev)
npm run build    # production build (Turbopack by default)
npm start        # run production server
npm run lint     # runs ESLint directly — NOT next lint, which was removed in v16
```

No test suite is configured. TypeScript type-check without emitting:

```bash
npx tsc --noEmit
```

After adding dynamic routes, regenerate typed `PageProps`/`LayoutProps` global helpers:

```bash
npx next typegen
```

## Architecture

**Stack**: Next.js 16.2.4 · React 19.2.4 · Tailwind CSS v4 · TypeScript 5

### Project structure

```
shinobi/
├── app/
│   ├── _components/          # shared components (not routed — underscore prefix)
│   │   ├── Header.tsx        # server component: logo + ThemeToggle
│   │   ├── ThemeProvider.tsx # client component: dark-class + localStorage
│   │   └── ThemeToggle.tsx   # client component: moon/sun button
│   ├── blog/
│   │   └── page.tsx          # /blog — hero, post cards, sidebar
│   ├── components/
│   │   └── page.tsx          # /components — typography/buttons/inputs showcase
│   ├── hooks/
│   │   └── useThemePreference.ts  # reads/writes theme to localStorage, syncs html.dark class
│   ├── favicon.ico
│   ├── globals.css           # Tailwind import, CSS variables, dark palette
│   ├── layout.tsx            # root layout: fonts, ThemeProvider, Header
│   └── page.tsx              # / — hero with "Visit Blog" and "View Components"
├── public/                   # static SVG assets
├── AGENTS.md                 # Next.js version warning (referenced by CLAUDE.md)
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

### Routing

Uses the App Router (`app/` directory). Current routes:

| URL           | File                      |
| ------------- | ------------------------- |
| `/`           | `app/page.tsx`            |
| `/blog`       | `app/blog/page.tsx`       |
| `/components` | `app/components/page.tsx` |

Folders prefixed with `_` are excluded from routing. Shared components live in `app/_components/`.

### Theme system

CSS variables in `app/globals.css` define two palettes — `:root` (light) and `html.dark` (dark) — covering `--bg`, `--fg`, `--card`, `--border`, `--muted`, `--accent`, `--hero-bg`, `--badge-bg`, `--badge-fg`. `app/_components/ThemeProvider.tsx` (Client Component) wraps the whole app, toggles the `dark` class on `<html>`, and persists the choice to `localStorage`. Default is light mode. `ThemeToggle.tsx` reads the context; `Header.tsx` is a Server Component that renders `ThemeToggle` as a Client Component child.

### Server / Client split

Pages and layouts are Server Components by default. Only `ThemeProvider` and `ThemeToggle` carry `'use client'`. Pass Server Component subtrees as `children` into Client Component wrappers — do not mark large component trees as client unnecessarily.

### Styling

Tailwind CSS v4 is configured entirely via `app/globals.css` (`@import "tailwindcss"`) — there is no `tailwind.config.js`. Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))`, enabling the `dark:` prefix to respond to the `.dark` class on `<html>`. Reference theme tokens in `className` with Tailwind's arbitrary-value syntax: `bg-[var(--bg)]`, `text-[var(--fg)]`, etc. Use `style={{}}` props for one-off values.

### Path alias

`@/*` resolves to the repo root (configured in `tsconfig.json`).

## Conventions

- **New page → update header**: whenever a new `app/<route>/page.tsx` is created, add a corresponding `<Link href="/<route>">` inside `app/_components/Header.tsx` in the same task.

## Next.js 16 Breaking Changes

- **Async-only request APIs** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` must be `await`ed. Use the generated `PageProps<'/path'>` / `LayoutProps<'/path'>` types for type-safe access.
- **Turbopack is the default** for both `next dev` and `next build`. Opt out with `--webpack`.
- **`middleware` → `proxy`** — rename the file and its named export to `proxy`. The edge runtime is not supported in proxy files.
- **`next lint` removed** — use `eslint` CLI directly. `next build` no longer runs linting.
- **`serverRuntimeConfig` / `publicRuntimeConfig` removed** — use environment variables (`NEXT_PUBLIC_` prefix for client-accessible values).
- **Parallel routes require `default.js`** — every `@slot` must have an explicit `default.js`; builds fail without it.
- **`revalidateTag` requires a second argument** — pass a `cacheLife` profile string, e.g. `revalidateTag('posts', 'max')`.
- **PPR** — `experimental.ppr` removed; opt in with top-level `cacheComponents: true`.
- **`cacheLife` / `cacheTag`** — stable, drop the `unstable_` prefix.
- **`next/legacy/image` deprecated** — use `next/image`.
- **`images.domains` deprecated** — use `images.remotePatterns`.
- **AMP removed entirely.**
- **`next dev` outputs to `.next/dev`**, separate from the `.next` directory used by builds.
