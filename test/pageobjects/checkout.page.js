import Page from './page.js';

class CheckoutPage extends Page {
    get firstNameField()  { return $('[data-test="firstName"]'); }
    get lastNameField()   { return $('[data-test="lastName"]'); }
    get postalCodeField() { return $('[data-test="postalCode"]'); }
    get continueButton()  { return $('[data-test="continue"]'); }
    get finishButton()    { return $('[data-test="finish"]'); }

    async fillForm(firstName, lastName, postalCode) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.postalCodeField.setValue(postalCode);
        await this.continueButton.click();
    }

    open() {
        return super.open('checkout-step-one.html');
    }
}

export default new CheckoutPage();