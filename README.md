# React + Vite + Tailwind v4 + shadcn/ui (template)

Use this folder as a **starter template** when you want React, TypeScript, Vite, Tailwind CSS v4, and **shadcn/ui** (Radix + Luma preset) without wiring it up from scratch.

## What you get

| Piece | Notes |
|--------|--------|
| **React 19** + **TypeScript** | Vite React + SWC path via `@vitejs/plugin-react` |
| **Vite 8** | Fast dev server and build |
| **Tailwind CSS v4** | `@tailwindcss/vite` plugin (no separate PostCSS config required) |
| **shadcn/ui** | `radix-luma` style, CSS variables, `lucide-react` icons |
| **Path alias `@/`** | Maps to `src/` in Vite and TypeScript |

Global styles live in `src/index.css` (Tailwind, `tw-animate-css`, shadcn theme, Inter variable font).

## Use as a template (fastest)

1. **Copy** this entire project folder to your new location (or duplicate the repo).
2. **Rename** the app folder if you like, then open a terminal inside it.
3. **Set the package name** in `package.json` (`"name": "your-app-name"`).
4. Install and run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Typecheck (`tsc -b`) then production build |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |

## Add shadcn components

This project already ran `shadcn` init. To add UI pieces:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
```

Browse options at [shadcn/ui](https://ui.shadcn.com/docs/components). Imports use the `@/` alias (for example `@/components/ui/button`).

## If you recreate from zero (reference)

Use this checklist when you cannot copy this folder and must bootstrap again:

1. **Vite + React + TypeScript**

   ```bash
   npm create vite@latest my-app -- --template react-ts
   cd my-app
   npm install
   ```

2. **Tailwind v4 + Vite plugin**

   ```bash
   npm install tailwindcss @tailwindcss/vite
   ```

   Add the Tailwind plugin to `vite.config.ts` and put `@import "tailwindcss";` in your main CSS (see this repo’s `vite.config.ts` and `src/index.css`).

3. **Path alias `@` → `src`** (required before `shadcn init` on a solution-style `tsconfig`)

   - `tsconfig.json`: `compilerOptions.baseUrl` + `paths["@/*"]` → `["./src/*"]`
   - `tsconfig.app.json`: same `baseUrl` and `paths`
   - `vite.config.ts`: `resolve.alias` for `@` → `./src` (use `path` + `fileURLToPath` for ESM)

4. **shadcn**

   ```bash
   npx shadcn@latest init --template vite
   ```

   Pick your registry/style as needed (this template uses **Radix** + **Luma**).

## Project layout (high level)

```text
src/
  components/     # shadcn UI components (add more with CLI)
  lib/            # e.g. `cn()` helper from shadcn
  App.tsx
  main.tsx
  index.css       # Tailwind + theme imports
components.json   # shadcn config
vite.config.ts
tsconfig*.json
```

## Links

- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui – Vite](https://ui.shadcn.com/docs/installation/vite)
- [Manual install / aliases](https://ui.shadcn.com/docs/installation/manual#configure-import-aliases)
