describe('shadowRoot kullanımı', () => {
    
    it('Test01 shodow() method', () => {

        cy.visit('https://shop.polymer-project.org/');
        
        cy.get('shop-app[page="home"]').shadow().find('a[href="/list/mens_outerwear"]').click();
        
      });

      it('Test01 as() method', () => {
        
        cy.visit('https://shop.polymer-project.org/');
        
        cy.get('shop-app[page="home"]').shadow().as('shadowRoot');
        
        cy.get('@shadowRoot').find('a[href="/list/mens_outerwear"]').click();
    });
    
    it('Test02 shodow() method', () => {
        
        cy.visit('http://watir.com/examples/shadow_dom.html');
        
        cy.get('#shadow_host').shadow().find('input[type="text"]').type('samet');
    });

    it('Test02 as() method', () => {
        
        cy.visit('http://watir.com/examples/shadow_dom.html');
        
        cy.get('#shadow_host').shadow().as('shadowRoot')

        cy.get('@shadowRoot').find('input[type="text"]').type('samet');
    });

    it('Test02 as() method', () => {
        
        cy.visit('http://watir.com/examples/shadow_dom.html');
        
        cy.get('input[type="text"]',{includeShadowDom:true}).type('samet')
    });

    
      
});