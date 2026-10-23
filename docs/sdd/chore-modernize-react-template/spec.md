# General-purpose React template modernization

## Goal

Provide a reusable React SPA template with browser-accurate tests, typed lint, accessible UI primitives and reproducible tooling.

## Scope

Implement the tooling research accepted by the user: Vitest Node and browser projects, Playwright E2E, ESLint typed lint and Oxlint-scoped JSX accessibility rules, Prettier Tailwind v4 configuration, and shadcn components backed by Base UI. Preserve the preceding dependency upgrade.

## Acceptance Criteria

- Frozen installation and peer checks pass with the pinned Node/pnpm versions.
- Node unit tests and browser component tests run as separate Vitest projects, with coverage reports.
- The starter uses a themed Card, Button, Input and Dialog from the selected UI foundation. A user can open the dialog, edit its labelled input, and dismiss it with Escape; focus returns to its trigger.
- Light and dark semantic tokens apply to the starter. The theme control changes the active appearance with an accessible name.
- Typed lint rejects unhandled promises and unsafe assignments. JSX lint rejects missing input labels. Test-specific lint checks apply to Vitest and E2E files.
- Prettier uses the Tailwind v4 CSS entry and sorts cn/clsx/cva class strings. Reformatting is idempotent.
- Playwright verifies the built application through a browser and reports diagnostics on failure. CI installs the browser and runs the same checks.
- README and AGENTS explain the general template, commands, test boundaries, UI additions and supported runtime accurately.

## Out of Scope

Routing, backend integration, authentication, server-state libraries and forms frameworks. Do not change the dedicated interview VS Code/Codex environment or publish remotely.

## Tasks

1. Preserve the tested dependency-upgrade baseline in local Git.
2. Configure the supported dependencies, test projects and typed lint; initialize UI foundations.
3. Drive the dialog interaction with a failing browser test, then implement the minimal starter demonstration.
4. Drive theme switching with a failing browser test, then implement the control.
5. Add E2E verification, CI, documentation and final validation.

## Verification

Frozen install, peer check, deliberate lint probes, formatting idempotence, Node and browser tests with coverage, typecheck, production build, Playwright E2E, actionlint and dependency audit.

## Compatibility decision

The published jsx-a11y ESLint plugin excludes ESLint 10. ESLint 9 is EOL. Keep ESLint 10 for typed/React/test rules and use Oxlint only for explicitly listed JSX accessibility rules, without duplicate correctness or type-aware engines.
