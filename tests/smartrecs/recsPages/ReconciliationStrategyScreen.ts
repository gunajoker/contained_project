import { Page, test, Expect, expect, Locator } from "@playwright/test";
import {ObjectServer} from "../recsPages/ObjectServer"

/**
 *  single pass name and its position . used with Type:passes as an array to validate all pass list in a strategy
 */
type pass = {
    name:string,
    position : number;
  }

/**
 *  Passes name and its positions are stored to test the same in order in reconciliations strategy
 */
type passes = pass[];

/**
 * Strategy related all locators and functionalities are stored here
 */
export class strategy
{
    readonly page:Page;
    readonly searchStrategybox:Locator;
    readonly createStrategyBtn:Locator;
    readonly attributes;
    

constructor(page:Page)
{
    this.page = page;
    this.searchStrategybox = this.page.locator("#txtSearchMatchStrategy");
    this.createStrategyBtn = this.page.locator("//*[contains(@class, 'btn')][normalize-space(.)='Create Reconciliation Strategy']");
    this.attributes = this.page.locator("//*[@data-locator='attributes-tab']//div[@uib-tooltip]");
   
}

/**
 * Waits until the page is loaded by validating the presence of search strategy box
 */
async ReconciliationPageLoaded() {
    this.page.waitForLoadState();
    await this.searchStrategybox.waitFor();

}

/**
 * Wrapper method and goes to reconciliation strategy dashboard
 */
async NavigateToReconciliationStrategy() {
    // nav.networkwait(page);
    const objrepo = new ObjectServer(this.page);
    let navigationObj = objrepo.getNavigationobj();
    await navigationObj.navigateToDashboard("Reconciliation Strategies");
    // page.waitForLoadState("networkidle");
    this.ReconciliationPageLoaded();

}

/**
 * Searches for strategy in the strategy page
 */
async searchStrategy(strategyName: string) {
    await this.searchStrategybox.fill(strategyName);
    await this.page.waitForLoadState();
    const searchResult = this.page.locator("//tr[(@id='match_strategy_row_')]//b[normalize-space(text())='" + strategyName + "']");
    await searchResult.waitFor();
}

/**
 * Views the strategy listed in the search result
 */
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


/**
 * Verifies passes are displayed in the same order as mentioned
 */
async verifyPassDetails(pass:passes) {
    pass.forEach(element => {
        this.verifyPassPresent(element.name, element.position);
    });
}

/**
 * Verifies pass is present at mentioned position
 */
async verifyPassPresent(passName: string, atPosition: number) {

    const targetPassName = this.page.locator(`(//div[@class='pass name'])[${atPosition}]//div[normalize-space(text())='${passName}']`)
    await expect(targetPassName).toBeVisible();


}
/**
 * Takes screenshot of the reconciliation strategy . technically it is just the current page
 */
async reconStrategyPassScreenshot() {
    await this.page.screenshot({path:'pass_screenshot.png'});
    // await expect(await page.screenshot()).toMatchSnapshot('PassScreenshot.png');
}

}