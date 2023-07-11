import { test, expect, Page } from '@playwright/test';

/**
 * This method navigates to the recs-ui and logs in...
 * @param page     - calling methods page object should be passed
 * @param username - username is a string 
 * @param passWord - password is a string
 */
 export async function loginIntoRecsUI(page:Page,username:string,passWord:string) {
  await page.goto('/recs-ui/');
  await expect(page).toHaveTitle("IdpUi");
  const userName = page.locator("input[placeholder='Username...']");
  await userName.fill(username);
  const password = await page.locator("//input[@placeholder='Password...']");
  await password.fill(passWord);
  const submitBtn = await page.locator("//button[@type='submit']");
  await submitBtn.click();
  await page.waitForLoadState();
  const userProfileIcon = await page.locator("li[tooltip-placement='bottom']")
  await userProfileIcon.waitFor();
 }