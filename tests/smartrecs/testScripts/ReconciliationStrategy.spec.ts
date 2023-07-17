import {  expect, Page, request } from "@playwright/test";
import { test } from "../customfixture/CustFixture"

let userName:string ='user1';
let password:string ='password';
let tlmCashAutoMatchStrategy:string = "TLM Cash Auto Match";
const tlmCashAutoMatchStrategyPasses = [
  { name: "TLM Cash Perfect Match", position: 1 },
  { name: "TLM Cash Perfect Match Tolerance", position: 2 },
  { name: "TLM Cash Amount and Reference", position: 3 },
  { name: "TLM Cash Reference 1", position: 4 },
  { name: "TLM Cash Amount Only", position: 5 },
  { name: "TLM Cash Outstanding", position: 6 },
];

test("@Regression- Verify pass details on strategy", async ({ page ,loginRecs,reconciliationStrategy ,homeScreen }) => {
  await loginRecs.loginIntoRecsUI(userName, password);
  await reconciliationStrategy.NavigateToReconciliationStrategy();;
  await reconciliationStrategy.viewStrategy(tlmCashAutoMatchStrategy);
  await reconciliationStrategy.verifyPassDetails(tlmCashAutoMatchStrategyPasses);
  await reconciliationStrategy.reconStrategyPassScreenshot();  
});

test("@Regression- Verify pass details on Cash Strategy", async ({ page,loginRecs,reconciliationStrategy,homeScreen  }) => {
  await loginRecs.loginIntoRecsUI(userName, password);
  await reconciliationStrategy.NavigateToReconciliationStrategy();;
  await reconciliationStrategy.viewStrategy(tlmCashAutoMatchStrategy);
  await reconciliationStrategy.verifyPassDetails(tlmCashAutoMatchStrategyPasses);
  await reconciliationStrategy.reconStrategyPassScreenshot();
 
});

test("test here",async ({page,loginRecs})=>{
  
  // await page.goto("https://google.com");
  await expect(true,"You are expecting true but passing false").toBeTruthy();

  
})


