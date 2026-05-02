import { test, expect } from "@playwright/test";

test("timeline nodes and terminal commands are interactive", async ({ page }) => {
  await page.goto("/research-experience/");
  await page.hover("button[data-hop='2']");
  await expect(page.locator("#hop-stats")).toContainText("p-value: 0.041");

  await page.goto("/evaluation-suite/");
  await page.click("button[data-cmd='run model-tracer']");
  await expect(page.locator("#terminal-output")).toContainText("rar-xxl detected (Conf: 0.96)");

  await page.click("button[data-cmd='eval --metric']");
  await expect(page.locator("#terminal-output")).toContainText("TPR @ 1% FPR");
});
