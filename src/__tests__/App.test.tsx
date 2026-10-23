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
