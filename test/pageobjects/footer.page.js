import Page from './page.js';

class FooterPage extends Page {
    get twitterLink()  { return $('[data-test="social-twitter"]'); }
    get facebookLink() { return $('[data-test="social-facebook"]'); }
    get linkedinLink() { return $('[data-test="social-linkedin"]'); }
}

export default new FooterPage();