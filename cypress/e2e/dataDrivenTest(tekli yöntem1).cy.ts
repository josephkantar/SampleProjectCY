

describe('Data Driven Test', () => {
    
    let testData;
    beforeEach('Run Before All Test',()=>{

        cy.fixture('dataDrivenTest.json').then((jsonData)=>{
            testData=jsonData;
        })

    })
    it('Data Driven Test', () => {
        
        cy.visit('https://www.google.com')
        cy.get('#APjFqb').type(testData.user.cal1)
        
    });
});