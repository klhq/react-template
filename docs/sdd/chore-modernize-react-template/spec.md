# General-purpose React template modernization

## Goal

Provide a reusable React SPA template with browser-accurate tests, typed lint, accessible UI primitives and reproducible tooling.

## Scope

Implement the tooling research accepted by the user: Vitest Node and browser projects, on-demand AI browser workflow checks, ESLint typed lint and Oxlint-scoped JSX accessibility rules, Prettier Tailwind v4 configuration, and shadcn components backed by Base UI. Preserve the preceding dependency upgrade.

## Acceptance Criteria

- Frozen installation and peer checks pass with the pinned Node/pnpm versions.
- Node unit tests and browser component tests run as separate Vitest projects, with coverage reports.
- The starter uses a themed Card, Button, Input and Dialog from the selected UI foundation. A user can open the dialog, edit its labelled input, and dismiss it with Escape; focus returns to its trigger.
- Light and dark semantic tokens apply to the starter. The theme control changes the active appearance with an accessible name.
- Typed lint rejects unhandled promises and unsafe assignments. JSX lint rejects missing input labels. Test-specific lint checks apply to Vitest files.
- Prettier uses the Tailwind v4 CSS entry and sorts cn/clsx/cva class strings. Reformatting is idempotent.
- Playwright drives Vitest browser component tests. CI installs Chromium and runs unit/component tests and a production build; AI browser tools handle application workflow verification on demand.
- README and AGENTS explain the general template, commands, test boundaries, UI additions and supported runtime accurately.

## Out of Scope

Routing, backend integration, authentication, server-state libraries and forms frameworks. Do not change the dedicated interview VS Code/Codex environment or publish remotely.

## Tasks

1. Preserve the tested dependency-upgrade baseline in local Git.
2. Configure the supported dependencies, test projects and typed lint; initialize UI foundations.
3. Drive the dialog interaction with a failing browser test, then implement the minimal starter demonstration.
4. Drive theme switching with a failing browser test, then implement the control.
5. Configure CI, documentation and final validation.

## Verification

Frozen install, peer check, deliberate lint probes, formatting idempotence, Node and browser tests with coverage, typecheck, production build, actionlint and dependency audit.

## Compatibility decision

The published jsx-a11y ESLint plugin excludes ESLint 10. ESLint 9 is EOL. Keep ESLint 10 for typed/React/test rules and use Oxlint only for explicitly listed JSX accessibility rules, without duplicate correctness or type-aware engines.

## Validation notes

The initial dialog and theme tests failed because their controls were absent, then passed after implementation. TypeScript ESLint probes reject unsafe assignment and floating promises. An Oxlint probe revealed that control-has-associated-label ignores native inputs by default; ignoreElements is now empty and a missing-label text input fails lint. Browser dependencies are prebundled explicitly so first-run optimization does not reload tests mid-execution.

The first full component/unit coverage run passed 4 tests with 86.66% lines and 67.85% branches. This measures the included example and wrappers, not application completeness.

A cold dependency-cache run passes all 4 unit/component tests. The browser binary is installed locally, CI includes its system dependencies, and actionlint accepts the workflow. Dependency audit reports zero advisories and frozen installation passes.

## User-directed scope correction

The user requested AI-driven end-to-end workflow checks instead of maintaining Playwright E2E scripts. Remove standalone E2E specs, runner/configuration, axe integration and E2E lint/CI wiring. Keep the Playwright browser driver, Chromium installation and the four existing Vitest unit/component tests.
