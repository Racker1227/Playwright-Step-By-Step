// OTHERS FILES IN PAGE FOLDER

import { test, expect } from "@playwright/test";

const LoginPage = require("../Pages/LoginPage");
const InventoryPage = require("../Pages/InventoryPage");
const ShoppingCartPage = require("../Pages/ShoppingCartPage");
const LogoutPage = require("../Pages/LogoutPage");

//POM:- Page Object Model
//Test1 - Add Product to Cart
test("Login and Add Product to Cart", async ({ page }) => {
  const login = new LoginPage(page);
  const logout = new LogoutPage(page);
  const inventory = new InventoryPage(page);
  const cart = new ShoppingCartPage(page);

  //open url
  await login.openWebsite();

  // login to application
  await login.loginWeb("standard_user", "secret_sauce");
  await page.waitForTimeout(2000);
  //Add product to cart
  await inventory.addProductToCart();
  await inventory.openCart();
  await page.waitForTimeout(2000);

  //Verify product added to cart or not
  console.log("Product Name: " + (await cart.getProductName()));
  await page.waitForTimeout(2000);

  //Logout from application
  await logout.clickBurgerMenuButton();
  await page.waitForTimeout(2000);
  await logout.clickLogoutButton();
});

//Test2 - Remove Product from Cart
test("Remove Product from Cart", async ({ page }) => {
  const login = new LoginPage(page);
  const logout = new LogoutPage(page);
  const inventory = new InventoryPage(page);
  //const cart = new ShoppingCartPage(page);

  //open url
  await login.openWebsite();

  // login to application
  await login.loginWeb("standard_user", "secret_sauce");
  await page.waitForTimeout(2000);
  //Add product to cart
  await inventory.addProductToCart();
  await page.waitForTimeout(2000);

  //remove product from cart
  await inventory.removeProduct();
  await page.waitForTimeout(2000);

  //Logout from application
  await logout.clickBurgerMenuButton();
  await page.waitForTimeout(2000);
  await logout.clickLogoutButton();
});
