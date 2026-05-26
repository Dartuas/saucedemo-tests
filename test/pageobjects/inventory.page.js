import Page from './page.js';

class InventoryPage extends Page {

    get burgerMenu() { return $('#react-burger-menu-btn'); }
    

    get logoutButton() { return $('#logout_sidebar_link'); }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();