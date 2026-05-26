import loginPage from '../pageobjects/login.page.js'
import productsPage from '../pageobjects/products.page.js'

describe('TC6 - Sorting', () => {
    beforeEach(async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    const sortOptions = ['az', 'za', 'lohi', 'hilo'];

    for (const option of sortOptions) {
        it(`Sort by option: ${option}`, async () => {
            await productsPage.sortBy(option);
            await expect(productsPage.sortDropdown).toHaveValue(option);
        });
    }
})