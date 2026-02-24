const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

// 登录测试
test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('user can login successfully', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});