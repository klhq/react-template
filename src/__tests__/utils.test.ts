import { expect, test } from "vitest";
import { cn } from "../lib/utils";

test("merges conditional classes and lets the last conflicting utility win", () => {
  expect(cn("px-2 text-sm", { hidden: false, block: true }, ["px-4", null])).toBe(
    "text-sm block px-4"
  );
});
