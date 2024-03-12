
const data=require("../fixtures/webDriverExercise.json")
import { homePage } from "../selectors/SelectorsHomePage"
import BrowserUtils from "../utils/BrowserUtils"

const util=new BrowserUtils()

export default class HomePagee{
    
    load_page(){
        cy.visit(data.url)
    }
    enter_contactUs_page(){
        cy.get(homePage.contactUs).scrollIntoView({duration:250})//scrooll görmek için
        util.handleTab(homePage.contactUs)//yeni sayfa açılmasını engelledik
        cy.clickk(homePage.contactUs)
    }
    enter_login_page(){
        cy.get(homePage.login).scrollIntoView({duration:250})//scrooll görmek için
        util.handleTab(homePage.login)//yeni sayfa açılmasını engelledik
        cy.clickk(homePage.login)
    }
}

