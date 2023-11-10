// Commando for get element with the property "data-test-id"
Cypress.Commands.add("getSpaceByCoordinate", (x,y, ...args) => {
    return cy.get(`img[name="space${x}${y}"]`, ...args)
})

declare global {
    namespace Cypress {
        interface Chainable {
            getSpaceByCoordinate(x: number, y: number): Chainable<JQuery>;
        }
    }
}