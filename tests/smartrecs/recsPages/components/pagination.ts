import { Locator, Page ,expect} from "@playwright/test";

/**
 * Create an object of this class and use all the methods to test the tlm view pagination control
 */

export class Pagination
{
    readonly page:Page;
    paginationRootNode:Locator;
    paginationfirstPart:Locator;
    paginationSecondPart:Locator;
    paginationPager:Locator;
    paginationJumper:Locator;
    pagerMoveRightIcon:Locator;
    pagerMoveLeftIcon:Locator;
    paginationJumperGoIcon:Locator;
    paginationJumperSpan:Locator;
    paginationJumperInput:Locator;

    /**
     * This class performs all actions related to the pagination control. use this method to initialize pagination - paginationConfigureLocators .
     * @param page              --> Page object should be passed
     * @param paginationLocator --> Parent element of the tlmv-pagination-controls element's data locator should be passed
     */
    constructor(page:Page)
    {
        this.page=page;
    }
    async paginationConfigureLocators(paginationLocator:string)
    {
        this.paginationRootNode= this.page.locator(`//*[@data-locator="${paginationLocator}"]//tlmv-pagination-controls`);
        this.paginationfirstPart= this.paginationRootNode.locator("//span[contains(@class,'tlmv-c-pagination-controls-information')]");
        this.paginationSecondPart = this.paginationRootNode.locator("//span[contains(@class,'tlmv-c-pagination-controls-end')]");
        this.paginationPager = this.paginationSecondPart.locator("//tlmv-pager");
        this.pagerMoveRightIcon=this.paginationPager.locator("//tlmv-icon[@icon='caret-right']");
        this.pagerMoveLeftIcon=this.paginationPager.locator("//tlmv-icon[@icon='caret-left']");
        this.paginationJumper = this.paginationSecondPart.locator("//tlmv-page-jumper");
        this.paginationJumperSpan = this.paginationJumper.locator("//tlmv-editable-text//span");
        this.paginationJumperGoIcon=this.paginationJumper.locator("//tlmv-icon[@icon='caret-right']");
        this.paginationJumperInput = this.paginationJumper.locator("//input");
    }

    /**
     * This method applies size limit on the total number of results displayed. only the selected number of results will be displayed
     * @param pageSizeLimit -  5,10,50,100  
     */
    async applyPageSizeFilter(pageSizeLimit:string)
    {
        var pageSizeFilterToBeSelected:Locator = this.paginationfirstPart.locator(`//tlmv-page-size-selector//p[normalize-space(text())='${pageSizeLimit}']`);
        await pageSizeFilterToBeSelected.click();
        await this.verifyPageSizeFilterIsApplied(pageSizeLimit)
    }

    /**
     * This verifies that size limit is applied on particular given value
     * @param pageSizeLimit -  5,10,50,100  
     */
    async verifyPageSizeFilterIsApplied(pageSizeLimit)
    {
        var pageSizeFilterToBeSelected:Locator = this.paginationfirstPart.locator(`//tlmv-page-size-selector//p[normalize-space(text())='${pageSizeLimit}']`);
        expect(await pageSizeFilterToBeSelected.getAttribute('class')).toContain("tlmv-c-page-size-selector-size--active") 
    }


    async validateTotalNoOfItems(expectedTotalNoOfItems:string)
    {
        expect(this.paginationfirstPart.locator(`//tlmv-item-range//p[normalize-space(text())='${expectedTotalNoOfItems}']`)).toBeVisible();
    }

    /**
     * 
     * @param expectedTotalNoOfPages -- example values - 1 page, 2pages, 3pages
     */
    async validateTotalNoOfPages(expectedTotalNoOfPages:string)
    {
        expect(this.paginationfirstPart.locator(`//tlmv-total-pages//p[normalize-space(text())='${expectedTotalNoOfPages}']`)).toBeVisible(); 
    }

    async moveToNextPage()
    {
        await this.pagerMoveRightIcon.click();
    }

    async moveToPreviousPage()
    {
        await this.pagerMoveLeftIcon.click();
    }

    async moveToNthPageByClickingOnPageNumber(targetPageNumber:string)
    {
        var toBeClicked = this.paginationPager.locator(`//tlmv-page-range//span[normalize-space(text())='${targetPageNumber}']`);
        await toBeClicked.click(); 
        await this.verifyPageIsSelected(targetPageNumber);
    }

    async verifyPageIsSelected(targetPageNumber:string)
    {
        var toBeClicked = this.paginationPager.locator(`//tlmv-page-range//span[normalize-space(text())='${targetPageNumber}']`);
        expect(await toBeClicked.getAttribute('class')).toContain("tlmv-c-page-range-button--active");
    }

    async moveToNthPageByEnteringPageNumber(targetPageNumber:string)
    {
            await this.paginationJumperSpan.click();
            await this.paginationJumperInput.fill(targetPageNumber);
            await this.paginationJumperGoIcon.click();
            await this.verifyPageIsSelected(targetPageNumber);
    }

        }