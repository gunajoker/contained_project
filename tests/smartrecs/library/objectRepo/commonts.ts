import { Page } from "@playwright/test";

export interface passDetailsTable {
    name: string;
    position: number;
}

export async function initalizeReconStrategyLocators(page:Page) {
    const searchStrategybox = page.locator("#txtSearchMatchStrategy");
   
}