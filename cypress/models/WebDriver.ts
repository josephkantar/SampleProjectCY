import { faker } from '@faker-js/faker';

export default class WebDriver{

    private username: string;
    private password: string;
    private test:boolean;
    private token:string;
    

    constructor() {
        this.username = faker.internet.userName();
        this.password = "Ab142790";
        this.test = true
    }

    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getTest(){
        return this.test;
    }
    //Token i bilgi amaçlı koydum. Set edip kullanmak gerekirse
    getToken() {
        return this.token;
    }
    setToken(token: string) {
        this.token = token;
    }








}