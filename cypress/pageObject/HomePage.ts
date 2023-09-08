import { BaseUrl } from "../support/const";

export class HomePage {
    locators: { [key: string]: string } = {
        testIdBtnSignUp: 'simple-signup-button',
        testIdDivSignUpEmail: 'emailInputField',
        testIdDivSignUpPassword: 'passwordInputField',
        testIdDivSignUpBirthdate: 'signup-birthdate-field',
        testIdBtnSignUpSubmit: 'registerFormSubmitButton',
    }
    visit() {
        cy.visit(BaseUrl);
    }
    clickSignUpButton() {
        cy.getByDataSelector(this.locators.testIdBtnSignUp).click();
    }
    typeSignUpEmail(email: string){
        cy.getByDataSelector(this.locators.testIdDivSignUpEmail).find('input[type="email"]').type(email)
    }
    typeSignUpPassword(password: string){
        cy.getByDataSelector(this.locators.testIdDivSignUpPassword).find('input[type="password"]').type(password)
    }
    typeSignUpBirthdate(birthdate: string){
        cy.getByDataSelector(this.locators.testIdDivSignUpBirthdate).find('input[type="date"]').type(birthdate)
    }
    clickSignUpButtonSubmit(){
        cy.getByDataSelector(this.locators.testIdBtnSignUpSubmit).find('button').click()
    }
}

export default new HomePage();