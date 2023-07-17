import { Page } from "@playwright/test";

/**
 * Navigation to all dashboards are handled here. Post login screen
 */
export class HomeScreen
{
    readonly page;
    readonly functionalUser;
    constructor(page:Page)
    {
            this.page = page;
            
    }
     /**
     * Navigates to the given screen and waits for page to load
     */
    async navigateToDashboard(dashboardName:string)
    {
        const targetDashboard = await this.page.locator("//div[@class='main-route']//a[normalize-space(.)='"+dashboardName+"']") ;
        await targetDashboard.waitFor();
        await targetDashboard.click();
        await this.page.waitForLoadState();
    }
}




