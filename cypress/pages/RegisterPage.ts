import Register from "../models/Register"
const registerData=require('../fixtures/registerData.json')

export default class RegisterPage{

  

    registerLocators={
        name:'#name',
        surName:'#surname',
        birthPlace:'#birthPlace',
        phone:'#phoneNumber',
        gender:"input[name='gender'][value='MALE']",
        birthDay:'#birthDay',
        ssn:'#ssn',
        userName:'#username',
        password:'#password',
        registerButton:"button[class='fw-semibold btn btn-primary']",
        allertMessage:".Toastify__toast-body",
        minimum12Character:":nth-child(4) > .invalid-feedback"
        
    }
    load(){
        cy.visit('https://managementonschools.com/register')
    }

    registerAdd(register:Register){
        cy.get(this.registerLocators.name).type(register.getName())
        cy.get(this.registerLocators.surName).type(register.getSurName())
        cy.get(this.registerLocators.birthPlace).type(register.getBirthPlace())
        cy.get(this.registerLocators.phone).type(register.getPhone())
        cy.get(this.registerLocators.gender).type(register.getGender())
        cy.get(this.registerLocators.birthDay).type(register.getDateOfBirth())
        cy.get(this.registerLocators.ssn).type(register.getSsn())
        cy.get(this.registerLocators.userName).type(register.getUserName())
        cy.get(this.registerLocators.password).type(register.getPassword())
        cy.get(this.registerLocators.registerButton).click()
    }
    negatifTestPhoneNumber(register:Register,registerData){
        cy.get(this.registerLocators.name).type(register.getName())
        cy.get(this.registerLocators.surName).type(register.getSurName())
        cy.get(this.registerLocators.birthPlace).type(register.getBirthPlace())
        cy.get(this.registerLocators.phone).type(registerData)
        cy.get(this.registerLocators.gender).type(register.getGender())
        cy.get(this.registerLocators.birthDay).type(register.getDateOfBirth())
        cy.get(this.registerLocators.ssn).type(register.getSsn())
        cy.get(this.registerLocators.userName).type(register.getUserName())
        cy.get(this.registerLocators.password).type(register.getPassword())
        cy.get(this.registerLocators.registerButton).click()
    }
    
    allertMessagePleaseValidPhoneNumber(){
        cy.get(this.registerLocators.allertMessage).should('contain','Please')
    }
    errorMessageMinimum12Character(){
        cy.get(this.registerLocators.minimum12Character).should('contain','Minimum 12 character')
    }
    

    succesfullyMessage(){
        cy.get(this.registerLocators.allertMessage).should('contain','Guest User registered.')
    }
}