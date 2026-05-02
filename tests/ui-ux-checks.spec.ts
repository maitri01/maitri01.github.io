import { test, expect } from "@playwright/test";

test("content blocks and key phrases render", async ({ page }) => {
  await page.goto("/work-research/");
  await expect(page.locator("text=Watermark Radioactivity")).toBeVisible();
  await expect(page.locator("text=E-values")).toBeVisible();

  await page.goto("/benchmarks/");
  await expect(page.locator("text=Onboarding Automation")).toBeVisible();
  await expect(page.locator("text=European Cybersecurity & AI Hackathon Championship")).toBeVisible();
});
