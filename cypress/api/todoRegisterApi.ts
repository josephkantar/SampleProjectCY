
import Todo from "../models/Todo";

export default class todoRegisterApi{
    register(user:Todo){
        return cy.request({
            url:'https://todo.qacart.com/api/v1/users/register',
            method:'POST',
            body:{
                "email":user.getEmail(),
                "password": user.getPassword(),
                "firstName": user.getfirstName(),
                "lastName": user.getlastname()
            }
        })
    }
}