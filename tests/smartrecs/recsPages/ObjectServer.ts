import { Page, test, Expect, expect } from "@playwright/test";
import { loginRecs } from "../recsPages/LoginPageScreen";
import {  strategy } from "../recsPages/ReconciliationStrategyScreen";
import { navigateToDashboardRECS} from "../recsPages/HomeScreen"

export class ObjectServer {
    
    readonly page:Page;
    readonly navigationObj:navigateToDashboardRECS;
    readonly loginObj:loginRecs;
    readonly strategyObj:strategy;
    

    constructor(page:Page)
    {
        this.page=page;
     }
   
    getNavigationobj(){
        return new navigateToDashboardRECS(this.page)
    }
    getLoginObj(){
        return new loginRecs(this.page);
    }
    getStrategyObj(){
        return new strategy(this.page);
    }
   
    
}