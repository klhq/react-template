import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("passes axe WCAG2A and WCAG2AA", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1, name: "React Template" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Try the dialog" })).toBeVisible();

    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();

    expect(results.violations).toEqual([]);
  });
});

test.describe("dialog interaction", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("opens the dialog, closes with Escape, restores trigger focus, and passes axe WCAG2A and WCAG2AA", async ({
    page,
  }) => {
    const trigger = page.getByRole("button", { name: "Try the dialog" });
    await expect(trigger).toBeVisible();
    await trigger.click();

    const dialog = page.getByRole("dialog", { name: "Build something new" });
    await expect(dialog).toBeVisible();

    const projectName = page.getByRole("textbox", { name: "Project name" });
    await projectName.fill("My next app");
    await expect(projectName).toHaveValue("My next app");

    const dialogA11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa"]).analyze();

    expect(dialogA11y.violations).toEqual([]);

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});

test.describe("theme toggling", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("toggles the document class and accessible name", async ({ page }) => {
    const html = page.locator("html");
    const themeToggle = page.getByRole("button", { name: "Switch to dark theme" });

    await expect(html).not.toHaveClass(/\bdark\b/);
    await expect(themeToggle).toBeVisible();

    await themeToggle.click();
    await expect(html).toHaveClass(/\bdark\b/);
    await expect(page.getByRole("button", { name: "Switch to light theme" })).toBeVisible();

    await page.getByRole("button", { name: "Switch to light theme" }).click();
    await expect(html).not.toHaveClass(/\bdark\b/);
    await expect(page.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
  });
});
