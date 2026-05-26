import loginPage from '../pageobjects/login.page.js'
import footerPage from '../pageobjects/footer.page.js'

describe('Footer Links', () => {
    it('TC7 - Footer Links', async () => {
        await loginPage.open();
        await loginPage.login('standard_user', 'secret_sauce');

        await expect(footerPage.twitterLink).toHaveAttribute('href', 'https://twitter.com/saucelabs');
        await expect(footerPage.facebookLink).toHaveAttribute('href', 'https://www.facebook.com/saucelabs');
        await expect(footerPage.linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/sauce-labs/');
    });
})