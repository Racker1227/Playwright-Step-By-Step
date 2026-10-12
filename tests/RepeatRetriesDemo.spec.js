
import { test, expect } from "@playwright/test";

test("RepeatEachDemo-Facebook has title", async ({ page }, testInfo) => {
  
    console.log(`Repeat Index: ${testInfo.repeatEachIndex}`);
    //url
  await page.goto("https://www.facebook.com/");
await expect(page).toHaveTitle("Facebook");
  //  await expect(page).toHaveTitle("Wrong Title");

});
