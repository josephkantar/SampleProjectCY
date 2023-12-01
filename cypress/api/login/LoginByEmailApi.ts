import User from '../../models/User'

export default class LoginByEmailApi {
	createToken(user: User) {
		return cy.request({
			method: 'POST',
			url: '/api/Auth/loginbymail',
			body: {
				email: user.getEmail(),
				securityCode: user.getSecurityCode(),
				test:user.getTest()
			}
		});
	}
}
