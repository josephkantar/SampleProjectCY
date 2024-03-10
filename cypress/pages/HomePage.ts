
const data=require("../fixtures/webDriverExercise.json")
import { homePage } from "../selectors/SelectorsHomePage"


export default class HomePagee{
    load_page(){
        cy.visit(data.url)
    }
    enter_contactUs_page(){
        cy.get(homePage.contactUs).scrollIntoView({duration:250})//scrooll görmek için
        cy.get(homePage.contactUs).invoke('removeAttr','target')//yeni sayfa açılmasını engelledik
        cy.clickk(homePage.contactUs)
    }
}

