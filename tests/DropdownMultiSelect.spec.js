import { test, expect } from "@playwright/test";

test("Multi Select Dropdown test", async ({ page }) => {
  //url
  await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");

  //locate multiselect dropdown
  const multiSelect = page.locator("//select[@name='multipleselect[]']");

  ////////////////Ways to select multiple options//////////////////////

  //1. using by value
  /*await multiSelect.selectOption([{value: "ms1"},{value: "ms3"}]);
    await page.waitForTimeout(2000);  */

  //2. using by label
  await multiSelect.selectOption([
    { label: "Selection Item 2" },
    { label: "Selection Item 4" },
  ]);
  //verify item is select or not
  await expect(multiSelect.locator("option:checked")).toContainText([
    "Selection Item 2",
    "Selection Item 4",
  ]);

  await page.waitForTimeout(2000);

  ////////////////Assertion/validation//////////////////////

  //1.Verify dropdown is multi-select
  await expect(multiSelect).toHaveAttribute("multiple");

  //2.Verify total number of options present in dropdown
  const options = multiSelect.locator("option");
  await expect(options).toHaveCount(4);

  //3.verify id item is selected or not
  await expect(multiSelect.locator("option:checked")).toContainText([
    "Selection Item 2",
    "Selection Item 4",
  ]);

  await expect(multiSelect.locator("option:checked")).not.toContainText([
    "Selection Item 1",
    "Selection Item 3",
  ]);

  //verify if dropdown contains particular option 'select Item 2'
  //Get all options elements from dropsown as an array
  const optionList = await options.all();

  //create a flag variable to track if the option is found
  let isPresent = false;

  //loop- through each option one by one
  for (const option of optionList) 
 {
    //for text
    /*
    //read the visible text of the option and trim any leading/trailing whitespace
    const OptionText = await option.textContent();
    if (OptionText?.trim() === "Selection Item 2") {
      //if match is found, set the flag to true and break the loop
      isPresent = true;
      break;
    }
    */
        //or//
        //for value

    //read the value attribute of the option 
    const value = await option.getAttribute("value");
    if (value === "ms2") {
      //if match is found, set the flag to true and break the loop
      isPresent = true;
      break;
    }


  }

  //finale assertion to check if the option was found
  await expect(isPresent).toBeTruthy();

  await page.waitForTimeout(5000);
});
