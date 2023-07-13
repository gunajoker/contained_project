import { test, expect, Page, request } from '@playwright/test';
import { loginRecs } from "../recsPages/LoginPageScreen";

test('Regression - TCA0000001 - I validate error message is displayed on invalid login', async ({ page }) => {
   const loginObj = new loginRecs(page);
   await loginObj.invalidCredentialsLoginIntoRecsUI("user5", "password");

});