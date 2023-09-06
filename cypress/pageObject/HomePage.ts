import { BaseUrl } from "../support/const";

export class HomePage {
    visitPage(){
        cy.visit(BaseUrl);
    }
}

export default new HomePage();