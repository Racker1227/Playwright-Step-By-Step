//Reporters(command line) -npx playwright test Reporters.spec.js --reporter=list
//1. list -npx playwright test Reporters.spec.js --reporter=list
//2. dot -npx playwright test Reporters.spec.js --reporter=dot
//3. json -npx playwright test Reporters.spec.js --reporter=json
// 4. html -npx playwright test Reporters.spec.js --reporter=html
//5. line -npx playwright test Reporters.spec.js --reporter=line
//6. junit -npx playwright test Reporters.spec.js --reporter=junit


import {test, expect} from '@playwright/test';

test('SauceDemo Login', async ({page}) => {


    //url
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();   


})

test("Playwright has titile", async ({page}) => {

    //url
    await page.goto('https://www.playwright.dev/');
    await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

})

test("Facebook has titile", async ({page}) => {

    //url
    await page.goto('https://www.facebook.com/');
    await expect(page).toHaveTitle("Facebook");
})   

