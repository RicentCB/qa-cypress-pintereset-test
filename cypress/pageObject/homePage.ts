import { BaseUrl } from '../support/const'

class HomePageObject {
    baseUrl: string = BaseUrl;
    selectors: { [key: string]: string } = {
        "MENU_OPTIONS": "p.footnote",
        "BOARD": ".boardWrapper #board",
        "INFO_MESSAGE": ".gameWrapper #message"
    }
    getRestartButton(): Cypress.Chainable<JQuery> {
        return cy.get(this.selectors.MENU_OPTIONS).contains("Restart...");
    }
    getTheBoard(): Cypress.Chainable {
        return cy.get(this.selectors.BOARD).find("img");
    }
    getInfoMeesage(): Cypress.Chainable<JQuery> {
        return cy.get(this.selectors.INFO_MESSAGE);
    }
}

export default new HomePageObject();