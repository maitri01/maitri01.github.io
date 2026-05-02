import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const routes = [
  { url: "/", file: "01-home.png" },
  { url: "/work-experience/", file: "02-work-experience.png" },
  { url: "/projects/", file: "03-projects.png" },
  { url: "/cv-background/", file: "04-cv-background.png" }
];

test("capture previews", async ({ page }) => {
  const outDir = path.join(process.cwd(), "artifacts", "previews");
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1920, height: 1080 });
  for (const route of routes) {
    await page.goto(route.url, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, route.file), fullPage: true });
  }
});
