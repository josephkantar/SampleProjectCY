const data=require('../fixtures/automationExcercise')
import { text } from "../support/input";
import { mainPage,loginPage,general,products } from "../support/selectors"
describe('login and exercise', () => {
    
    beforeEach(()=>{
        cy.loginAutomation(data.email,data.password)
        //cy.loginAutomationSession(data.email,data.password)
    })
    
    it('ilk ürün Blue Top ı incele ve stok da oldugunu dogrula', () => {
        cy.clickk(products.blueTop)
        cy.visibleByText(text.inStockText)
        cy.assertUrl('/product_details/1')              
    });

    it('Men Jeans tıkla ve Soft Strecth Jeans ürünün fiyatı 799 doğrula', () => {
        cy.clickk(general.men)
        cy.clickk(general.menJeans)
        cy.assertUrl('/category_products/6')
        cy.clickk(products.softStretchJeans)
        cy.checkTextOfTheText(text.softStretchJeansPrice)
    });

    it('Kids Tops&Shirts tıkla ve FrozenTopsForKids ürünün üzerinde bekle ', () => {
       cy.clickk(general.kids)
       cy.clickk(general.kidsTopsShirts)
       cy.assertUrl('/category_products/5')
       cy.hoverOver(products.frozenTopsForKids)       
    });
});