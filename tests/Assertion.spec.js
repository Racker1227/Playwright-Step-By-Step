import { expect, test } from "playwright/test";

test("Assertion test", async ({ page }) => {
  //url
  await page.goto("https://www.saucedemo.com/");

  //assertions
  //1. page level assertions
  // verify the title
  await expect(page).toHaveTitle("Swag Labs");

  // verify page url
  await expect(page).toHaveURL("https://www.saucedemo.com/");

  //2. Element state Assertions
  // locate the username and password
  const usernameInput = page.locator("#user-name");
  const passwordInput = page.locator("#password");
  const LoginButton = page.locator("#login-button");

  //verify input field of usernaem and password
  await expect(usernameInput).toBeVisible();
  await expect(passwordInput).toBeVisible();

  //verify input field of username and password is enabled and editable
  await expect(usernameInput).toBeEnabled();
  await expect(passwordInput).toBeEnabled();
  await expect(LoginButton).toBeEnabled();

  await expect(usernameInput).toBeEditable();
  await expect(passwordInput).toBeEditable();

  //Attribuite assertions
  await expect(usernameInput).toHaveAttribute("placeholder", "Username");
  await expect(LoginButton).toHaveAttribute("type", "submit");

  //3. text & value assertions
  await usernameInput.fill("standard_user");
  await expect(usernameInput).toHaveValue("standard_user");

  await passwordInput.fill("secret_sauce");
  await expect(passwordInput).toHaveValue("secret_sauce");

  await LoginButton.click();

  // page and text assertions after login
  //verify user navigateed to inventory page
  await expect(page).toHaveURL(/inventory/);

  //verify products page heading
  const productTitle = page.locator(".title");

  await expect(productTitle).toBeVisible();
  await expect(productTitle).toHaveText("Products");
  await expect(productTitle).toContainText("Prod");
  //negative assertion - verify the product title is not equal to "Product"
  await expect(productTitle).not.toHaveText("Inventory");

  //class assertion
  await expect(productTitle).toHaveClass("title");

  //class assertion - verify shoping cart icon is present
  const cartIcon = page.locator(".shopping_cart_link");
  await expect(cartIcon).toHaveClass("shopping_cart_link");

  //count assertion - verify number of products displayed on the page
  // verify total number of products displayed on the page
  const productItems = page.locator(".inventory_item_name ");
  await expect(productItems).toHaveCount(6);

  //Screenshot/Visual assertion - verify screenshot of the product page
  //locate the product item
  const bagItem = page.getByAltText("Sauce Labs Backpack");

  //when ur run the code for screenshot assertion for the first time,
  // it will create a baseline screenshot in the test-results folder.
  // run:-npx playwright test Assertion.spec.js --update-snapshots --headed

  //compare the screenshot with the baseline screenshot
  await expect(bagItem).toHaveScreenshot("bagItem.png");

  //after running the test, it will compare the screenshot with the baseline screenshot and if there is any difference, it will fail the test and show the difference in the test report.
  //run:-npx playwright test Assertion.spec.js --headed

  //screenshot verification of shoping cart for dynamic content, we can use mask to ignore the dynamic content in the screenshot comparison.
  await expect(page).toHaveScreenshot("cartIcon.png", {
    mask: [page.locator(".shopping_cart_badge")],
  });
});
