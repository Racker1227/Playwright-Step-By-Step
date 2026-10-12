import { test, expect } from '@playwright/test';

test('Record Video', async ({ page }) => {

    //url
  await page.goto('https://www.saucedemo.com/');
 
  await page.locator("#user-name").fill('standard_user');
 
  await page.locator("#password").fill('secret_sauce');

  await expect(page.locator("#login-button")).toBeVisible();
  await page.locator("#login-button").click();

  await page.waitForTimeout(2000);

});