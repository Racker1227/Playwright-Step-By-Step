import {test, expect} from '@playwright/test';

test("Built in Locators2",async ({page}) => {

await page.goto("https://practice.expandtesting.com/login");

//locate username field by label
await page.getByLabel("username").fill("practice");
await page.getByLabel("password").fill("SuperSecretPassword!");

//locate login button and click
await page.getByRole("button",{"name":"Login"}).click();

//getByText - assertion
await expect(page.getByText("You logged into a secure area!")).toBeVisible();

//getByRole - assertion
await page.getByRole("link",{"name":"Home"}).click();

});   