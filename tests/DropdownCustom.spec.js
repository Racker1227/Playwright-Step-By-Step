import{test,expect} from "@playwright/test";

test("Custom DropDown test", async ({page}) => {

    //url
    await page.goto("file:///C:/Users/rushi/Downloads/CustomDropDown.html");

    //locate dropdown
    const countryDropdown = page.locator("#countryDropdown");

    //CLICK TO OPEN DROPDOWN
    await countryDropdown.click();

    //locate all dropdown options
    const options = page.locator("#countryDropdown .options li");

    // loop through all options
    for (let i=0; i < await options.count(); i++)
    {
        const optionText =await options.nth(i).click();
        console.log(optionText);

        //check for required option
        if(optionText === "India")
        {
            await options.nth(i).click();
            break;
        }
        
    }



})