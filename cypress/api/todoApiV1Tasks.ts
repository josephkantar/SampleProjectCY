

export default class todoApiV1Tasks {
   
    createTasks(token:string,data:string) {
        return cy.request({
            url:'https://todo.qacart.com/api/v1/tasks',
            method:'POST',
            body:{
              'item': data,
              'isCompleted': false
          },
              headers:{Authorization:`Bearer ${token}`}
        })
    }
}