import {  expect } from '@playwright/test';

export class loginRecs{
    readonly page;
    constructor(page)
    {
            this.page=page;
    }
    /**
 * This method navigates to the recs-ui and logs in...
 * @param page     - calling methods page object should be passed
 * @param username - username is a string 
 * @param passWord - password is a string
 */
 async loginIntoRecsUI(username:string,passWord:string) {
    await this.page.goto('/recs-ui/');
    await expect(this.page).toHaveTitle("IdpUi");
    const userName = this.page.locator("input[placeholder='Username...']");
    await userName.fill(username);
    const password = await this.page.locator("//input[@placeholder='Password...']");
    await password.fill(passWord);
    const submitBtn = await this.page.locator("//button[@type='submit']");
    await submitBtn.click();
    await this.page.waitForLoadState();
    const userProfileIcon = await this.page.locator("li[tooltip-placement='bottom']")
    await userProfileIcon.waitFor();
   }
}
