import { test, expect } from "@playwright/test";

test("Interactive Dashboard & Slider Verification", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("text=200+ Participants")).toBeVisible();

  await page.goto("/implementation-lab/");
  const slider = page.locator("input[type='range']");
  await slider.fill("100");
  await expect(page.locator("#auroc")).toHaveText("0.529");

  const mathBlock = page.locator(".katex").first();
  await expect(mathBlock).toBeVisible();
});
