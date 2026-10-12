import { test, expect } from "@playwright/test";

test("Simple alert test", async ({ page }) => {
  //url
  await page.goto(
    "https://testpages.eviltester.com/pages/basics/alerts-javascript/",
  );

  //dialog event listener before clicking the button
  //once - means this handler will run only one time
  page.once("dialog", async (dialog) => {
    //check what type of alert is it
    expect(dialog.type()).toBe("alert");

    //read the msg shown inside the alert
    expect(dialog.message()).toContain("I am an alert box!");

    //click ok button on alert
    await dialog.accept();
  });

  //locate alert button and click on it
  await page.getByText("Show alert box").click();

  //verify that alert was handled successfully
  await expect(page.getByText("You triggered and handled the alert dialog")).toBeVisible();

  await page.waitForTimeout(2000);


});
