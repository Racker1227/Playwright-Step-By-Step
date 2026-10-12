import {test,expect} from '@playwright/test';

test.skip("Mouse Hover Actions", async ({page}) => {

    //url
    await page.goto("https://the-internet.herokuapp.com/hovers");


    //hover() ;- mouse hover action
    await page.locator(".figure").first().hover();

    //verify name: user1
    await expect(page.locator("//h5[text()='name: user1']")).toBeVisible();

    await page.waitForTimeout(2000);

})

test.skip("Right click automate and alert handling", async ({page}) => {

    //url
    await page.goto("https://the-internet.herokuapp.com/context_menu");

    //alert handler
    page.on("dialog",async (dialog)=> {

        //print dialog message
        console.log(dialog.message());

        //verify dialog message 
        expect(dialog.message()).toBe("You selected a context menu")

        //await dialog accept
        await dialog.accept();
    })

    //right click action on box
    await page.locator("#hot-spot").click({button:"right"});

    await page.waitForTimeout(2000);
})

test.skip("Drag and Drop automation", async ({page}) => {

    //url
    await page.goto("https://testpages.eviltester.com/pages/interaction/drag-drop/");

    //drag and drop action
    await page.locator("#draggable1").dragTo(page.locator("#droppable1"));
    
    //after drop verfication 
    await expect(page.locator("#droppable1 p")).toHaveText("Dropped!");
    await page.waitForTimeout(2000);
    
    await page.locator("#draggable2").dragTo(page.locator("#droppable2"));
    await expect(page.locator("#droppable2 p")).toHaveText("Dropped!");

    await page.waitForTimeout(2000);


})

test("Double Click Automation", async ({page}) =>{ 

    //url
    await page.goto("https://testpages.eviltester.com/pages/interaction/javascript-events/");

    //double click action
    await page.locator("#ondoubleclick").dblclick();

    //verify double click action
    await expect(page.locator("#ondoubleclickstatus")).toHaveText("Event Triggered");

    await page.waitForTimeout(2000);
})