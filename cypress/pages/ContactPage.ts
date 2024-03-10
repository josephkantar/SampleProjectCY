import { faker } from '@faker-js/faker';
import { contactPage } from "../selectors/SelectorsContactUSPage"

const data=require("../fixtures/webDriverExercise.json")

export default class ContactPage{

enter_first_name(){
    cy.sendKeys(contactPage.firstName,data.firstName)
}
enter_empty_first_name(){
    cy.sendKeys(contactPage.firstName,data.bosData)
}
enter_last_name(){
    cy.sendKeys(contactPage.lastName,data.lastName)
}
enter_email_adress(){
    cy.sendKeys(contactPage.email,faker.internet.email())
}
enter_unvalid_email_adress(){
    cy.sendKeys(contactPage.email,"smtgmail.com")
}
enter_commands(){
    cy.sendKeys(contactPage.commands,"Nescafe bile 3 ü 1 arada ben hala yalnızım")
}
click_submit_button(){
    cy.clickk(contactPage.submit)
}
verify_successfully_message(){
    cy.assertGetByText(contactPage.verifyMessage,"Thank You for your Message!")
}
verify_error_invalid_email_adress_message(){
    cy.assertGetByText(contactPage.errorMessage," Error: Invalid email address")
}
verify_error_all_fields_are_required_message(){
    cy.assertGetByText(contactPage.errorMessage," Error: all fields are required")
}
}