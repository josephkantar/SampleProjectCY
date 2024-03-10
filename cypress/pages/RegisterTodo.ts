import Todo from "../models/Todo"
const email=require('../fixtures/todo.json')
export default class RegisterTodo{

    locators={
        firstName:'input[data-testid="first-name"]',
        lastName:'[data-testid="last-name"]',
        email:'[data-testid="email"]',
        password:'[data-testid="password"]',
        confirmPassword:'[data-testid="confirm-password"]',
        signUp:'[data-testid="submit"]',
        headers:'[data-testid="welcome"]',
        message:'.MuiAlert-message'
    }
    load(){
        cy.visit('https://todo.qacart.com/signup')
    }
    register(todo:Todo){
        cy.get(this.locators.firstName).type(todo.getfirstName())
        cy.get(this.locators.lastName).type(todo.getlastname())
        cy.get(this.locators.email).type(todo.getEmail())
        cy.get(this.locators.password).type(todo.getPassword())
        cy.get(this.locators.confirmPassword).type(todo.getConfirmPassword()) 
        cy.get(this.locators.signUp).click()
    }
    registerNegatifTest(todo:Todo,email){
        cy.get(this.locators.firstName).type(todo.getfirstName())
        cy.get(this.locators.lastName).type(todo.getlastname())
        cy.get(this.locators.email).type(email.email)
        cy.get(this.locators.password).type(todo.getPassword())
        cy.get(this.locators.confirmPassword).type(todo.getConfirmPassword()) 
        cy.get(this.locators.signUp).click()
    }
    headersMessage(todo:Todo){
        cy.get(this.locators.headers).should('contain',todo.getfirstName())
    }
    alreadyExistsMessage(){
        cy.get(this.locators.message).should('contain','already exists')
    }
        

}