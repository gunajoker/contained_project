import {test } from "../customfixture/CustFixture"
import {} from "../test-data/Users.json"


test('Regression - TCA0000001 - I validate error message is displayed on invalid login', async ({ page , loginRecs }) => {
   await loginRecs.invalidCredentialsLoginIntoRecsUI("user", "password");
});