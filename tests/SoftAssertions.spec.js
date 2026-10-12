import {test, expect} from '@playwright/test';

test('Soft Assertioms', async ({page}) => {

    //url
    await page.goto('https://www.saucedemo.com/');
/*
    //Hard assertion
    //verify page title
    await expect(page).toHaveTitle('Swag Labs');

    //verify page url
    await expect(page).toHaveURL('https://www.saucedemo.com/'); 
*/

    //Soft assertion
    //verify page title
    await expect.soft(page).toHaveTitle('Swag Labs');

    //verify page url
    await expect.soft(page).toHaveURL('https://www.saucedemo1.com/'); 
    await page.waitForTimeout(5000);



    //enter username and password
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator("//input[@type='submit']").click();




});