import { Page, test, Expect, expect } from "@playwright/test";
import * as nav from '../common/navigatetomenufromhomepage';
import * as commonFormat from "../commonTs/commonts";


async function ReconciliationPageLoaded(page: Page) {
    const searchStrategybox = page.locator("#txtSearchMatchStrategy");
    page.waitForLoadState();
    await searchStrategybox.waitFor();

}


export async function NavigateToReconciliationStrategy(page: Page) {
    // nav.networkwait(page);
    await nav.navigateToDashboard(page, "Reconciliation Strategies");
    // page.waitForLoadState("networkidle");
    const createStrategyBtn = page.locator("//*[contains(@class, 'btn')][normalize-space(.)='Create Reconciliation Strategy']");
    ReconciliationPageLoaded(page);

}

export async function searchStrategy(page: Page, strategyName: string) {
    const searchStrategybox = page.locator("#txtSearchMatchStrategy");
    await searchStrategybox.fill(strategyName);
    await page.waitForLoadState();
    const searchResult = page.locator("//tr[(@id='match_strategy_row_')]//b[normalize-space(text())='" + strategyName + "']");
    await searchResult.waitFor();
}

export async function viewStrategy(page: Page, strategyName: string) {
    // nav.networkwait(page);
    searchStrategy(page, strategyName);
    const viewStrategyBtn = page.locator("//tr[(@id='match_strategy_row_')]//b[normalize-space(text())='" + strategyName + "']/ancestor::tr//a[normalize-space(.)='View']");
    // nav.networkwait(page);
    await viewStrategyBtn.click();
    page.waitForLoadState();
    const waitForStrategyToOpen = page.locator("//div[@id='strategyEditNameClickPoint'][normalize-space(text())='" + strategyName + "']");
    await waitForStrategyToOpen.waitFor();
    page.waitForLoadState();
    await page.locator("div[class='pass name']").last().waitFor();
}




export async function verifyPassDetails(page: Page, pass: commonFormat.passDetailsTable[]) {
    pass.forEach(element => {
        verifyPassPresent(page, element.name, element.position);
    });
}

export async function verifyPassPresent(page: Page, passName: string, atPosition: number) {

    const targetPassName = page.locator(`(//div[@class='pass name'])[${atPosition}]//div[normalize-space(text())='${passName}']`)
    await expect(targetPassName).toBeVisible();


}
