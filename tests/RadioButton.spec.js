import { test, expect } from "@playwright/test";

test("Radio Button", async ({ page }) => {
  //url
  await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");

  //locate radio button
  const yearRadioButton = page.locator("//input[@value='3']");

  //select radioButton year-3
  await yearRadioButton.check();

  //verify radio button is checked - validation
  await expect(yearRadioButton).toBeChecked();

  //verify if radio button is checked -retrived the value
  await expect(yearRadioButton.isChecked()).toBeTruthy();



});
