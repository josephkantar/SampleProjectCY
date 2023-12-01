import { faker } from '@faker-js/faker';
import GetSecurityCodeByEmailApi from '../api/login/GetSecurityCodeByEmailApi';

export default class User {
    private email: string;
    private username: string;
    private firstName: string;
    private lastName: string;
    private securityCode: string;
    private test: boolean;
    private token: string;


    constructor() {
        this.email = "testendolu@mail7.io",
            this.username = faker.internet.userName();
        this.firstName = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.test = true
    }

    getEmail() {
        return this.email;
    }
    getUsername() {
        return this.username;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }

    getSecurityCode() {
        return this.securityCode;
    }

    setSecurityCode(securityCode: string) {
        this.securityCode = securityCode;
    }

    getTest() {
        return this.test;
    }
    getToken() {
        return this.token;
    }

    setToken(token: string) {
        this.token = token;
    }

}