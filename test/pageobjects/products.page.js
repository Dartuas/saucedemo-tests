import Page from './page.js';

class ProductsPage extends Page {
    get sortDropdown() { return $('[data-test="product-sort-container"]'); }

    async sortBy(option) {
        await this.sortDropdown.selectByAttribute('value', option);
    }

    open() {
        return super.open('inventory.html');
    }
}

export default new ProductsPage();