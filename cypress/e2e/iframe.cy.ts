import BrowserUtils from "../utils/BrowserUtils";

describe('iframe',{retries:1}, () => {
    
    const util=new BrowserUtils()

    it('iframe içinde plugin yüklemeli button tıklatma ve kapatma', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView({duration:1500})//scrooll görmek için
        cy.get('#iframe').invoke('removeAttr','target').click()
        //cy.frameLoaded('#frame')
        //cy.iframe().find("button[type='button']").click()
        //önce çalıştı şimdi çalışmıyor
        
    });

    it('2.yöntem iframe içinde button tıklama', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView({duration:1500})//scrooll görmek için
        util.handleTab('#iframe') // metod ile artık handleTab yaptım
        //cy.get('#iframe').invoke('removeAttr','target').click()
        
        cy.get('#frame').then($iframe=>{ // iframe içine girmek için wrap yöntemi
            const body=$iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').contains('Welcome to ').should('be.visible')
        //içine girdikten sonra her işlemde çağırma işlemini tekrarla
    });

    it('iframe 3. yöntem cy.wrap daha kolay ve metoda çevrilebilir', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView({duration:1500})//scrooll görmek için
        cy.get('#iframe').invoke('removeAttr','target').click()

        cy.get('iframe#frame').its('0.contentDocument.body').then(cy.wrap)// bunu metoda döktük
        .contains('Who Are We?').should('be.visible')
    });

    it('iframe içinde metodla gezinme', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView({duration:1500})//scrooll görmek için
        util.handleTab('#iframe')
        util.iframe('#frame').contains('Find Out More!').click()
        util.iframe('#frame').contains('Welcome to ').should('be.visible')
        //her adım için metodla devam et yani ben iframe içine girdim
        //her yerde gezinebilirim olayı yok seleniumda ki gibi 
        //her adım öncesi metodu cağıracaksın
    });

    it('2.yöntemin metodlu hali iframe2', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#iframe').scrollIntoView({duration:1500})//scrooll görmek için
        util.handleTab('#iframe')
        util.iframe2('#frame').contains('Find Out More!').click()
        util.iframe2('#frame').contains('Welcome to ').should('be.visible')

    });

});
