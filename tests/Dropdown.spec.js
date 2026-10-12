import { test, expect } from "@playwright/test";

test("DropDown test", async ({ page }) => {
  //url
  await page.goto("https://practice.expandtesting.com/dropdown");

  //locate dropdown
  const countrydropdown = page.locator("//select[@name='country']");

  //ways to select options
  //1. by using label
  await countrydropdown.selectOption({ label: "India" });
  expect(countrydropdown).toHaveValue('IN');
  await page.waitForTimeout(2000); // wait for 2 seconds

  //2. by using value
  await countrydropdown.selectOption({value: "HT"});
  expect(countrydropdown).toHaveValue("HT");
  await page.waitForTimeout(2000); // wait for 2 seconds

  //Dont Use index method instead of index use label or value
  //3. by using index --- avoid using index as it is not a good practice, but still we can use it if we want to select the option by index
  //3.1 1st method
  await countrydropdown.selectOption({index: 3});
  expect(countrydropdown).toHaveValue("AL");
  await page.waitForTimeout(2000); // wait for 2 seconds

   //3.2 2nd method
   //retrieve the selected option value and verify it is not empty
  await countrydropdown.selectOption({index: 1});
  const selectValue = await countrydropdown.inputValue();
  expect(selectValue).not.toBe('');

  //Assertion-1 validate the number of options
  //Locate all the option in the dropdown
  const options = countrydropdown.locator("option");
  //count
  const optionCount = await options.count();
  //console.log(optionCount);
  //assert that drop down has more than 0 options
  expect(optionCount).toBeGreaterThan(200);

  //Assertion-2 validate presence of value
  //Retrive the visible text of all option elements and store it in an array
  const allCountries = await options.allTextContents();

  //verify that the array contains the value "India"
  expect(allCountries).toContain("India");


  await page.waitForTimeout(2000); // wait for 2 seconds

  




  

});
