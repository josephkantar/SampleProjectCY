
describe('Simple api intercept/spy api request', () => {

    it('get comment', () => {
        cy.visit('https://example.cypress.io/commands/network-requests');
        //sayfada işlem yapacağımız yeri tıklayıp şu gelene kadar status code 200 görene kadar bekle
        //dinamik wait yapmak için öncesinde cy.intercept ile kalıp haline sokuyoruz
        cy.intercept({
            url:'**/comments/**',// tam url i vermedik öncesi ve sonrası belli olan comments ve alttaki örnekte sadece path ver
            method:'GET'
        }).as('comment') //burda then should ile de devam edebilirdik as fonksiyonu güzel oluyor
        //as fonksiyonu sonrası istediğimiz yeri tik yapacağız ve as sayesinde wait i isteğidiğimiz gibi kullanırız
        cy.get('.network-btn').click();
         //yukarida her şeyi comment içine attık ve kullanırken @ ile birlikte
         cy.wait('@comment').then(comment=>{
            expect(comment.response.statusCode).to.be.eqls(200)
            cy.log(comment.response.body)
            expect(comment.response.body.body).include('enim') // body içinde enim var doğrulaması yaptık
         })
    });
    it('get comment', () => {
        cy.visit('https://example.cypress.io/commands/network-requests');
        cy.intercept({
            url:'**/comments/**',
            method:'GET'
        }).as('comment') 
        cy.get('.network-btn').click();
        //yukarıdakinin farklı bir doğrulama yöntemi içine girmedin its metodu ile
         cy.wait('@comment').its('response.statusCode').should('be.oneOf',[200,201])
         
    });
    it('intercept/spy api', () => {
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept({
            path:'/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comments')

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept=>{
            expect(intercept.response.body.limit).to.eqls(10)
        })
    });

    it('Mock api responese', () => {
        cy.visit('https://dummyapi.io/explorer')
        cy.intercept('GET','/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10',{limit:10,Name:'Samet'}).as('comments')
        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept=>{
            expect(intercept.response.body.limit).to.eqls(10)
            expect(intercept.response.body.Name).to.eqls('Samet')
        })
    });
});