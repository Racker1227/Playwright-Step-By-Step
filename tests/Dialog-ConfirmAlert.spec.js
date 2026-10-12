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

    //click ok button on alert
    await dialog.accept();

    //click cancel button on alert
    //await dialog.dismiss();

  });

  //locate alert button and click on it
  await page.getByText("Show confirm box").click();

  //verify that alert was handled successfully
  await expect(page.getByText("You clicked OK, confirm returned true.")).toBeVisible();

  await page.waitForTimeout(2000);


});
