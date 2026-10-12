
import {test, expect} from '@playwright/test'

test("Pagination Table", async ({page}) => {

    //url
    await page.goto("https://practice-automation.com/tables/");

    //locate table
    const table = page.locator("#tablepress-1");

    //count total no of columns
    const columns = table.locator("thead tr th");
    const totalColumns = await columns.count();
    console.log("Total Columns: ",totalColumns);
    expect(totalColumns).toBe(3);

    //count total no of rows
    const rows = table.locator("tbody tr");
    const totalRows =await rows.count();
    console.log("Total Rows: ",totalRows);

    //locate pagination buttons contains [1,2,3]
    const pages = page.locator("nav[aria-label='pagination'] button.dt-paging-button:not(.previous):not(.next)");
    
    //count total number of pages
    const totalPages = await pages.count();
    console.log("Total Pages: ", totalPages);

    //validation to ensure pagination exist
    expect(totalPages).toBeGreaterThan(0);

    // For loop to iterate pages
    // p is page index
    for( let p=0; p<totalPages; p++)
    {
        //nth works like an array index
        await pages.nth(p).click();

        //after clicking pagination table rows updated in DOM
        //now we will locate rows
        for(let i = 0; i<totalRows; i++)
        {
            // pick one row at a time
            const row = rows.nth(i);

            //each row has multiple cells/columns
            const cells = row.locator("td")

            //loop through all the cells in a row
            for(let j=0; j<await cells.count(); j++)
            {
                //read text from each cell and print
                console.log(await cells.nth(j).textContent());
            
            }
            console.log("------------------------------------------")
        }

    }


})