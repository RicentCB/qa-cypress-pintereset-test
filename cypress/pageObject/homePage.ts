import { BaseUrl } from '../support/const'

class HomePageObject {
    baseUrl: string = BaseUrl;
    selectors: { [key: string]: string } = {
        "MENU_OPTIONS": "p.footnote"
    }
    getRestartButton(): Cypress.Chainable<JQuery> {
        return cy.get(this.selectors.MENU_OPTIONS).contains("Restart...");
    }
}

export default new HomePageObject();