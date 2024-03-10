const countly = require("../fixtures/countly.json")
import { youtubePage } from "../support/youTubeSelector";
describe('Countly youTube Test', () => {
    it('Send "Countly" search video', () => {

        cy.visit(countly.url)  // 1
        cy.sendKeys(youtubePage.searchBox, countly.Countly) // 2

        cy.clickk(youtubePage.searchButton) // 2
        cy.clickk(youtubePage.countlyVideo) // 3
        cy.assertUrl(countly.pathParam) // 3a
        cy.assertGetByText(youtubePage.videoName, countly.videoNameText) // 3b-3c
        cy.clickk(youtubePage.seeMoreButton)
        cy.assertGetByText(youtubePage.uploadDate, countly.uploadDateText) // 3d
        cy.assertGetByText(youtubePage.videoOwnerName, countly.videoOwnerText) // 3e
        cy.likeButtonAssert()
        cy.subscribersAssert()
        cy.adsCountAssert()
        
        cy.visibleByText('Atla')
        
        cy.clickByText('Atla')
        
        cy.clickk(youtubePage.pauseButton)
        
        cy.contains('Oynat (k)').should('exist')

        cy.scrollTo('bottom');
        cy.visible(youtubePage.youtubeLogo)
        
        cy.randomVideoSelect()

        cy.wait(3000)

        cy.randomVideoAssert()

    });

});