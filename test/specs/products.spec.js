import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductsPage from '../pageobjects/products.page.js'

describe('TC6 - Sorting', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('Sort by Name (A to Z)', async () => {
        await ProductsPage.sortBy('az');
        await expect(ProductsPage.sortDropdown).toHaveValue('az');
    });

    it('Sort by Name (Z to A)', async () => {
        await ProductsPage.sortBy('za');
        await expect(ProductsPage.sortDropdown).toHaveValue('za');
    });

    it('Sort by Price (low to high)', async () => {
        await ProductsPage.sortBy('lohi');
        await expect(ProductsPage.sortDropdown).toHaveValue('lohi');
    });

    it('Sort by Price (high to low)', async () => {
        await ProductsPage.sortBy('hilo');
        await expect(ProductsPage.sortDropdown).toHaveValue('hilo');
    });
})