
describe('Attribute çekme ve type kullanımı', () => {
    
    it('Text ve Attribute Datalarını Çekme', () => {
    
        cy.visit('https://managementonschools.com/register')
    
        // href='/register' ulaşma
        let hrefValue:string         //Data type vermek zorunda değiliz
        cy.get('[class="header_link me-2"]')
        .should('exist') // dom doğrulama bu locate var mı? Koymak zorunlu değil
        .invoke('attr','href').then((href)=>{
            hrefValue=href.trim() //trim() olmadanda çalışır, sonda ve başta boşluk varsa temizliyor
            cy.log('Alınan href value değeri',{hrefValue})// Alınan href value değeri, {hrefvalue: /register}
            cy.log(hrefValue) //  /register
        })
    
        // text ulaşma
        let textData
        cy.get('[class="header_link me-2"]')
        .invoke('text').then((text)=>{
            textData=text
            cy.log(textData) //Register
        })
    });

    it('type kullanımı input gizleme', () => {

        cy.visit('https://managementonschools.com/register')
        cy.get('#name').type('samet',{log:false})
        //log:false input değerini gizlemek için kullanılır
        
    });
});

