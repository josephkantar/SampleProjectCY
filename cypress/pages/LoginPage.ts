
import WebDriver from "../models/WebDriver"
import { loginPage } from "../selectors/SelectorsLoginPage"
const models=new WebDriver()
export default class LoginPage{
    
    enter_username(){
        cy.sendKeys(loginPage.userName,models.getUsername())
    }
    enter_password(){
        cy.sendKeys(loginPage.password,models.getPassword())
    }
    click_login_button(){
        cy.clickk(loginPage.loginButton)
    }
    verify_alert_message_validation_failed(){
        // cy.on('window:alert',(alertText)=>{
        //     expect(alertText).to.equal('validation failed')
        // })
        cy.alertMessage()
    }   
}