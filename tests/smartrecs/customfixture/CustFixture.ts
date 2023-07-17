import {LoginPage } from "../recsPages/LoginPageScreen";
import { test as base} from "@playwright/test"
import {  ReconciliationStrategy } from "../recsPages/ReconciliationStrategyScreen";
import { HomeScreen} from "../recsPages/HomeScreen"

type Fixtures = {
   loginRecs:LoginPage,
   reconciliationStrategy:ReconciliationStrategy,
   homeScreen:HomeScreen
}

export const test = base.extend<Fixtures>({
   loginRecs: async ({page},use) => {
   await use(new LoginPage(page));
   },
   reconciliationStrategy: async ({page},use) => {
      await use(new ReconciliationStrategy(page));
   },
   homeScreen:async({page},use)=> {
      await use(new HomeScreen(page))
   }
})