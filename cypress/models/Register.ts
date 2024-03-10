import { faker } from '@faker-js/faker';
export default class Register{
    private name:string
    private surName:string
    private birthPlace:string
    private phone:string
    private gender:string
    private dateOfBirth:string
    private ssn:string
    private userName:string
    private password:string

    constructor(){
        this.name="samet",
        this.surName="bayram",
        this.birthPlace="Karaman",
        this.phone=`${Math.floor(Math.random()*900)+100}-${Math.floor(Math.random()*900)+100}-${Math.floor(Math.random()*9000)+1000}`
        this.gender='MALE'
        this.dateOfBirth='2000-10-10'
        this.ssn=`${Math.floor(Math.random()*900)+100}-${Math.floor(Math.random()*90)+10}-${Math.floor(Math.random()*9000)+1000}`
        this.userName=`samet${Math.floor(Math.random()*90000)+10000}`
        this.password='Ab142790'
    }
    
    getName() {
        return this.name;
    }
    getSurName() {
        return this.surName;
    }
    getBirthPlace(){
        return this.birthPlace;
    }
    getPhone(){
        return this.phone;
    }
    getGender(){
        return this.gender;
    }
    getDateOfBirth(){
        return this.dateOfBirth;
    }
    getSsn(){
        return this.ssn;
    }
    getUserName(){
        return this.userName;
    }
    getPassword(){
        return this.password;
    }

}