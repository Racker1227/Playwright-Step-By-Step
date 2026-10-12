
import {test, expect} from '@playwright/test'

test("Pagination Table", async ({page}) => {

    //url
    await page.goto("file:///C:/Users/rushi/Downloads/tables.html");

    //locate table
    const tableBody = page.locator("#tableBody");

    //locate pagination buttons
    const pages = page.locator("#pagination button");

    //get total no of pages
    const totalPages = await pages.count();
    console.log("Total pages: ",totalPages);

    //validation: pagination should exist
    expect(totalPages).toBeGreaterThan(0);


    // For loop to iterate pages
    // p is page index
    for( let p=0; p<totalPages; p++)
    {
        //nth works like an array index
        await pages.nth(p).click();

        //loacte rows After page change
        const rows = tableBody.locator("tr");
        expect(await rows.count()).toBe(5);

        //loop through rows
        for(let i=0; i<await rows.count(); i++)
        {
            //Pick one row
            const row = rows.nth(i);

            //Locate all cells in the row
            const cells = row.locator("td");

            //Read cell data (ID, Naem, Price)
            for(let j=0; j<await cells.count(); j++)
            {
                const text = await cells.nth(j).textContent();
                console.log(text);

                if(text.includes("Router"))
                {
                   //Locate checkbox in the same row (usually last column)
                   const checkbox = row.locator("//input[@type='checkbox']");
                   //Check the checkbox
                   await checkbox.check();

                   console.log("Checkbox Selected")
                }
            }
            console.log("------------------------")
        }


       

    }


})