
import LoginByEmailApi from '../api/login/LoginByEmailApi';
import GetSentCodeToEmailApi from '../api/login/GetSenTCodeToEmailApi';
import GetSecurityCodeByEmailApi from '../api/login/GetSecurityCodeByEmailApi';
import RegisterByEmail from '../api/login/RegisterByEmail';
import User from '../models/User'

describe('Login By Email', () => {
	const user = new User();
	const loginByEmailApi = new LoginByEmailApi();
	const getSecurityCode=new GetSecurityCodeByEmailApi();
	const getSentCode=new GetSentCodeToEmailApi();
	const registerByEmail=new RegisterByEmail();
	let extractedNumber;

	it('Create Security Code', () => {
		getSecurityCode.createSecurityCode(user)

	});

	it('Get Sent Code To Email', () => {
		getSentCode.getCode(user)
		.then((response)=>{
			const inputString =response.body.data[0].mail_source.headers.subject;
			const regex = /Endolu Giriş Kodu: (\d+)/;
			const match = inputString.match(regex);
			user.setSecurityCode(extractedNumber = match ? match[1] : null);
			cy.log(extractedNumber)
		});
	});

	it('Create access Token', () => {

		loginByEmailApi.createToken(user)

	.then((response) => {
		expect(response.status).to.be.equal(200);
		user.setToken(response.body.data.token);
		cy.log(response.body.data.token)
	})

});

it('Register By Email', () => {
	registerByEmail.confirmUser(user)
	.then((response)=>{
		expect(response.status).to.be.equal(200);
		
	});
});

});
