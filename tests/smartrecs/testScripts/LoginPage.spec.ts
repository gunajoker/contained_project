import { test, expect, Page, request } from '@playwright/test';
import {ObjectServer} from "../recsPages/ObjectServer"

test('Regression - TCA0000001 - I validate error message is displayed on invalid login', async ({ page }) => {
   const ObjectRep = new ObjectServer(page);
   const loginObj = ObjectRep.getLoginObj();
   await loginObj.invalidCredentialsLoginIntoRecsUI("user5", "password");

});