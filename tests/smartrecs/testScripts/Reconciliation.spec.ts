import {test } from "../customfixture/CustFixture"

test("op",async({page,loginRecs,homeScreen})=>{
    await loginRecs.loginIntoRecsUI("user5","password");
    await homeScreen.navigateToDashboard("Reconciliations");
})