
export default class BrowserUtils{

    iframe(locate){
        return cy.get(locate).its('0.contentDocument.body').then(cy.wrap);
    }
    handleTab(locate){
        return cy.get(locate).invoke('removeAttr','target').click()
    }
    iframe2(locate){
        cy.get(locate).then($iframe=>{ // iframe içine girmek için wrap yöntemi
            const body=$iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })
       return cy.get('@iframe')
    }
    
}
//ister burda yap ister commands.ts de ama commands daha kullanışlı