import {  expect } from '@playwright/test';

export class loginRecs{

    readonly page;
    readonly userName;
    readonly password;
    readonly submitBtn;
    readonly userProfileIcon;
    readonly errorMsgForLogin;

    constructor(page)
    {
            this.page=page;
            this.userName = this.page.locator("input[placeholder='Username...']");
            this.password = this.page.locator("//input[@placeholder='Password...']");
            this.submitBtn = this.page.locator("//button[@type='submit']");
            this.userProfileIcon = this.page.locator("li[tooltip-placement='bottom']")   
            this.errorMsgForLogin = this.page.locator("//tlmv-alert//span[normalize-space(text())='Invalid username or password.']")
    }

    async navigateAndFillLoginForm(username:string,passWord:string) {
        await this.page.goto('/recs-ui/');
        await expect(this.page).toHaveTitle("IdpUi");
        await this.userName.fill(username);
        await this.password.fill(passWord);
        await this.submitBtn.click();
        await this.page.waitForLoadState();
       }

    /**
 * This method navigates to the recs-ui URL and logs in using values passed to the method...
 * @param page     - calling methods page object should be passed
 * @param username - username is a string 
 * @param passWord - password is a string
 */
 async loginIntoRecsUI(username:string,passWord:string) {
    await this.navigateAndFillLoginForm(username,passWord);
    await this.userProfileIcon.waitFor();
   }

   async invalidCredentialsLoginIntoRecsUI(username:string,passWord:string) {
    await this.navigateAndFillLoginForm(username,passWord);
    await this.errorMsgForLogin.waitFor();
   }
}
