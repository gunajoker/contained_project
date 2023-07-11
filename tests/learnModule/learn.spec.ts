import { test, expect } from '@playwright/test';

test.skip('Codegen generated for google', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('coimbatore');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
  await page.getByRole('link', { name: 'Coimbatore district Wikipedia https://en.wikipedia.org › wiki › Coimbatore_district' }).click();
});