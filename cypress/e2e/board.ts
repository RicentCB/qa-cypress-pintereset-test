import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObject/homePage";

When("The user navigate to the home page", (): void => { cy.visit(HomePage.baseUrl) })

Then("Click on the Restart Button", (): void => {
    HomePage.getRestartButton().click();
})
Then("Check if the page has been loaded correctly", (): void => {
    cy.url().should("eq", HomePage.baseUrl);
})

/* Check The blue pieces */
Then("Check if there are just 12 blue pieces in the board", (): void => {
    let bluePiecesCont = 0;
    HomePage.getTheBoard().find('img').each((space: JQuery<HTMLElement>): void => {
        if (space.attr("src") === "me1.gif") {
            bluePiecesCont++
        }
    }).then((): void => {
        cy.wrap(bluePiecesCont).should("eq", 12, "There are 12 blue pieces");
    })
})