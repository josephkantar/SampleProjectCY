import ContactPage from "../../pages/ContactPage";
import HomePagee from "../../pages/HomePage";

describe('WebDriver University Contact Us', () => {
   const homePage = new HomePagee()
   const contactPage=new ContactPage()

   it('Contact us pozitif test', () => {
      homePage.load_page()
      homePage.enter_contactUs_page()
      contactPage.enter_first_name()
      contactPage.enter_last_name()
      contactPage.enter_email_adress()
      contactPage.enter_commands()
      contactPage.click_submit_button()
      contactPage.verify_successfully_message()
   });

   it('Contact us negatif test unvalid email', () => {
      homePage.load_page()
      homePage.enter_contactUs_page()
      contactPage.enter_first_name()
      contactPage.enter_last_name()
      contactPage.enter_unvalid_email_adress()
      contactPage.enter_commands()
      contactPage.click_submit_button()
      contactPage.verify_error_invalid_email_adress_message()
   });

   it('Contact us negatif test empty first name box', () => {
      homePage.load_page()
      homePage.enter_contactUs_page()
      contactPage.enter_last_name()
      contactPage.enter_email_adress()
      contactPage.enter_commands()
      contactPage.click_submit_button()
      contactPage.verify_error_all_fields_are_required_message()
   });
});



