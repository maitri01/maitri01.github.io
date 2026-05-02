import { test, expect } from "@playwright/test";

test("required content fidelity blocks render", async ({ page }) => {
  await page.goto("/work-experience/");
  await expect(page.locator("text=Watermark Radioactivity")).toBeVisible();
  await expect(page.locator("text=E-values").first()).toBeVisible();

  await page.goto("/projects/");
  await expect(page.locator("text=European Cybersecurity & AI Hackathon Championship")).toBeVisible();
  await expect(page.locator("text=Onboarding Automation")).toBeVisible();

  await page.goto("/cv-background/");
  await expect(page.locator("text=In the German grading system")).toBeVisible();
  await expect(page.locator("text=In this grading system, 4.0 is the highest possible grade")).toBeVisible();
});
