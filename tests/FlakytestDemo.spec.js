//flakytest


import { test, expect } from "@playwright/test";

test("FlakyTest-Facebook has title", async ({ page }, testInfo) => {
  
    console.log(`Repeat Index: ${testInfo.repeatEachIndex}`);
    //url
  await page.goto("https://www.facebook.com/");

  if(testInfo.repeatEachIndex === 1){ //for flaking test, we can use this condition to fail the test on 2nd iteration
     await expect(page).toHaveTitle("Wrong Title");

  }
  await expect(page).toHaveTitle("Facebook");
  //  await expect(page).toHaveTitle("Wrong Title");

});
