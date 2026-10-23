# React Interview Template

A small React + TypeScript app for live coding. Vite serves the app, Tailwind handles styling, and Vitest with React Testing Library tests component behavior in jsdom. The starter contains one heading test.

## Start

Use Node.js **24.22.1** (recorded in `.node-version`) and pnpm **12.15.0** (recorded in `package.json`). Switch Node with your version manager and install the pinned pnpm version before continuing.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by Vite, normally <http://127.0.0.1:5173>. Development and preview servers bind to the local machine by default.

## Commands

| Command                                        | Purpose                                                              |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| `pnpm dev`                                     | Start the development server                                         |
| `pnpm test`                                    | Watch tests while editing                                            |
| `pnpm run test:run`                            | Run tests once                                                       |
| `pnpm run test:run src/__tests__/App.test.tsx` | Run one test file                                                    |
| `pnpm run test:ui`                             | Open the Vitest test interface                                       |
| `pnpm run test:coverage`                       | Run tests and write HTML/LCOV coverage to `coverage/`                |
| `pnpm run typecheck`                           | Check application, test, and build configuration types               |
| `pnpm run lint`                                | Check ESLint rules                                                   |
| `pnpm run format`                              | Format supported project files                                       |
| `pnpm run format:check`                        | Check formatting without changing files                              |
| `pnpm build`                                   | Check types and build to `dist/`                                     |
| `pnpm preview`                                 | Serve the production build locally                                   |
| `pnpm run check`                               | Check peers, lint, formatting, coverage, types, and production build |

CI uses the same pinned runtime and `pnpm run check`. Test commands import Vitest APIs explicitly. DOM matchers and cleanup are configured in `vitest.setup.ts`.

## Working on a question

Start in `src/App.tsx`; global styles are in `src/globals.css`. The `@/` import alias points to `src/`. Add behavior tests under `src/__tests__/` as the question develops. There is no routing or backend framework to configure.

React and Testing Library remain the core stack. Vite 8 supplies its Rolldown/Oxc build pipeline, so this template does not need a separate bundler or compiler setup. TypeScript stays on 6.0 because the installed typescript-eslint version supports versions below 6.1; upgrading to TypeScript 7 would currently exceed that supported range. Vitest, its UI, and its coverage provider use matching exact versions.
