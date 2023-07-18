import { Lookups } from "./Lookups";
import { Page } from "@playwright/test";
import { Pagination } from "./components/pagination"

export class Product {
  readonly page: Page;
  lookups: Lookups | null = null;
  pagination : Pagination | null = null;

  constructor(page) {
    this.page = page;
  }

  
}
