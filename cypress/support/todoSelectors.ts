export const loginPage={
    inputEmail:"[data-testid='email']",
    inputPassword:"[data-testid='password']",
    loginButton:"[data-testid='submit']"
}
export const general={
    welcome:'[data-testid="welcome"]',
    newTodo:'.sc-hHLeRK',
    addButton:"[data-testid='add']",
    headers:'[data-testid="header"]',
    textBox:'[data-testid="new-todo"]',
    createButton:'[data-testid="submit-newTask"]',
    deleteButton:'[data-testid="delete"]'
}


export const text={// normalde text için farklı input.ts dosyası aç şimdilik buraya koydum
    newTodoText:'Add a new Todo',
    createTodoText:"Create a new Todo"
}

export const register={
        firstName:'input[data-testid="first-name"]',
        lastName:'[data-testid="last-name"]',
        email:'[data-testid="email"]',
        password:'[data-testid="password"]',
        confirmPassword:'[data-testid="confirm-password"]',
        signUp:'[data-testid="submit"]',
        headers:'[data-testid="welcome"]',
        message:'.MuiAlert-message'
}