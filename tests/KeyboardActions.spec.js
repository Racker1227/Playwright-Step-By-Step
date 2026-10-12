import { test, expect } from "@playwright/test";

test.skip("Keyboard Actions", async ({ page }) => {
  //url
  await page.goto("https://the-internet.herokuapp.com/key_presses?");

  //Press A Key from keyboard
  await page.keyboard.press("A");

  //verify result
  await expect(page.locator("#result")).toHaveText("You entered: A");

  await page.waitForTimeout(2000);

  //Press Enter Key from keyboard
  await page.keyboard.press("Enter");

  //verify result
  await expect(page.locator("#result")).toHaveText("You entered: ENTER");

  await page.waitForTimeout(2000);

  //Press CTRL Key from keyboard
  await page.keyboard.press("Control");

  //verify result
  await expect(page.locator("#result")).toHaveText("You entered: CONTROL");

  await page.waitForTimeout(2000);


});

test.skip("Keyboard Action Copy Paste", async ({page}) => {

    //url
    await page.goto("file:///C:/Users/rushi/Downloads/KeyBoardAction.html")

    //click on 1st text box
    await page.locator("#box1").click();

    //type text using keyboard
    await page.keyboard.type("Hello World");
    
    //press Ctrl+A to select all text
    await page.keyboard.press("Control+A");
    //press control+C to copy text
    await page.keyboard.press("Control+C");

    //click on 2nd text box
    await page.locator("#box2").click();

    //press control+V to paste text
    await page.keyboard.press("Control+V");

    //verify the 2nd text box value
    await expect(page.locator("#box2")).toHaveValue("Hello World");

    await page.waitForTimeout(2000);


})


test("Textarea text selection using Shift + Arrow", async ({page}) => {

     //url
    await page.goto("file:///C:/Users/rushi/Downloads/KeyBoardAction.html")

    
    //click on 1st text box
    await page.locator("#box1").click();

    //type text using keyboard
    await page.keyboard.type("Hello World");

    //press HOME button to move cursor to start of text
    await page.keyboard.press("Home");

    //Hold Shift key 
    await page.keyboard.down("Shift");

    //Select text using arrowleft
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");
    await page.keyboard.press("ArrowRight");

    //Release Shift key
    await page.keyboard.up("Shift");

    await page.waitForTimeout(2000);
    
})