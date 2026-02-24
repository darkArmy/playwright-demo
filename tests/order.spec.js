const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('user can complete order', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addBackpackToCart();
  
  await expect(inventoryPage.products).toHaveCount(6);
});
