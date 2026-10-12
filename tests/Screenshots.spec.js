import {test, expect} from '@playwright/test';


test("Visible Page Screenshots", async ({page}) => {

    //url
    await page.goto("https://www.saucedemo.com/");

    
//Create a Data Object that  contains the current date and time 
const now = new Date();

//Create timestamp string using the current date and time
const timestamp =

    now.getDate() + "-" +// Get the current day(1-31)
    (now.getMonth() + 1) + "-" + //Get the current month(0-11)
    now.getFullYear() + "-" + //Get the current year 
    now.getHours() + "-" + //Get the current Hour (0-23)
    now.getMinutes() + "-" + //Get the current minute (0-59)
    now.getSeconds() // Get the current second(0-59)



    //capture screenshot
    await page.screenshot({
        path:"screenshots/" + timestamp+ "_LoginPage.png"
    });

})


test("Full Page Screenshots", async ({page}) => {

    //url
    await page.goto("https://www.facebook.com/");

        
//Create a Data Object that  contains the current date and time 
const now = new Date();

//Create timestamp string using the current date and time
const timestamp =

    now.getDate() + "-" +// Get the current day(1-31)
    (now.getMonth() + 1) + "-" + //Get the current month(0-11)
    now.getFullYear() + "-" + //Get the current year 
    now.getHours() + "-" + //Get the current Hour (0-23)
    now.getMinutes() + "-" + //Get the current minute (0-59)
    now.getSeconds() // Get the current second(0-59)



    //capture screenshot
    await page.screenshot({
        path:"screenshots/" + timestamp+ "_FullLoginPage.png",fullPage:true
    });

})


test("Specific Element Screenshots", async ({page}) => {

    //url
    await page.goto("https://www.facebook.com/");

        
//Create a Data Object that  contains the current date and time 
const now = new Date();

//Create timestamp string using the current date and time
const timestamp =

    now.getDate() + "-" +// Get the current day(1-31)
    (now.getMonth() + 1) + "-" + //Get the current month(0-11)
    now.getFullYear() + "-" + //Get the current year 
    now.getHours() + "-" + //Get the current Hour (0-23)
    now.getMinutes() + "-" + //Get the current minute (0-59)
    now.getSeconds() // Get the current second(0-59)



    //capture screenshot
    await page.locator("#_R_c9l6neappb6amH1_").screenshot({
        path:"screenshots/" + timestamp + "_SpecificElement.png"
    });

})