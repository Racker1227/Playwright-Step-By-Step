import {test,expect} from '@playwright/test';

test('Automate Multiple Tabs', async ({ page }) => {

    //url - open parent page
    await page.goto("https://the-internet.herokuapp.com/windows");

    //verify the text on the page
    await expect(page.locator("//h3[text()='Opening a new window']")).toHaveText("Opening a new window");

    console.log("Parent Page Title: " + await page.title());

    //Multiple tabs - child page
    //click on the link to open new tab - child page
    //Array destructuring to get the child page object - take the 1st object and store
    const [childPage] = await Promise.all([
        //operation1
        page.context().waitForEvent('page'), 
        //operation2
        page.locator("//a[text()='Click Here']").click()
        ])

    //wait for the child page to load
    await childPage.waitForLoadState();

    console.log("Child Page Title: " + await childPage.title());

    //verify the text on the child page
    await expect(childPage.locator("//h3[text()='New Window']")).toHaveText('New Window');

    //switch back to parent page
    await page.bringToFront();

    console.log("Back to Parent Page Title: " + await page.title());

    //close the child page
    await childPage.close();



})