import { test, expect, Page, request } from '@playwright/test';
import { loginIntoRecsUI } from "../recsPages/loginPage";
import * as ReconciliationStrategy from "../recsPages/reconciliationStrategy";
import * as commonFormat from "../library/objectRepo/commonts"



class Strategy {

  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  private cashPassDetail: commonFormat.passDetailsTable[] = [
    { name: "TLM Cash Perfect Match", position: 1 },
    { name: "TLM Cash Perfect Match Tolerance", position: 2 },
    { name: "TLM Cash Amount and Reference", position: 3 },
    { name: "TLM Cash Reference 1", position: 4 },
    { name: "TLM Cash Amount Only", position: 5 },
    { name: "TLM Cash Outstanding", position: 6 }
  ];

  private correctLogin = {
    userName: "user1",
    password: "password"
  }

  async viewPassDetailsOnStrategy() {
    await loginIntoRecsUI(this.page, this.correctLogin.userName, this.correctLogin.password);
    await ReconciliationStrategy.NavigateToReconciliationStrategy(this.page);
    await ReconciliationStrategy.viewStrategy(this.page, "TLM Cash Auto Match");
    await ReconciliationStrategy.verifyPassDetails(this.page, this.cashPassDetail);
    await ReconciliationStrategy.vt_reconStrategy_pass_screen(this.page);
  }
};


test('Verify pass details on strategy', async ({ page }) => {
  const strategy = new Strategy(page);
  await strategy.viewPassDetailsOnStrategy();

});

