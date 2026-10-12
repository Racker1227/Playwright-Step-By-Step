import {test,expect} from "@playwright/test";

test("Date Picker RedBus", async ({page}) => {
    

    //trip date
    const expectedDay = "8";
    const ecpectedMonthYear = "November 2026" 

    //url
    await page.goto("https://www.redbus.in/");
    await page.waitForLoadState("domcontentloaded");

    //open date of journey picker
    await page.locator("//div[@aria-label='Select date of journey']").click();

    //locate for calender month text
    const monthYearLocator= page.locator(".monthYear___62118b");
    
    await monthYearLocator.waitFor();

    //navigate month using Next button
    while(true)
    {
        const monthYearText = await monthYearLocator.innerText();
        console.log("Month Year Text: ",monthYearText);

        if(monthYearText.trim() === ecpectedMonthYear)
        {
            break;
        }

        // Click the next button to navigate to the next month
        await page.locator("i[aria-label^='Next month']").click();

        await page.waitForTimeout(1000); // Wait for the next month to load
    }

    //select the day
    const allDates = page.locator("div.calendarDate:not([aria-disabled='true']) span");

    const count = await allDates.count();

    for (let i = 0 ; i < count; i++)
    {
        const dateText = await allDates.nth(i).innerText();
        if(dateText.trim() === expectedDay)
        {
            await allDates.nth(i).click();
            console.log("Selected Date: ", ecpectedMonthYear, expectedDay);
            break;
        }
    }

    await page.waitForTimeout(2000);

})