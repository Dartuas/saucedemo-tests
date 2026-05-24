import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'

describe('Login', () => {

    it('TC1 - Valid Login', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })

    it('TC2 - Login with invalid password', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'wrong_password');
        const error = await $('.error-message-container h3');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveText('Epic sadface: Username and password do not match any user in this service');
    });

    it('TC3 - Login with locked out test login', async () => {
        await LoginPage.open();
        await LoginPage.login('locked_out_user', 'secret_sauce');
        const error = await $('.error-message-container h3');
        await expect(error).toBeDisplayed();
        await expect(error).toHaveText('Epic sadface: Sorry, this user has been locked out.');

    })

    it('TC4 - Logout', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.logout();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');

    })

    it('TC5 - Saving the card after logout ', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await CartPage.addToCartButton.click();
        await InventoryPage.logout();
        await LoginPage.login('standard_user', 'secret_sauce');
        await CartPage.cartLink.click();

    })


})