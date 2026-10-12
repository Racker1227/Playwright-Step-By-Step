import { test, expect } from "@playwright/test";

test("Locators", async ({ page }) => {
  //url
  await page.goto("https://www.saucedemo.com/");
  //wait
  await page.waitForTimeout(3000);

  //locators
  //locate id web element and fill username
  await page.locator("#user-name").fill("standard_user");

  //locate by id and fill password
  await page.locator("#password").fill("secret_sauce");

  //locate login button and click by using xpath
  await page.locator("//input[@type='submit']").click();

  //await page.waitForTimeout(2000);

  //verify successful login
  await expect(page).toHaveURL(/inventory.html/);

  /*
  //1str method to locate multiple web element
  //locate multiple web element
  const products =await page.$$("//div[@class='inventory_item_name ']");

  //count products
    console.log("Total no of products are: " + products.length);

    for(const product of products)
    {
        const name = await product.textContent();
        console.log(name); 
    }
*/

  //2nd method to locate multiple web element
  const products = await page.locator("//div[@class='inventory_item_name ']");

  //get count of products
  const count = await products.count();
  console.log("Total no of products are: " + count);

  //print each product name
  for (let i = 0; i < count; i++)
{
    const name = await products.nth(i).textContent();
    console.log(name);
  }
});
