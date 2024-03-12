import HomePagee from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";


describe('WebDriver University Login Portal', () => {
    const homePage = new HomePagee()
    const loginPage=new LoginPage()

    it('Login portal test', () => {
        homePage.load_page()
        homePage.enter_login_page()
        loginPage.enter_username()
        loginPage.enter_password()
        loginPage.click_login_button()
        loginPage.verify_alert_message_validation_failed()
        
    });
});