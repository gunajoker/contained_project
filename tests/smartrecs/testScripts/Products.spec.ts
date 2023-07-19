import {test } from "../customfixture/CustFixture"

test("Products smoke test",async({loginRecs,product,pagination,lookups,homeScreen})=>{
    await loginRecs.loginIntoRecsUI("functionalUser");
    // Navigating to lookups page
    await homeScreen.navigateToDashboard("Lookups");
    await lookups.waitTilTableIsLoaded("business-entity");
    // Switching to products tab
    await lookups.switchToTabInLookups("PRODUCTS");
    await lookups.waitTilTableIsLoaded("product-tab");
    // Testing the pagination in products tab
    await pagination.paginationConfigureLocators("product-list");
    await pagination.applyPageSizeFilter("5");
    await pagination.verifyPageSizeFilterIsApplied("5");
    await lookups.verifyOnlyExpectedNoOfItemsAreDisplayed("product-tab",5);
    await pagination.moveToNextPage();
    await pagination.verifyPageIsSelected("2");
    await pagination.moveToPreviousPage();
    await pagination.verifyPageIsSelected("1");
    await pagination.validateTotalNoOfItems("1-5 of 30");
    await pagination.validateTotalNoOfPages("6 pages")
    await pagination.moveToNthPageByClickingOnPageNumber("6");
    await pagination.moveToNthPageByEnteringPageNumber("4");

})


