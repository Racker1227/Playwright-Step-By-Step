import { test, expect } from "@playwright/test";

test("CheckBox", async ({ page }) => {
  //url
  await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");

  //locate checkboxes

  //select 1st checkbox
  //await page.locator("//input[@type='checkbox']").first().check();

  // last checkbox
  //await page.locator("//input[@type='checkbox']").last().check();

  //select checkbox by index
   // await page.locator("//input[@type='checkbox']").nth(2).check();

   //select all checkboxes
   const AllCheckboxes =await page.locator("//input[@type='checkbox']").all();
   
   const checkboxCount =await page.locator("//input[@type='checkbox']").count();
   await expect(checkboxCount).toBeGreaterThan(0); // verify checkbox count is greater than 0

   for (const checkbox of AllCheckboxes)
    {
        await checkbox.check();
    }

  await page.waitForTimeout(2000); // wait for 2 seconds

});
