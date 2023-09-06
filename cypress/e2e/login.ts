import { When } from "@badeball/cypress-cucumber-preprocessor";
// Using POM
import HomePage from "../pageObject/HomePage";

When("Page has been completed loading", ()=>{
    HomePage.visitPage();
})