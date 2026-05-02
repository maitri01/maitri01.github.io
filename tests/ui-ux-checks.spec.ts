import { test, expect } from "@playwright/test";

test("required content fidelity blocks render", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("text=Universität des Saarlandes")).toBeVisible();
  await page.getByRole("link", { name: "Work Experience" }).click();
  await expect(page).toHaveURL(/\/work-experience\/$/);
  await page.getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects\/$/);
  await page.getByRole("link", { name: "CV & Background" }).click();
  await expect(page).toHaveURL(/\/cv-background\/$/);
  await expect(page.getByRole("link", { name: "Download CV (PDF)" })).toBeVisible();
  await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
  await expect(page.getByRole("link", { name: "LinkedIn" })).toBeVisible();

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
