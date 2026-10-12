import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  //url
  await page.goto("https://www.saucedemo.com/");
  //wait
  await page.waitForTimeout(3000);

  //locators
  //locate id web element and fill username
  await page.locator("#user-name").fill("standard_user");

  //locate by id and fill password
  await page.locator("#password").fill("secret_sauce");

  //locate login button and click by using xpath
  await page.locator("//input[@type='submit']").click();

  //await page.waitForTimeout(2000);

  //verify successful login
  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator("//span[text()='Products']")).toContainText("Products");

  const pageTitle =page.locator(".title");
  await expect(pageTitle).toBeVisible();


});
