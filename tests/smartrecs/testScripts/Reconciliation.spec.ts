import {test } from "../customfixture/CustFixture"

test("op",async({page,loginRecs,reconciliation})=>{
    await loginRecs.loginIntoRecsUI("user5","password");
    await reconciliation.navigateToReconciliationPage();
    
})