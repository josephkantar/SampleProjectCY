
import Todo from "../models/Todo";
import RegisterTodo from "../pages/RegisterTodo";
const email=require('../fixtures/todo.json')
describe('Todo Register', () => {
    const rgstr=new RegisterTodo()
    const todo=new Todo()
    
    it('Todo Register Pozitif Senario', () => {
        rgstr.load()
        rgstr.register(todo)
        rgstr.headersMessage(todo)
    });
    
    it('Todo Register Negatif Senario Email', () => {
        rgstr.load()
        rgstr.registerNegatifTest(todo,email)
        cy.dynamicWait('.MuiAlert-message') //bu selector u da biyere koy öyle çağır
        rgstr.alreadyExistsMessage()
    });
});
// Bu çalışma da ki kullanılan pom yetersiz silmedim örnek olarak duruyor asıl model 
// loginAutomation ve todologin içinde ki yerdir