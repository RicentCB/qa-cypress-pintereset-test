import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObject/homePage";

When("The user navigate to the home page", (): void => { cy.visit(HomePage.baseUrl) })

Then("Click on the Restart Button", (): void => {
    HomePage.getRestartButton().click();
})
Then("Check if the page has been loaded correctly", (): void => {
    cy.url().should("eq", HomePage.baseUrl);
})

/* Check the number of pieces */
const checkNumberPieces = (color: "orange" | "blue", number: number): void => {
    const colorToImage: { [key: string]: string } = {
        "blue": "me1.gif",
        "orange": "me1.gif",
    }
    let piecesCont: number = 0;
    HomePage.getTheBoard().find('img').each((space: JQuery<HTMLElement>): void => {
        if (space.attr("src") === colorToImage[color]) {
            piecesCont++
        }
    }).then((): void => {
        cy.wrap(piecesCont).should("eq", number, `There are ${number} ${color} pieces`);
    })
}
Then("Check if there are just 12 blue pieces in the board", (): void => {
    checkNumberPieces("blue", 12);
})
Then("Check if there are just 12 orange pieces in the board", (): void => {
    checkNumberPieces("orange", 12);
})