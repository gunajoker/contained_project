import { Page, test, Expect, expect } from "@playwright/test";
import { navigateToDashboardRECS } from './HomeScreen';


type pass = {
    name:string,
    position : number;
  }
export type passes = pass[];

export class strategy
{
    readonly page:Page;
    readonly searchStrategybox;
    readonly createStrategyBtn;
    readonly navigationObj;
    readonly attributes;
    

constructor(page:Page)
{
    this.page = page;
    this.searchStrategybox = this.page.locator("#txtSearchMatchStrategy");
    this.createStrategyBtn = this.page.locator("//*[contains(@class, 'btn')][normalize-space(.)='Create Reconciliation Strategy']");
    this.attributes = this.page.locator("//*[@data-locator='attributes-tab']//div[@uib-tooltip]");
   
    
    this.navigationObj = new navigateToDashboardRECS(this.page);
   
}


async ReconciliationPageLoaded() {
    this.page.waitForLoadState();
    await this.searchStrategybox.waitFor();

}


async NavigateToReconciliationStrategy() {
    // nav.networkwait(page);
    await this.navigationObj.navigateToDashboard("Reconciliation Strategies");
    // page.waitForLoadState("networkidle");
    this.ReconciliationPageLoaded();

}

async searchStrategy(strategyName: string) {
    await this.searchStrategybox.fill(strategyName);
    await this.page.waitForLoadState();
    const searchResult = this.page.locator("//tr[(@id='match_strategy_row_')]//b[normalize-space(text())='" + strategyName + "']");
    await searchResult.waitFor();
}

async viewStrategy(strategyName: string) {
    // nav.networkwait(page);
    this.searchStrategy(strategyName);
    const viewStrategyBtn = this.page.locator("//tr[(@id='match_strategy_row_')]//b[normalize-space(text())='" + strategyName + "']/ancestor::tr//a[normalize-space(.)='View']");
    // nav.networkwait(page);
    await viewStrategyBtn.click();
    this.page.waitForLoadState();
    const waitForStrategyToOpen = this.page.locator("//div[@id='strategyEditNameClickPoint'][normalize-space(text())='" + strategyName + "']");
    await waitForStrategyToOpen.waitFor();
    this.page.waitForLoadState();
    await this.page.locator("div[class='pass name']").last().waitFor();
    await this.page.waitForSelector('div.card-container.pass', { state: 'visible' });
    await this.page.waitForTimeout(3000);
    await this.attributes.last().waitFor();
}




async verifyPassDetails(pass) {
    pass.forEach(element => {
        this.verifyPassPresent(element.name, element.position);
    });
}

async verifyPassPresent(passName: string, atPosition: number) {

    const targetPassName = this.page.locator(`(//div[@class='pass name'])[${atPosition}]//div[normalize-space(text())='${passName}']`)
    await expect(targetPassName).toBeVisible();


}

async reconStrategyPassScreenshot() {
    await this.page.screenshot({path:'pass_screenshot.png'});
    // await expect(await page.screenshot()).toMatchSnapshot('PassScreenshot.png');
}

}
