

describe('Data Driven Test Tekli Yöntem 2', () => {
    
    beforeEach(function(){
        cy.fixture('dataDrivenTest').as('data')
    })

    it('data okuma', function(){
        cy.visit('https://www.amazon.com')
        cy.get('#twotabsearchtextbox').type(this.data.user.val1)
        cy.get('#nav-search-submit-button').click()
        
    });

});