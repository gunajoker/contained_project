import { expect } from '@playwright/test';

/**
 * This class holds all the login page related locators and login functionalities
 */
export class loginRecs {

   readonly page;
   readonly userName;
   readonly password;
   readonly submitBtn;
   readonly userProfileIcon;
   readonly errorMsgForLogin;

   constructor(page) {
      this.page = page;
      this.userName = this.page.locator("input[placeholder='Username...']");
      this.password = this.page.locator("//input[@placeholder='Password...']");
      this.submitBtn = this.page.locator("//button[@type='submit']");
      this.userProfileIcon = this.page.locator("li[tooltip-placement='bottom']")
      this.errorMsgForLogin = this.page.locator("//tlmv-alert//span[normalize-space(text())='Invalid username or password.']")
   }

   /**
* This method navigates to the recs-ui URL and fills in using values passed to the method...
* @param username - username is a string 
* @param passWord - password is a string
*/
   async navigateAndFillLoginForm(username: string, passWord: string) {
      await this.page.goto('/recs-ui/');
      await expect(this.page).toHaveTitle("IdpUi");
      await this.userName.fill(username);
      await this.password.fill(passWord);
      await this.submitBtn.click();
      await this.page.waitForLoadState();
   }

   /**
* This method navigates to the recs-ui URL and logs in using values passed to the method by calling the method navigateAndFillLoginForm...
 * @param username - username is a string 
* @param passWord - password is a string
*/
   async loginIntoRecsUI(username: string, passWord: string) {
      await this.navigateAndFillLoginForm(username, passWord);
      await this.userProfileIcon.waitFor();
   }

   /**
    * This method navigates to the recs-ui URL and fills in using values passed to the method by calling the method navigateAndFillLoginForm and verifies the error message is displayed as incorrect username and password...
    * @param username - username is a string 
    * @param passWord - password is a string
    */
   async invalidCredentialsLoginIntoRecsUI(username: string, passWord: string) {
      await this.navigateAndFillLoginForm(username, passWord);
      await this.errorMsgForLogin.waitFor();
   }
}
