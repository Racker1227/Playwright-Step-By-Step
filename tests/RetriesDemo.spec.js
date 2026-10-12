

import { test, expect } from "@playwright/test";

test("RetriesDemoTest-Facebook has title", async ({ page }, testInfo) => {
  
    console.log(`Retry Index: ${testInfo.retry}`);
    //url
  await page.goto("https://www.facebook.com/");

  
  if(testInfo.retry === 0){ //for flaking test, we can use this condition to fail the test on 2nd iteration
     await expect(page).toHaveTitle("Wrong Title");

  }

  await expect(page).toHaveTitle("Facebook");
   // await expect(page).toHaveTitle("Wrong Title");

});
