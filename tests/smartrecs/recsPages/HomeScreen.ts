export class navigateToDashboardRECS
{
    readonly page;
    readonly functionalUser;
    constructor(page)
    {
            this.page = page;
            
    }
    async navigateToDashboard(dashboardName:string)
    {
        const targetDashboard = await this.page.locator("//div[@class='main-route']//a[normalize-space(.)='"+dashboardName+"']") ;
        await targetDashboard.waitFor();
        await targetDashboard.click();
        await this.page.waitForLoadState();
    }
}




