import { BaseUrl } from '../support/const'

class HomePageObject {
    baseUrl: string = BaseUrl;
    selectors: { [key: string]: string } = {
        "MENU_OPTIONS": "p.footnote",
        "BOARD": ".boardWrapper #board"
    }
    getRestartButton(): Cypress.Chainable<JQuery> {
        return cy.get(this.selectors.MENU_OPTIONS).contains("Restart...");
    }
    getTheBoard(): Cypress.Chainable {
        return cy.get(this.selectors.BOARD);
    }
}

export default new HomePageObject();