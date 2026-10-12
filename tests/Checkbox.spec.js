import { test, expect } from "@playwright/test";

test("CheckBox", async ({ page }) => {
  //url
  await page.goto("https://www.techlistic.com/p/selenium-practice-form.html");

  //locate checkboxes
  const UTFCheckbox = page.locator("#tool-0");
  const propractorCheckbox = page.locator("#tool-1");
  const seleniumCheckbox = page.locator("#tool-2");
/*
  await UTFCheckbox.check(); // check UTF checkbox
  //verify UTF checkbox is checked - validation
  await expect.soft(UTFCheckbox).toBeChecked();

  //verify protractor checkbox is checked
  await expect.soft(propractorCheckbox).toBeChecked(); // check protractor checkbox ==failed

`//verify selenium checkbox is not checked`
    await expect.soft(seleniumCheckbox).not.toBeChecked(); // check selenium checkbox
*/

const checkboxes = [UTFCheckbox, propractorCheckbox, seleniumCheckbox];

//for loop to check all checkboxes

for (const checkbox of checkboxes)
{
    //check the checkboxes
    await checkbox.check();
    //verify the checkboxes are checked
    await expect(checkbox).toBeChecked();

}

// for loop + if condition to uncheck the checkboxes

for (const checkbox of checkboxes)
{
    const isChecked = await checkbox.isChecked(); //check true or false
    //if condition to uncheck the checkboxes
    if(isChecked)
    {
        await checkbox.uncheck();
        //verify the checkbox are unchecked
        await expect(checkbox).not.toBeChecked();
    }

}

 await page.waitForTimeout(2000); // wait for 2 seconds

});
