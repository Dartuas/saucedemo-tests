import Page from './page.js';

class InventoryPage extends Page {
    // Локатор бургер меню
    get burgerMenu() { return $('#react-burger-menu-btn'); }
    
    // Локатор кнопки Logout
    get logoutButton() { return $('#logout_sidebar_link'); }

    // Метод для логауту
    async logout() {
        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    open() {
        return super.open('inventory.html');
    }
}

export default new InventoryPage();