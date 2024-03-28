export { }
declare global {
    namespace Cypress {
        interface Chainable {
            clickk(selector: string): Chainable<void>
            clickByText(selector: string): Chainable<void>
            checkTextOfTheElement(selector,text: string): Chainable<void>
            checkTextOfTheText(text: string): Chainable<void>
            visibleByText(text: string): Chainable<void>
            assertUrl(pathParam: string): Chainable<void>
            hoverOver(selector:string): Chainable<void>
            sendKeys(selector,data: string): Chainable<void>
            dynamicWait(selector:string): Chainable<void>
            assertGetByText(selector,text: string): Chainable<void>
            visible(selector:string): Chainable<void>   
            alertMessage(): Chainable<void>          
        }
    }
}
Cypress.Commands.add('clickk', (selector) => {
    cy.get(selector).should('exist')
        .should('be.visible')
        .click()
})
Cypress.Commands.add('clickByText', (text) => {
    cy.contains(text).should('exist').should('be.visible')
        .click({ force: true })
})
Cypress.Commands.add("checkTextOfTheElement",(selector,text)=>{
    cy.get(selector)
    .should('be.visible')
    .and('contain',text)
})
Cypress.Commands.add("checkTextOfTheText",(text)=>{
    cy.get(text)
    .should('be.visible')
    .and('have.text',text)
})
Cypress.Commands.add("visibleByText",(text)=>{
    cy.contains(text,{timeout:25000})
    .should('be.visible')
})
Cypress.Commands.add('assertUrl',(pathParam)=>{
    cy.url().should('include',pathParam)      
})
Cypress.Commands.add('hoverOver',(selector)=>{
    cy.get(selector)
    .trigger('mouseover')
})
Cypress.Commands.add('sendKeys',(selector,data)=>{
    cy.get(selector).should('exist').should('be.visible').type(data).should('have.value',data)
})
Cypress.Commands.add('dynamicWait',(selector)=>{
    cy.waitUntil(() => {
        return Cypress.$(selector).is(':visible')
      }, { timeout: 5000, interval: 1000 })
})
Cypress.Commands.add('visible',(selector)=>{
    cy.get(selector).should('be.visible')
})
Cypress.Commands.add('assertGetByText',(selector,text)=>{
    cy.get(selector).should('contain',text)
})
Cypress.Commands.add("alertMessage",function(){
    cy.on('window:alert',(alertText)=>{
        expect(alertText).to.equal('validation failed')
    })
})



