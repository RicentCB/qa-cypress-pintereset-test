// Commando for get element with the property "data-test-id"
Cypress.Commands.add("getByDataSelector", (selector, ...args) => {
    return cy.get(`[data-test-id=${selector}]`, ...args)
})

declare global {
    namespace Cypress {
        interface Chainable {
            getByDataSelector(selector: string): Chainable<JQuery>;
        }
    }
}