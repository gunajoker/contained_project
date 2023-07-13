import { navigateToDashboardRECS } from './HomeScreen';
import { Page, test, Expect, expect } from "@playwright/test";
import { loginRecs } from "../recsPages/LoginPageScreen";
import * as strategyImport from "../recsPages/ReconciliationStrategyScreen";
import * as premiumCommonImport from "../recsPages/HomeScreen"

export class ObjectServer {
    
    readonly page;
    readonly navigationObj;
    readonly loginObj;
    readonly strategyObj;
    readonly premiumCommonObj;
    readonly passFormat;

    constructor(page:Page)
    {
        this.page=page;
        this.navigationObj = new navigateToDashboardRECS(this.page);
        this.loginObj = new loginRecs(this.page);
        this.strategyObj = new strategyImport.strategy(this.page);
        this.premiumCommonObj = new premiumCommonImport.navigateToDashboardRECS(this.page)
    }
   
    getNavigationobj(){
        return this.navigationObj;   
    }
    getLoginObj(){
        return this.loginObj;
    }
    getStrategyObj(){
        return this.strategyObj;
    }
    getPremiumCommonObj(){
        return this.premiumCommonObj;
    }
    
}