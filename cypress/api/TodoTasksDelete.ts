
export default class TodoTasksDelete{

    taskDelete(path:string){
        return cy.request({
            url:`https://todo.qacart.com/api/v1/tasks/${path}`,
            method:'DELETE'
        })
    }
}