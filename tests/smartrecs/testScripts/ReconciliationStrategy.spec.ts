import { test, expect, Page, request } from '@playwright/test';
import {ObjectServer} from "../recsPages/ObjectServer"



test('Verify pass details on strategy', async ({ page }) => {
    
    const ObjectRep = new ObjectServer(page);
    const loginObj1 = ObjectRep.getLoginObj();
    const strategyObj1 = ObjectRep.getStrategyObj();
    await loginObj1.loginIntoRecsUI("user1", "password");
    await strategyObj1.NavigateToReconciliationStrategy();
    await strategyObj1.viewStrategy("TLM Cash Auto Match");
   
    const cashPassDetail = [
      { name: "TLM Cash Perfect Match", position: 1 },
      { name: "TLM Cash Perfect Match Tolerance", position: 2 },
      { name: "TLM Cash Amount and Reference", position: 3 },
      { name: "TLM Cash Reference 1", position: 4 },
      { name: "TLM Cash Amount Only", position: 5 },
      { name: "TLM Cash Outstanding", position: 6 }
    ];

    await strategyObj1.verifyPassDetails(cashPassDetail);
    await strategyObj1.reconStrategyPassScreenshot();

});

