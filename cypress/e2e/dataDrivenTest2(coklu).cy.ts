const jsonData=require('../fixtures/dataDrivenTest2.json')

describe('Data Driven Test2', () => {
    
    jsonData.forEach((testData)=>{

        it('Data Driven Test2', () => {
        
            cy.visit('https://www.amazon.com')
            cy.get('#twotabsearchtextbox').type(testData.test)
            cy.get('#nav-search-submit-button').click()
        });
    })    
});