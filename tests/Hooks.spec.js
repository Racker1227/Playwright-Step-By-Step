import {test, expect, chromium} from '@playwright/test';

let browser
let page

test.beforeAll(async()=> {
    browser = await chromium.launch();
    page = await browser.newPage();

    //url
    await page.goto("https://www.saucedemo.com/");

    //Verify login page
    await expect(page.locator(".login_logo")).toHaveText("Swag Labs");
    console.log("Login page displayed successfully");

})

test.beforeEach(async() =>{

    console.log("-----------------BeforeEach-----------------")
    //url
    await page.goto("https://www.saucedemo.com/");
    //login
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    //click on  login button
    await page.locator("#login-button").click();

})


test("Test Product Page", async () => {

    /*  -- used in beforeEach
    //url ---used in berfore ALL
    //await page.goto("https://www.saucedemo.com/");

    //login
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    //click on  login button
    await page.locator("#login-button").click();

    */

    //verify url should contain inventory.html
    await expect(page).toHaveURL(/inventory.html/);
      
    //verify products title
    await expect(page.locator("//span[text()='Products']")).toBeVisible("Products");

     //take a screenshots  -- used in afterEach
    //await page.screenshot({path: 'screenshots/ProductPage.png'});

    await page.waitForTimeout(2000);

    //await page.close();  --ussed in afterAll


})

test("Add Product to Cart", async () =>{

    /* -- used in beforeEach
    //url -- used in beforeALL
    //await page.goto("https://www.saucedemo.com/");

    //login
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    //click on  login button
    await page.locator("#login-button").click();
    */


    //add Sauce Labs Backpack in Cart
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    
    //verify product is added or not 
    await expect(page.locator(".shopping_cart_badge")).toHaveText('1');

    console.log("Product added to cart");

    //take a screenshots -- used in afterEach
    //await page.screenshot({path: 'screenshots/AddToCart.png'});

    await page.waitForTimeout(2000);
    
    //await page.close();  --ussed in afterAll

})

test.afterEach(async({}, testInfo) => {
    console.log("----------------------------AfterEach-----------------")
    
    //take a screenshots
    await page.screenshot({path: `screenshots/${testInfo.title}.png`});

    //logout -- 3bar button
    await page.locator("#react-burger-menu-btn").click();

    //verify logout button is visible
    await expect(page.locator("#logout_sidebar_link")).toBeVisible();

    //locate logout button and click
    await page.locator("#logout_sidebar_link").click();

    console.log("Logout successful")



})

test.afterAll(async()=> {
    
    await page.close();

})
