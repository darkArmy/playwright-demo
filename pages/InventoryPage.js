class InventoryPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.inventory_item');
  }

  async addBackpackToCart() {
    await this.page.click(
      'button[name="add-to-cart-sauce-labs-backpack"]'
    );
  }

  async getProductCount() {
    return await this.products.count();
  }
}

module.exports = { InventoryPage };
