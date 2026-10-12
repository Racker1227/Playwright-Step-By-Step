// command for allure report generation -
//1.allure generate allure-results --clean
//2.allure open allure-repor --use-existing-server

import { test, expect } from "@playwright/test";

test("SauceDemo Login", async ({ page }) => {
  //url
  await page.goto("https://www.saucedemo.com/");
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
});

test("Playwright has titile", async ({ page }) => {
  //url
  await page.goto("https://www.playwright.dev/");
  await expect(page).toHaveTitle(
    "Fast and reliable end-to-end testing for modern web apps | Playwright",
  );
});

test("Facebook has titile", async ({ page }) => {
  //url
  await page.goto("https://www.facebook.com/");
  await expect(page).toHaveTitle("Facebook");
});
