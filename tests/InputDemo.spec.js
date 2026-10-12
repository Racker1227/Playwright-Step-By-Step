import { test, expect } from "@playwright/test";

test("InputDemo", async ({ page }) => {
  //url
  await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");

  //locate input first name box
  const firstName = page.locator("//input[@name='firstname']");

  //Input box is visible or not
  await expect(firstName).toBeVisible();

  //input box is empty or not
  await expect(firstName).toBeEmpty();

  //input box is enable or not
  await expect(firstName).toBeEnabled();

  //input box is editable or not
  await expect(firstName).toBeEditable();

  //enter a first name value
  await firstName.fill("Amit");

  await page.waitForTimeout(5000);

  
});
