import {test, expect} from '@playwright/test'

test("Nested Frame Demo test", async ({page}) => {

    //url
    await page.goto("file:///C:/Users/rushi/Downloads/nested-frame.html");

    //Switch to parent frame - outer frame
    const parentFrame = await page.frame("parentFrame");
    //verify parent frame text to be visible
    await expect(parentFrame.locator("//p[normalize-space()='This is the parent frame.']")).toBeVisible();

    //switch to inner frame
    const childFrame = parentFrame.frameLocator("//iframe[@name='childFrame']");
    //verify text field in the childframe and verify textfield
    await expect(childFrame.locator("//p[text()='This is a nested (child) frame.']")).toHaveText("This is a nested (child) frame.");

    await page.waitForTimeout(2000);

})