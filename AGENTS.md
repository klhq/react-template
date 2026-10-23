# React template guidelines

This is a general-purpose React SPA template. Use pnpm 12.15.0 and Node 26.12.1, as recorded in package.json and .node-version.

## Commands

- pnpm install --frozen-lockfile: reproduce dependencies.
- pnpm run browsers:install: install Chromium for component tests.
- pnpm dev: serve the application locally.
- pnpm run test:unit: run pure logic tests in Node.
- pnpm run test:browser: run React component tests in Chromium.
- pnpm run test:run: run both Vitest projects once.
- pnpm run test:coverage: run both projects with coverage.
- pnpm build: check types and build the application.
- pnpm run check: run the full local and CI validation.
- pnpm run ui:add <component>: add components with the pinned shadcn CLI.

## Implementation

Keep TypeScript strict. Fix type errors instead of using any, ts-ignore or broad assertions. Use function components and explicit props. React 19 supports ref as a prop; follow the installed primitive API when wrapping components.

Use the @/ alias for src imports. Add folders when their contents need them. Local component state belongs in useState; add shared state or server-data libraries when the application needs them.

Use semantic Tailwind tokens such as bg-background and text-foreground. UI components under src/components/ui come from shadcn with Base UI primitives. Preserve accessible names, keyboard behavior, visible focus and disabled states when customizing them. Add primitives from the existing base-nova preset rather than mixing UI foundations.

Prettier owns formatting and Tailwind class order. ESLint owns typed correctness, React rules and test rules. Oxlint checks only the JSX accessibility rules listed in .oxlintrc.json. Do not add duplicate type-aware rules to Oxlint or suppress peer compatibility warnings.

## Tests

Place pure logic tests in src/**/\*.test.ts and React tests in src/**/*.test.tsx. Import test and expect from vitest. Browser tests use vitest-browser-react and vitest/browser locators. The setup loads application CSS and enables React Strict Mode. Use await expect.element for browser assertions and real user events; avoid implementation-state or class-name assertions.

Use available AI browser tools for end-to-end workflow checks on demand. Report the flows exercised and results. The template does not maintain a separate E2E spec suite. Playwright is a driver dependency for Vitest Browser Mode.

Before completing changes, run pnpm run check. For fresh dependencies, also verify frozen installation and pnpm audit. Update README and test examples when changing the template contract.
