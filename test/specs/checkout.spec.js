import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('Checkout', () => {


    it('TC8 - Valid Checkout ', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await CartPage.addToCartButton.click();
        await CartPage.cartLink.click();
        await $('[data-test="checkout"]').click();
        await CheckoutPage.fillForm('Oleksandr', 'Saksonik', '12345');
        await CheckoutPage.finishButton.click();
        const successMessage = await $('[data-test="complete-header"]');
        await expect(successMessage).toHaveText('Thank you for your order!');


        await $('[data-test="back-to-products"]').click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.shopping_cart_badge')).not.toBeDisplayed();

    })


})