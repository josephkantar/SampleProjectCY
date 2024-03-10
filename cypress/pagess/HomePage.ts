export { }
declare global {
    namespace Cypress {
        interface Chainable {
            load_page(): Chainable<void>
            enter_contactUs_page(): Chainable<void>         
        }
    }
}
import { homePage } from "../selectors/SelectorsHomePage"
const data=require("../fixtures/webDriverExercise.json")

Cypress.Commands.add("load_page",function(){
    cy.visit(data.url)
})
Cypress.Commands.add("enter_contactUs_page",function(){
    cy.get(homePage.contactUs).scrollIntoView({duration:900})//scrooll görmek için
        cy.get(homePage.contactUs).invoke('removeAttr','target')//yeni sayfa açılmasını engelledik
        cy.clickk(homePage.contactUs)
})