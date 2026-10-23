import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import App from "../App";

test("renders the starter heading in a browser", async () => {
  const screen = await render(<App />);
  await expect.element(screen.getByRole("heading", { level: 1 })).toBeVisible();
});

import { page, userEvent } from "vitest/browser";

test("opens a labelled dialog, accepts input and restores focus after Escape", async () => {
  const screen = await render(<App />);
  const trigger = screen.getByRole("button", { name: "Try the dialog" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Build something new" });
  await expect.element(dialog).toBeVisible();
  const input = dialog.getByRole("textbox", { name: "Project name" });
  await input.fill("My next app");
  await expect.element(input).toHaveValue("My next app");
  await userEvent.keyboard("{Escape}");
  await expect.element(dialog).not.toBeInTheDocument();
  await expect.element(trigger).toHaveFocus();
});

test("switches between light and dark appearance", async () => {
  document.documentElement.classList.remove("dark");
  const screen = await render(<App />);
  const main = screen.getByRole("main");
  const lightBackground = getComputedStyle(main.element()).backgroundColor;
  await screen.getByRole("button", { name: "Switch to dark theme" }).click();
  await expect.element(screen.getByRole("button", { name: "Switch to light theme" })).toBeVisible();
  expect(getComputedStyle(main.element()).backgroundColor).not.toBe(lightBackground);
  await screen.getByRole("button", { name: "Switch to light theme" }).click();
  await expect.element(screen.getByRole("button", { name: "Switch to dark theme" })).toBeVisible();
  expect(getComputedStyle(main.element()).backgroundColor).toBe(lightBackground);
});
