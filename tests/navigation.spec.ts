import { test, expect } from "@playwright/test";

const pages = ["/", "/work-research/", "/benchmarks/", "/technical-profile/"];

test("primary navigation pages render", async ({ page }) => {
  for (const route of pages) {
    await page.goto(route);
    await expect(page.locator("nav[aria-label='Primary']")).toBeVisible();
    await expect(page.locator("h1").first()).toBeVisible();
  }
});
