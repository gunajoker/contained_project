import {test } from "../customfixture/CustFixture"

test("Products smoke test",async({loginRecs,product,pagination,lookups})=>{
    await loginRecs.loginIntoRecsUI("user5","password");
    await lookups.navigateToLookupsPage();
    await lookups.switchToTabInLookups("PRODUCTS");
    await lookups.waitTilTableIsLoaded("product-tab");
    await pagination.paginationConfigureLocators("product-list");
    await pagination.applyPageSizeFilter("5");
    await pagination.verifyPageSizeFilterIsApplied("5");
    await pagination.moveToNextPage();
    await pagination.verifyPageIsSelected("2");
    await pagination.moveToPreviousPage();
    await pagination.verifyPageIsSelected("1");
    await pagination.validateTotalNoOfItems("1-5 of 30");
    await pagination.validateTotalNoOfPages("6 pages")
    await pagination.moveToNthPageByClickingOnPageNumber("6");
    await pagination.moveToNthPageByEnteringPageNumber("4");
})