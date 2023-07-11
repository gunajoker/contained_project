import {test,Page,expect} from "@playwright/test"

export async function navigateToDashboard(page:Page,dashboardName:string)
{
    const targetDashboard = await page.locator("//div[@class='main-route']//a[normalize-space(.)='"+dashboardName+"']") ;
    await targetDashboard.waitFor();
    await targetDashboard.click();
    await page.waitForLoadState();
}



