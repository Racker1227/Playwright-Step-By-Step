class ShoppingCartPage {

  constructor(page) {
    //Define page locators
    this.cartItem = page.locator("[data-test='inventory-item-name']");
    this.continueShoppingButton = page.locator("[data-test='continue-shopping']");
    this.checkOutButton = page.locator("[data-test='checkout']");
  }

  //
  async getProductName()
  {
    return await this.cartItem.textContent();
  }

  async continueShopping()
  {
    await this.continueShoppingButton.click();
  }

  async checkOut()
  {
    await this.checkOutButton.click();
  }


}

module.exports = ShoppingCartPage;


