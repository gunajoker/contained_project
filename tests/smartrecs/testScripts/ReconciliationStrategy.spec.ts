import { test, expect, Page, request } from '@playwright/test';
import { loginRecs } from "../recsPages/LoginPage";
import * as strategyImport from "../recsPages/ReconciliationStrategy";
import * as premiumCommonImport from "../recsPages/HomeScreen"


test('Verify pass details on strategy', async ({ page }) => {
    const strategyObj = new strategyImport.strategy(page);
    const loginObj = new loginRecs(page);
    const premoumCommonObj = new premiumCommonImport.navigateToDashboardRECS(page);
  
    await loginObj.loginIntoRecsUI("user1", "password");
    await strategyObj.NavigateToReconciliationStrategy();
    await strategyObj.viewStrategy("TLM Cash Auto Match");
   
    const cashPassDetail:strategyImport.passes = [
      { name: "TLM Cash Perfect Match", position: 1 },
      { name: "TLM Cash Perfect Match Tolerance", position: 2 },
      { name: "TLM Cash Amount and Reference", position: 3 },
      { name: "TLM Cash Reference 1", position: 4 },
      { name: "TLM Cash Amount Only", position: 5 },
      { name: "TLM Cash Outstanding", position: 6 }
    ];

    await strategyObj.verifyPassDetails(cashPassDetail);
    await strategyObj.reconStrategyPassScreenshot();

});

