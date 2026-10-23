# React Template

A React + TypeScript SPA foundation with Vite, Tailwind v4 and shadcn components backed by Base UI. Automated tests cover pure logic and browser components. AI-assisted browser checks handle application workflows on demand.

## Start

Use Node.js **26.12.1** from .node-version and pnpm **12.15.0** from package.json. Switch to these versions with your version manager before installing.

```bash
pnpm install --frozen-lockfile
pnpm run browsers:install
pnpm dev
```

Open the URL printed by Vite, normally <http://127.0.0.1:5173>. The included example demonstrates semantic theme colors, a dialog and a labelled input. Replace src/App.tsx with your application as it grows.

## Commands

| Command                | Purpose                                            |
| ---------------------- | -------------------------------------------------- |
| pnpm dev               | Start the development server                       |
| pnpm test              | Watch both Vitest projects                         |
| pnpm run test:unit     | Run Node logic tests                               |
| pnpm run test:browser  | Run React component tests in headless Chromium     |
| pnpm run test:run      | Run both projects once                             |
| pnpm run test:ui       | Open Vitest UI                                     |
| pnpm run test:coverage | Write combined coverage to coverage/               |
| pnpm run typecheck     | Check application, tests and configuration types   |
| pnpm run lint          | Run typed ESLint and scoped JSX accessibility lint |
| pnpm run format        | Format project files and Tailwind classes          |
| pnpm run format:check  | Check formatting                                   |
| pnpm build             | Typecheck and build to dist/                       |
| pnpm preview           | Serve dist/ locally                                |
| pnpm run check         | Run peers, lint, formatting, coverage and build    |
| pnpm run ui:add dialog | Add a component using the pinned shadcn CLI        |

Run a single browser test with `pnpm run test:browser src/__tests__/App.test.tsx`. Add `-t "test name"` to filter by behavior.

Chromium downloads are separate from package installation. In Linux CI, install its system dependencies with pnpm exec playwright install --with-deps chromium. GitHub Actions does this before validation and uploads browser diagnostics on failure.

## Structure and choices

- src/components/ui contains editable shadcn/Base UI components. components.json records the base-nova preset.
- src/globals.css defines Tailwind v4 semantic tokens and light/dark palettes. Fonts are self-hosted through Fontsource.
- src/lib/utils.ts re-exports the cn helper selected by the current shadcn registry.
- `src/**/*.test.ts` runs in Node. `src/**/*.test.tsx` runs through Vitest Browser Mode and Playwright. Components use real browser DOM, events and CSS.

ESLint uses TypeScript project-service analysis and upstream React Hooks rules. The published eslint-plugin-jsx-a11y release does not declare ESLint 10 support, while ESLint 9 is EOL. Oxlint therefore handles only the explicitly configured JSX accessibility rules. The engines do not duplicate typed linting. See [tooling decisions](docs/tooling.md).

Prettier uses the official Tailwind plugin with the CSS entry and cn/clsx/cva support. TypeScript stays on 6.0 because typescript-eslint currently supports versions below 6.1. Vitest, its browser provider, UI and coverage package have matching exact versions.

The template leaves routing, API clients, authentication and forms frameworks to the application. Add them when you can provide a working example and tests for their behavior.

## Application workflow checks

Use AI browser tools to exercise application workflows when needed. The template keeps no standalone E2E specs or Playwright Test runner. The `playwright` package remains installed to launch Chromium for Vitest component tests; `pnpm run check` runs these tests and builds the application.
