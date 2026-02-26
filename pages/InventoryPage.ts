import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  private products: Locator;
  private backpackButton: Locator;

  constructor(private page: Page) {
    this.products = page.locator('.inventory_item');
    this.backpackButton = page.locator('button[name="add-to-cart-sauce-labs-backpack"]');
  }

  async addBackpackToCart(): Promise<void> {
    await this.backpackButton.click();
  }

  async getProductCount(): Promise<number> {
    return await this.products.count();
  }
}
