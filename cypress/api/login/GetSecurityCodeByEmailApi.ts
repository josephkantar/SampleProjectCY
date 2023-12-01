import User from '../../models/User'

export default class GetSecurityCodeByEmailApi{
    createSecurityCode(user : User){
        return cy.request({
            method:'POST',
            url:'/api/Auth/sendsecuritycodeaftercheckingmailforlogin',
            body : {
                email:user.getEmail()
            }
        });
    }
  
}