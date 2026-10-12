import {test, expect} from "@playwright/test";

test("Built in Locators",async ({page}) => {

    //url
    await page.goto("https://www.saucedemo.com/");

    //locator username filed
    await page.getByPlaceholder("Username").fill("standard_user");

    //locate password field
    await page.getByPlaceholder("Password").fill("secret_sauce");

    //locate login button and click
    await page.getByRole("button",{"name":"Login"}).click();

    //assertion
    await expect(page).toHaveURL(/inventory.html/);

    //locate title of the product by text by verifying the text
    await expect(page.getByText("Products")).toBeVisible();

    //locate product  --add productto cart
    await page.getByRole("button",{name:"Add to cart"}).first().click();

    //getByAltText locator
    await page.getByAltText("Sauce Labs Backpack").click();

});