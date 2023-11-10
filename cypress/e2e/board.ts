import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObject/homePage";

When("The user navigate to the home page", (): void => { cy.visit(HomePage.baseUrl) })

Then("Click on the Restart Button", (): void => {
    HomePage.getRestartButton().click();
})
Then("Check the if the page has been loaded correctly", (): void => {
    cy.url().should("eq", HomePage.baseUrl);
})