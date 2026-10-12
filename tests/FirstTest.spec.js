import { expect, test } from "@playwright/test";

test("Open Google page and check title", async ({ page }) => {
  await page.goto("https://www.google.com/");
  await page.waitForTimeout(5000);
  const pageTitle = await page.title();
  console.log("Page title is: " + pageTitle);
  const pageUrl = await page.url();
  console.log("Page URL is: " + pageUrl);
  await expect(page).toHaveTitle("Google");
});
