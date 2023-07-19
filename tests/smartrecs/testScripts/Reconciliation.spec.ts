import {test } from "../customfixture/CustFixture"

test("op",async({page,loginRecs,reconciliation})=>{
    await loginRecs.loginIntoRecsUI("functionalUser");
    await reconciliation.navigateToReconciliationPage();
    
})