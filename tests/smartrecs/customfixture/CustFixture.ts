import {LoginPage } from "../recsPages/LoginPageScreen";
import { test as base} from "@playwright/test"
import {  ReconciliationStrategy } from "../recsPages/ReconciliationStrategyScreen";
import { HomeScreen} from "../recsPages/HomeScreen"
import { Reconciliation } from "../recsPages/Reconciliation";
import { Product } from "../recsPages/Product";
import { Lookups } from "../recsPages/Lookups";
import { Pagination } from "../recsPages/components/pagination";

type Fixtures = {
   loginRecs:LoginPage,
   reconciliationStrategy:ReconciliationStrategy,
   homeScreen:HomeScreen
   reconciliation:Reconciliation
   product:Product,
   lookups:Lookups,
   pagination:Pagination
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
   },
   reconciliation:async({page},use)=>{
      await use(new Reconciliation(page))
   },
   product :async({page},use)=>{
      await use(new Product(page));
   },
   lookups :async({page},use)=>{
      await use(new Lookups(page));
   },
   pagination:async({page},use)=>{
      await use(new Pagination(page));
   }

})