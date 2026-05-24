import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import FooterPage from '../pageobjects/footer.page.js'

describe('Footer Links', () => {
    it('TC7 - Footer Links', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');

        await expect(FooterPage.twitterLink).toHaveAttribute('href', 'https://twitter.com/saucelabs');
        await expect(FooterPage.facebookLink).toHaveAttribute('href', 'https://www.facebook.com/saucelabs');
        await expect(FooterPage.linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/');
    });
})