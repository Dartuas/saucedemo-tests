import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
describe('Login', () => {

    it('TC#1 - Valid Login', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })

})