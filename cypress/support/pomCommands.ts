import { mainPage, loginPage } from "./selectors"
import { text } from "./input"
const data = require('../fixtures/automationExcercise')
export { }
declare global {
    namespace Cypress {
        interface Chainable {
            loginAutomation(email, password: string): Chainable<void>
            loginAutomationSession(email, password: string): Chainable<void>
        }
    }
}
Cypress.Commands.add('loginAutomation', (email, password) => {
    cy.visit(data.url)
    cy.clickk(mainPage.signupButton)
    cy.sendKeys(loginPage.inputEmail,data.email)
    cy.sendKeys(loginPage.inputPassword,data.password)
    cy.clickk(loginPage.loginButton)
    cy.visibleByText(text.logged)
})

Cypress.Commands.add('loginAutomationSession', (email, password) => {
    cy.session([email, password], () => {
    cy.visit(data.url)
    cy.clickk(mainPage.signupButton)
    cy.sendKeys(loginPage.inputEmail,data.email)
    cy.sendKeys(loginPage.inputPassword,data.password)
    cy.clickk(loginPage.loginButton)
    cy.visibleByText(text.logged)
    })
})