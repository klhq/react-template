# Tooling decisions

Reviewed on 2026-10-24 for a reusable React SPA template.

## Testing

Use Vitest in Node for pure logic, Vitest Browser Mode for React components, and Playwright Test for application flows. Browser Mode follows Testing Library principles through vitest-browser-react, using real events and browser DOM rather than jsdom simulation. Keep component and E2E tests focused on different contracts.

Browser Mode has native ESM mocking constraints. Use the documented vi.mock API when a boundary requires mocking; do not patch sealed module namespaces. Browser binaries must be installed locally and in CI.

Sources: [Vitest component tests](https://vitest.dev/guide/browser/component-testing), [mocking modules](https://vitest.dev/guide/mocking/modules), [Playwright webServer](https://playwright.dev/docs/test-webserver).

## Lint and formatting

Use ESLint 10 with typescript-eslint recommendedTypeChecked/projectService and React Hooks. Use Oxlint only for explicitly selected JSX accessibility rules. The published jsx-a11y ESLint plugin excludes ESLint 10 from its peer range, and ESLint 9 reached EOL. This split keeps supported dependencies and avoids duplicate correctness/type analysis. Reassess when jsx-a11y publishes compatible peers.

Oxlint is a credible complete replacement: its type-aware engine reached stable and supports most typescript-eslint typed rules. A full migration should compare the project's required rules and React diagnostics before replacing ESLint.

Keep Prettier plus the official Tailwind plugin, configured with the v4 CSS entry and class helper names. Oxfmt offers built-in sorting and broad file support, while Biome 2.6 supports Markdown, YAML and improved Tailwind integration. Neither is required to solve this template's current formatting needs. Select one formatter for the repository.

Sources: [typed ESLint](https://typescript-eslint.io/getting-started/typed-linting/), [ESLint support](https://eslint.org/version-support/), [jsx-a11y package](https://www.npmjs.com/package/eslint-plugin-jsx-a11y), [Oxlint stable](https://oxc.rs/blog/2026-07-22-type-aware-linting-stable), [Tailwind formatter](https://github.com/tailwindlabs/prettier-plugin-tailwindcss), [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html), [Biome 2.6](https://biomejs.dev/blog/biome-v2-6/).

## UI

Use the shadcn base-nova preset with Base UI primitives, Tailwind semantic tokens and editable component source. The template owns the wrappers and should review upstream updates alongside its customizations. Keep the dependency set aligned with the installed registry instead of mixing primitives.

Mantine is a good alternative for a complete styled library. Material UI suits a Material Design requirement. React Aria offers a strong accessibility and internationalization foundation. They use different styling and maintenance models; the current template chooses source ownership and Tailwind customization.

Sources: [shadcn Base UI default](https://ui.shadcn.com/docs/changelog/2026-07-base-ui-default), [Base UI](https://base-ui.com/react/overview/about), [Mantine](https://mantine.dev/guides/vite/), [Material UI](https://mui.com/material-ui/getting-started/), [React Aria](https://react-aria.adobe.com/quality).
