describe('wait', () => {
    
    it('hard wait', () => {
        cy.visit('https://practice-automation.com/')
        cy.get('.wp-container-core-buttons-layout-8 > .wp-block-button > .wp-block-button__link').click()
        cy.wait(4000)// 4 sn kod akışı durur
        cy.get('#g1103-whatisyourfavoritedrink-Water').check()
        cy.get('#g1103-doyouhaveanysiblings').select('Yes')
        
    });

    it('wait until kullanımı', () => {
        //plugin yüklemek gerekiyor ve import etmek
        cy.visit('https://managementonschools.com/')
        cy.get('.me-2').click()
        cy.waitUntil(() => {
            return Cypress.$('#name').is(':visible') // element görünür olana kadar bekle
          }, { timeout: 5000, interval: 1000 })//5 sn ye boyunca 1 sn de bir kontrol et   
    });

    it('contain text bulana kadar wait', () => {
        cy.visit('https://managementonschools.com/',{timeout:4000})
        cy.contains('Contact').click()
        cy.contains('Our Location',{timeout:4000}).should('be.visible')
    });
});