import RegisterPage from "../pages/RegisterPage";
import Register from "../models/Register";
const registerData=require('../fixtures/registerData.json')

describe('Add Register', () => {
    const getRegister=new RegisterPage()
    const user=new Register()

    it('Pozitif Senario Register', () => {
        getRegister.load()
        getRegister.registerAdd(user)
        getRegister.succesfullyMessage()
    });

    it('Negatif Senario Phone Number Fazla Numara', () => {
        getRegister.load()
        getRegister.negatifTestPhoneNumber(user,registerData.wrongPhoneNumber.fazlaNumara)
        getRegister.allertMessagePleaseValidPhoneNumber()
    });

    it('Negatif Senario Phone Number Hatalı Sıralama', () => {
        getRegister.load()
        getRegister.negatifTestPhoneNumber(user,registerData.wrongPhoneNumber.hatalıSıralama)
        getRegister.allertMessagePleaseValidPhoneNumber()
    });

    it('Negatif Senario Phone Number Eksik Numara', () => {
        getRegister.load()
        getRegister.negatifTestPhoneNumber(user,registerData.wrongPhoneNumber.eksikNumara)
        getRegister.errorMessageMinimum12Character()
    });
});