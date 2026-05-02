import { test } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";

const routes = [
  { url: "/", file: "01-home-dashboard.png" },
  { url: "/research-experience/", file: "02-research-experience.png" },
  { url: "/evaluation-suite/", file: "03-evaluation-suite.png" },
  { url: "/cv-skills/", file: "04-cv-skills.png" }
];

test("capture living previews", async ({ page }) => {
  const outDir = path.join(process.cwd(), "artifacts", "previews");
  fs.mkdirSync(outDir, { recursive: true });

  await page.setViewportSize({ width: 1920, height: 1080 });

  for (const route of routes) {
    await page.goto(route.url, { waitUntil: "networkidle" });
    await page.screenshot({ path: path.join(outDir, route.file), fullPage: true });
  }
});
