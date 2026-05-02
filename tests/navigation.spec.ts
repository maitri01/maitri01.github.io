import { test, expect } from "@playwright/test";

const pages = ["/", "/research-experience/", "/evaluation-suite/", "/cv-skills/"];

test("primary navigation pages render", async ({ page }) => {
  for (const route of pages) {
    await page.goto(route);
    await expect(page.locator("nav[aria-label='Primary']")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();
  }
});

test("katex and bento hover effects are visible", async ({ page }) => {
  await page.goto("/research-experience/");
  await expect(page.locator(".katex").first()).toBeVisible();

  await page.goto("/");
  const card = page.locator(".bento-card").first();
  await expect(card).toBeVisible();

  const beforeHover = await card.evaluate((el) => getComputedStyle(el).borderColor);
  await card.hover();
  await page.waitForTimeout(200);
  const afterHover = await card.evaluate((el) => getComputedStyle(el).borderColor);

  expect(afterHover).not.toBe(beforeHover);
});
