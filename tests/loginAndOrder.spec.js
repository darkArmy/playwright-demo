const { test, expect } = require('./fixtures');

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('add item to cart', async ({ inventoryPage }) => {
  await inventoryPage.addBackpackToCart();
});