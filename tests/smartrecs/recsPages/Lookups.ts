import {Locator, Page, expect} from "@playwright/test"

export class Lookups
{
    readonly page:Page
    constructor(page:Page)
    {
        this.page=page;  
    }


    async switchToTabInLookups(switchTab:string)
    {
        var temp =this.page.locator(`//*[@data-locator="static-data-page-body"]//nav//span[normalize-space(text())='${switchTab}']/parent::a`);
        await temp.click();
    }
   
    async waitTilTableIsLoaded(tableDataLocator:string)
    {
       await this.page.locator(`//*[@data-locator='${tableDataLocator}']//tr`).last().waitFor();
    }
    
    async verifyOnlyExpectedNoOfItemsAreDisplayed(tab:string,countOfExpectedItems:number)
    {
      const countOfActualItems= await this.page.locator(`//*[@data-locator="${tab}"]//*[@data-locator="ellipsis-button"]`).count();
      await expect(countOfActualItems).toBe(countOfExpectedItems);
    }

}