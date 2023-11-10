import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pageObject/homePage";

When("The user navigate to the home page", (): void => { cy.visit(HomePage.baseUrl) })