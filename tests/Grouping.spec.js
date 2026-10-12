import { test, expect } from "@playwright/test";

//----------File Level Hooks ----------
test.beforeAll(async () => {
    console.log("File Level beforeAll");
  });

  test.beforeEach(async () => {
    console.log("File Level beforeEach");
  });

  test.afterEach(async () => {
    console.log("File Level afterEach");
  });

  test.afterAll(async () => {
    console.log("File Level afterAll");
  });


test.describe("Login Test", () => {

  //Group Level Hooks  
  test.beforeAll(async () => {
    console.log("Login Group beforeAll");
  });

  test.beforeEach(async () => {
    console.log("Login Group beforeEach");
  });

  test.afterEach(async () => {
    console.log("Login Group afterEach");
  });

  test.afterAll(async () => {
    console.log("Login Group afterAll");
  });

  test("valid login", async ({ page }) => {
    console.log("Valid Login Test Execution");
  });

  test("Invalid login", async ({ page }) => {
    console.log("Invalid Login Test Execution");
  });
});

test.describe("Product Test", () => {

   //Group Level Hooks  
  test.beforeAll(async () => {
    console.log("Product Group beforeAll");
  });

  test.beforeEach(async () => {
    console.log("Product Group beforeEach");
  });

  test.afterEach(async () => {
    console.log("Product Group afterEach");
  });

  test.afterAll(async () => {
    console.log("Product Group afterAll");
  });
  


  test("Verify Product Page", async ({ page }) => {
    console.log("Veify Product Page Test Execution");
  });

  test("Add Product", async ({ page }) => {
    console.log("Add Product Test Execution");
  });

  test("Remove Product", async ({ page }) => {
    console.log(" Product Test Execution");
  });
});

test.describe("Checkout Test", () => {

     //Group Level Hooks  
  test.beforeAll(async () => {
    console.log("Checkout Group beforeAll");
  });

  test.beforeEach(async () => {
    console.log("Checkout Group beforeEach");
  });

  test.afterEach(async () => {
    console.log("Checkout Group afterEach");
  });

  test.afterAll(async () => {
    console.log("Checkout Group afterAll");
  });



  test("Complete Order", async ({ page }) => {
    console.log("Complete order Test Execution");
  });

  test("Cancel Test", async ({ page }) => {
    console.log("Cancel Test Execution");
  });
});
