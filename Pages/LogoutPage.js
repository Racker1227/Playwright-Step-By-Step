class LogoutPage {

    constructor(page) 
    {
        this.page = page;
        //Define page locators
        this.burgerMenuButton = page.locator("#react-burger-menu-btn");
        this.logoutButton = page.locator("#logout_sidebar_link");
    }

    async clickBurgerMenuButton()
    {
        await this.burgerMenuButton.click();
    }

    async clickLogoutButton()
    {
        await this.logoutButton.click();
    }

}

module.exports = LogoutPage;