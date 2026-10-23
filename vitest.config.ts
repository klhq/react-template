import { defineConfig, mergeConfig } from "vitest/config";
import { playwright } from "@vitest/browser-playwright";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: false,
      projects: [
        { test: { name: "unit", environment: "node", include: ["src/**/*.test.ts"] } },
        {
          test: {
            name: "browser",
            include: ["src/**/*.test.tsx"],
            setupFiles: ["./vitest.setup.ts"],
            browser: {
              enabled: true,
              provider: playwright(),
              headless: true,
              instances: [{ browser: "chromium" }],
            },
          },
        },
      ],
      coverage: {
        provider: "v8",
        include: ["src/**/*.{ts,tsx}"],
        exclude: ["src/main.tsx", "src/**/*.d.ts", "src/**/__tests__/**"],
        reporter: ["text", "html", "lcov"],
      },
    },
  })
);
