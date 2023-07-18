import { test, expect } from '@playwright/test';




test('Codegen generated for google', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('coimbatore');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 });

 test('Codegen generated for google2', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('erode');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 });
 
 test('Codegen generated for google3', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('tirupur');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 });

 test('Codegen generated for google4', async ({ page }) => {
  await page.goto('https://www.google.com/?gws_rd=ssl');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('pollachi');
  await page.getByRole('combobox', { name: 'Search' }).press('Enter');
 });

console.log("h")

const a = function ()
{

}