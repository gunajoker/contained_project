import { Locator, Page, expect } from '@playwright/test';
import { env } from '../utils/env';


/**
 * This class holds all the login page related locators and login functionalities
 */
export class LoginPage {

   readonly page:Page;
   readonly userName:Locator;
   readonly password:Locator;
   readonly submitBtn:Locator;
   readonly userProfileIcon:Locator;
   readonly errorMsgForLogin:Locator;
   readonly keyIconOnPassword:Locator;

   constructor(page:Page) {
      this.page = page;
      this.userName = this.page.locator("input[placeholder='Username...']");
      this.password = this.page.locator("//input[@placeholder='Password...']");
      this.submitBtn = this.page.locator("//button[@type='submit']");
      this.userProfileIcon = this.page.locator("li[tooltip-placement='bottom']")
      this.errorMsgForLogin = this.page.locator("//tlmv-alert//span[normalize-space(text())='Invalid username or password.']")
      this.keyIconOnPassword = this.page.locator("//i[contains(@class,'key')]");
   }

   /**
* This method navigates to the recs-ui URL and fills in using values passed to the method...
* @param username - username is a string 
* @param passWord - password is a string
*/
   async navigateAndFillLoginForm(username: string, passWord: string) {
      await this.page.goto('/recs-ui/');
      await expect(this.page).toHaveTitle("IdpUi");
      await this.keyIconOnPassword.waitFor();
      await this.userName.type(username);
      await this.password.type(passWord);
      await this.submitBtn.click();
      await this.page.waitForLoadState();
    
   }

   /**
* This method navigates to the recs-ui URL and logs in using values passed to the method by calling the method navigateAndFillLoginForm...
 * @param username - username is a string 
* @param passWord - password is a string
*/
   async loginIntoRecsUI(userType:string) {
      if (userType ==="functionalUser")
      {
      await this.navigateAndFillLoginForm(env.functionalUsername, env.functionalUserpassword);
      await this.userProfileIcon.waitFor();
      }
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
