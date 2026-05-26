import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Login', () => {

    it('TC1 - Valid Login', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    it('TC2 - Login with invalid password', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'wrong_password');
        const error = await $('.error-message-container h3');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('TC3 - Login with locked out test login', async () => {
        await loginPage.open();
        await loginPage.login('locked_out_user', 'secret_sauce');
        const error = await $('.error-message-container h3');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('TC4 - Logout', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    });

    it('TC5 - Saving the card after logout', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await cartPage.addToCartButton.click();
        await inventoryPage.logout();
        await loginPage.login('standard_user', 'secret_sauce');
        await cartPage.cartLink.click();
    });

});