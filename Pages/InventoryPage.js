class InventoryPage {

  constructor(page) {
    //store the playwright page object
    this.page = page;

    //Define page locators
    this.addToCartButton = page.locator("#add-to-cart-sauce-labs-backpack"); 
    this.shoppingCart = page.locator(".shopping_cart_badge");
    this.removeButton = page.locator("#remove-sauce-labs-backpack");

  }

  //Add Product to cart
  async addProductToCart()
  {
    await this.addToCartButton.click();
  }

  async openCart()
  {
    await this.shoppingCart.click();
  }

  async removeProduct()
  {
    await this.removeButton.click();
  }

}

module.exports = InventoryPage;