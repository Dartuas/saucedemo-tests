import loginPage from '../pageobjects/login.page.js'
import cartPage from '../pageobjects/cart.page.js'
import checkoutPage from '../pageobjects/checkout.page.js'

describe('Checkout', () => {

    it('TC8 - Valid Checkout', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await cartPage.addToCartButton.click();
        await cartPage.cartLink.click();
        await checkoutPage.checkoutButton.click();
        await checkoutPage.fillForm('Oleksandr', 'Saksonik', '12345');
        await checkoutPage.finishButton.click();
        await expect(checkoutPage.successMessage).toHaveText('Thank you for your order!');
        await checkoutPage.backHomeButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(checkoutPage.cartBadge).not.toBeDisplayed();
    });

    it('TC9 - Checkout without products', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
        await cartPage.cartLink.click();
        await checkoutPage.checkoutButton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

})