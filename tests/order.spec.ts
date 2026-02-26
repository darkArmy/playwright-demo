import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('user can complete order', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addBackpackToCart();

  const count = await inventoryPage.getProductCount();
  expect(count).toBe(6);
});
