import { youtubePage } from "../support/youTubeSelector";
export { }
declare global {
    namespace Cypress {
        interface Chainable {    
            likeButtonAssert():Chainable<void>
            subscribersAssert():Chainable<void>
            adsCountAssert():Chainable<void>
            randomVideoSelect():Chainable<void>
            randomVideoAssert():Chainable<void>
            
        }
    }
}
Cypress.Commands.add('likeButtonAssert',()=>{
    cy.get(youtubePage.likeButton)
            .first()
            .invoke('text').then((textContent) => {

                // Metni tamsayıya çevir
                const numberValue = parseInt(textContent);

                // Assertion kullanarak 10'dan büyük olduğunu kontrol et
                cy.wrap(numberValue).should('be.gt', 10);
            });
})
Cypress.Commands.add('subscribersAssert',()=>{
    cy.get(youtubePage.subscribers)
            .invoke('text').then((textContent) => {

                // Metni tamsayıya çevir
                const numberValue = parseInt(textContent);

                // Assertion kullanarak 10'dan büyük olduğunu kontrol et
                cy.wrap(numberValue).should('be.lt', 1000);
            });
})
Cypress.Commands.add('adsCountAssert',()=>{
    cy.get(youtubePage.adsCount).then(($currentTime) => {
        const currentTime = parseFloat($currentTime.text().replace(':', '.'));

        // Video atlandığında, şu andaki süre sıfıra yakın olmalıdır
        expect(currentTime).to.be.closeTo(0, 2); // Hata payını ihtiyaca göre ayarlayabilirsiniz
    });
})
let elementText;
Cypress.Commands.add('randomVideoSelect',()=>{
    

        cy.get(':nth-child(18) > #dismissible > .details > .metadata > .yt-simple-endpoint > h3.style-scope > #video-title')// your-selector yerine uygun bir seçici girin
            .invoke('text')
            .then((text) => {
                elementText = text.trim();

                cy.log('Alınan text:', elementText);

            });
        cy.get(':nth-child(18) > #dismissible > .details > .metadata > .yt-simple-endpoint > h3.style-scope > #video-title').click()
})
Cypress.Commands.add('randomVideoAssert',()=>{
    let element2Text
        cy.get('#above-the-fold > :nth-child(1) > h1.style-scope > .style-scope')// your-selector yerine uygun bir seçici girin
            .invoke('text')
            .then((text) => {
                element2Text = text.trim();

                cy.log('Alınan text:', element2Text);
                expect(elementText).to.eq(element2Text)

            });
})
