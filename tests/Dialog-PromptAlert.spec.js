import { test, expect } from "@playwright/test";

test("Prompt alert test", async ({ page }) => {
  //url
  await page.goto(
    "https://testpages.eviltester.com/pages/basics/alerts-javascript/",
  );

  //dialog event listener before clicking the button
  //once - means this handler will run only one time
  page.once("dialog", async (dialog) => {
    //check what type of alert is it
    expect(dialog.type()).toBe("prompt");

    //read the msg shown inside the alert
    expect(dialog.message()).toContain("I prompt you");

    //verify the default input box
    expect(dialog.defaultValue()).toBe("change me");

    //Enter value in the input box of prompt alert and click ok button
    await dialog.accept("Rushikesh Wadme");

    //click cancel button on alert
    //await dialog.dismiss();
  });

  //locate promptalert button and click on it
  await page.getByText("Show prompt box").click();

  //verify that alert was handled successfully
  await expect(page.locator("#promptreturn")).toHaveText("Rushikesh Wadme");

  await page.waitForTimeout(2000);
});
