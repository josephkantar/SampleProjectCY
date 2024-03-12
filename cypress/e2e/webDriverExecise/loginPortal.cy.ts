import HomePagee from "../../pages/HomePage";


describe('WebDriver University Login Portal', () => {
    const homePage = new HomePagee()

    it('Login portal test', () => {
        homePage.load_page()
        homePage.enter_login_page()
    });
});