import todoApiV1Tasks from "../api/todoApiV1Tasks";
import Todo from "../models/Todo";
import { register, general } from "../support/todoSelectors";

describe('Start api and finish ui', () => {
    
    const user = new Todo()
    const task=new todoApiV1Tasks()

    it('todo register api and ui test', () => {

        cy.visit('https://todo.qacart.com/signup')
        cy.sendKeys(register.firstName, user.getfirstName())
        cy.sendKeys(register.lastName, user.getlastname())
        cy.sendKeys(register.email, user.getEmail())
        cy.sendKeys(register.password, user.getPassword())
        cy.sendKeys(register.confirmPassword, user.getPassword())

        cy.intercept({                    //click lemeden önce intercept ayarla
            path: '/api/v1/users/register'//bu path bu application api deki url eklentisi... ui ile alakası yok
        }).as('comments')                 //click öncesi as metodu ile atadık

        cy.clickk(register.signUp)

        cy.wait('@comments').then(intercept => {                //bu kod sayesinde response de istediğimiz yere ulaşıyoruz
            expect(intercept.response.statusCode).to.eqls(201) // isteğidimiz response de değere ulaşana kadar da bekliyor
            const token=intercept.response.body.access_token //api ye devam ederken token lazım

            //ui da yapılacak olan textbox a samet yazdırıp ok buton tik yapma
            //fonksiyonunu api ile devam ediyorum
            task.createTasks(token,'salih')
        
        })
        
        //tekrardan ui ile devam ediyorum silme işmemini gerçekleştirmek için
       cy.visit('https://todo.qacart.com/todo')
        cy.clickk(general.deleteButton)

    });
});
