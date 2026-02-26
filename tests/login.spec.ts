import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('user can login successfully', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});
