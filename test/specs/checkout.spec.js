import loginPage from '../pageobjects/login.page.js'
import inventoryPage from '../pageobjects/inventory.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe('Checkout', () => {


    it('TC8 - Valid Checkout ', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await cartPage.addToCartButton.click();
        await cartPage.cartLink.click();
        await $('[data-test="checkout"]').click();
        await checkoutPage.fillForm('Oleksandr', 'Saksonik', '12345');
        await checkoutPage.finishButton.click();
        const successMessage = await $('[data-test="complete-header"]');
        await expect(successMessage).toHaveText('Thank you for your order!');


        await $('[data-test="back-to-products"]').click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect($('.shopping_cart_badge')).not.toBeDisplayed();

    })
    it('TC9 - Checkout without products', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await cartPage.cartLink.click();
        await $('[data-test="checkout"]').click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });


})