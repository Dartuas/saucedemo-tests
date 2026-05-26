import loginPage from '../pageobjects/login.page.js'
import productsPage from '../pageobjects/products.page.js'

describe('TC6 - Sorting', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('Sort by Name (A to Z)', async () => {
        await productsPage.sortBy('az');
        await expect(productsPage.sortDropdown).toHaveValue('az');
    });

    it('Sort by Name (Z to A)', async () => {
        await productsPage.sortBy('za');
        await expect(productsPage.sortDropdown).toHaveValue('za');
    });

    it('Sort by Price (low to high)', async () => {
        await productsPage.sortBy('lohi');
        await expect(productsPage.sortDropdown).toHaveValue('lohi');
    });

    it('Sort by Price (high to low)', async () => {
        await productsPage.sortBy('hilo');
        await expect(productsPage.sortDropdown).toHaveValue('hilo');
    });
})