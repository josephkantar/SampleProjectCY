import TodoTasksDelete from "../api/TodoTasksDelete";
import todoRegisterApi from "../api/todoRegisterApi";
import Todo from "../models/Todo";
import { register,general } from "../support/todoSelectors";
describe('Start api and finish ui', () => {
    const rgstr = new todoRegisterApi()
    const user = new Todo()
    const dlt=new TodoTasksDelete()
    it('todo register api and ui test', () => {

        // register işlemini api ile gerçekleştirdik
        rgstr.register(user)//istersek buranın doğurlamalarını burada yapabiliriz
            

        //ui kısmına devem ettik önemli olan başlamasını istediğimiz yerin url ilk vermek
        cy.visit('https://todo.qacart.com/todo') //bu url vermemiz gerekiyor çok önemli
        //ui testime devam ediyorum
        cy.checkTextOfTheElement(register.headers,user.getfirstName())
        cy.clickk(general.addButton)   
        cy.sendKeys(general.textBox,'Hello World')


        cy.clickk(general.createButton)
        cy.clickk(general.deleteButton) 
        
    });
});
