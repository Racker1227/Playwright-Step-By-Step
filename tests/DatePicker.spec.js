import { test, expect } from "@playwright/test";

test("DatePicker2", async ({ page }) => {
  //define target date
  const targetYear = "2027";
  const targetMonth = "March";
  const targetDate = "25";

  //url
  await page.goto("file:///C:/Users/rushi/Downloads/DatePicker.html");

  //click on date picker
  await page.locator("#datepickerNoDropdown").click();

  //wait until tyhe calender is visible to ensure stability
  const calender = page.locator("#ui-datepicker-div");
  await expect(calender).toBeVisible();

  //use a loop for nect button until target month and year is visible
  while(true)
  {
    //get the current displayed month and year from the calender
    const currMonth = (await page.locator(".ui-datepicker-month").textContent()).trim();
    const currYear = (await page.locator(".ui-datepicker-year").textContent()).trim();

    console.log("Current Month: ", currMonth, "Current Year: ", currYear);

    //if the current month and current year match our target break a loop
    if(currMonth === targetMonth && currYear === targetYear)
    {
        break;
    }
    //if not click on the NEXT button to navigator to the next month
    await page.locator("//span[text()='Next']").click();
  }

  //select the target date from calender
  const dates = await page.locator("//td[@data-handler='selectDay']").elementHandles();
  for(const dateElement of await dates)
  {
    const day = (await dateElement.textContent()).trim();
    if(day===targetDate)
    {
        await dateElement.click();
        break;
    }
  }
  await page.waitForTimeout(2000);

});

test.skip("Date Picker Dropdown", async ({ page }) => {
  //url
  await page.goto("file:///C:/Users/rushi/Downloads/DatePicker.html");

  //await page.locator("#datepicker").fill("02/21/2027");
  //OR
  //select date using dropdown option
  //define target date
  const targetYear = "2027";
  const targetMonth = "Mar";
  const targetDate = "25";

  //click on date picker
  await page.locator("#datepicker").click();

  //wait until tyhe calender is visible to ensure stability
  const calender = page.locator("#ui-datepicker-div");
  await expect(calender).toBeVisible();

  //seelect target month, year and date from dropdown
  await page.selectOption(".ui-datepicker-month", { label: targetMonth });
  await page.selectOption(".ui-datepicker-year", { label: targetYear });
  await page
    .locator(
      `.ui-datepicker-calendar a.ui-state-default:text-is('${targetDate}')`,
    )
    .click();

  //assert the selected date is correct
  await expect(page.locator("#datepicker")).toHaveValue("03/25/2027");

  await page.waitForTimeout(2000);
});
