
const data=require("../fixtures/webDriverExercise.json")
export default class LoginPage{
    
    loadPage(){
        cy.visit(data.url)
    }
}