export { }
declare global {
    namespace Cypress {
        interface Chainable {
            enter_first_name(): Chainable<void>
            enter_last_name(): Chainable<void>
            enter_email_adress(): Chainable<void>    
            enter_commands(): Chainable<void>  
            click_submit_button(): Chainable<void>   
            verify_successfully_message(): Chainable<void>    
        }
    }
}
import { faker } from '@faker-js/faker';
import { contactPage } from "../selectors/SelectorsContactUSPage"
const data=require("../fixtures/webDriverExercise.json")

Cypress.Commands.add("enter_first_name",function(){
    cy.sendKeys(contactPage.firstName,data.firstName)
})
Cypress.Commands.add("enter_last_name",function(){
    cy.sendKeys(contactPage.lastName,data.lastName)
})
Cypress.Commands.add("enter_email_adress",function(){
    cy.sendKeys(contactPage.email,faker.internet.email())
})
Cypress.Commands.add("enter_commands",function(){
    cy.sendKeys(contactPage.commands,"Veriy good")
})
Cypress.Commands.add("click_submit_button",function(){
    cy.clickk(contactPage.submit)
})
Cypress.Commands.add("verify_successfully_message",function(){
    cy.assertGetByText(contactPage.verifyMessage,"Thank You for your Message!")
})