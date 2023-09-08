import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
// Using POM
import HomePage from "../pageObject/HomePage";

When("Page has loaded", () => {
    HomePage.visit();
})

Then("Click on the sign up button", () => {
    HomePage.clickSignUpButton();
})
Then("Type the email {string}", (email: string) => {
    HomePage.typeSignUpEmail(email);
})
Then("Type the password {string}", (email: string) => {
    HomePage.typeSignUpPassword(email);
})
Then("Type the birthdate {string}", (birthday: string) => {
    HomePage.typeSignUpBirthdate(birthday);
})
Then("Click on the continue button", () => {
    HomePage.clickSignUpButtonSubmit();
})