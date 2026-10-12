import { test, expect } from "@playwright/test";

test("iFrame test", async ({ page }) => {
  //url
  await page.goto("file:///C:/Users/rushi/Downloads/index.html");

  //count number of frmaes
  const allFrame = page.frames();
  console.log("Total no of Frames: ", allFrame.length);

  //Framelocator----always use frameLocator
  //locate left frame
  const leftFrame = page.frameLocator("//iframe[@name='leftFrame']");
  //and in the frame locate name field
  await leftFrame.locator("//input[@name='name']").fill("Rushikesh");
  await leftFrame.locator("//input[@name='email']").fill("rushi@gmail.com");

  //locate right frame
  const rightFrame = page.frame("rightFrame");
  await rightFrame.locator("select").selectOption("Option Two");
  await rightFrame.getByText("Click Me").click();

  await page.waitForTimeout(3000);
});
