import Page from './page.js';

class CartPage extends Page {
    get addToCartButton() { return $('[data-test^="add-to-cart"]'); }
    get cartLink()        { return $('[data-test="shopping-cart-link"]'); }

    open() {
        return super.open('cart.html');
    }
}

export default new CartPage();