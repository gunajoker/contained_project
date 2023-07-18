import {Locator, Page} from "@playwright/test"
import {HomeScreen} from "../recsPages/HomeScreen"

export class Reconciliation
{
    readonly page:Page;
    readonly reconciliationResultList:Locator;
    constructor(page)
    {
        this.page=page;
        this.reconciliationResultList=this.page.locator("//*[contains(@id,'elementRow_')]");
    }

    async navigateToReconciliationPage()
    {
        const nav = new HomeScreen(this.page);
        await nav.navigateToDashboard("Reconciliations");
        await this.waitTilReconciliationResultIsDisplayed();
    }

    async waitTilReconciliationResultIsDisplayed()
    {
        await this.reconciliationResultList.last().waitFor();
    }

}