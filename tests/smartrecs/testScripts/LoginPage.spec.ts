import {test } from "../customfixture/CustFixture"
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const u:string = process.env.functionalUsername!;
const p:string = process.env.functionalUserPassword!;

test('Regression - TCA0000001 - I validate error message is displayed on invalid login', async ({ page , loginRecs }) => {
   await loginRecs.invalidCredentialsLoginIntoRecsUI("user", "pass");
});