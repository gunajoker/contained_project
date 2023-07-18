import {Locator, Page} from "@playwright/test"
import { HomeScreen } from "./HomeScreen";

export class Lookups
{
    readonly page:Page
    readonly businessEntityResultList:Locator;
    constructor(page:Page)
    {
        this.page=page;
        this.businessEntityResultList = this.page.locator("//*[@data-locator='business-entity']//tr");
    }

    async navigateToLookupsPage()
    {
        const homeScreenObj = new HomeScreen(this.page);
        homeScreenObj.navigateToDashboard("Lookups");
        await this.waitTilBusinessEntityResultIsLoaded();
    }

    async switchToTabInLookups(switchTab:string)
    {
        var temp =this.page.locator(`//*[@data-locator="static-data-page-body"]//nav//span[normalize-space(text())='${switchTab}']/parent::a`);
        await temp.click();
    }
    
   
    async waitTilTableIsLoaded(tableDataLocator:string)
    {
       var temp = this.page.locator(`//*[@data-locator='${tableDataLocator}']//tr`); 
    }

    async waitTilBusinessEntityResultIsLoaded()
    {
        await this.businessEntityResultList.last().waitFor();
    }

}