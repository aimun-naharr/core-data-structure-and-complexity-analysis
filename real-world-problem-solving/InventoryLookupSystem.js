class InventoryLookupSystem {
  constructor() {
    this.products = new Map();
  }
  add(id, product) {
    //space complexity is O(1)
    //time complexity is O(1)
    if (this.products.has(id)) {
      throw new Error("Product ID already exists.");
    }
    this.products.set(id, product);
  }
  isAvailable(id) {
    //space complexity is O(1)
    //time complexity is O(1)
    return this.products.has(id);
  }
  remove(id) {
    //space complexity is O(1)
    //time complexity is O(1)
    this.products.delete(id);
  }
  getById(id) {
    //space complexity is O(1)
    //time complexity is O(1)
    return this.products.get(id) || null;
  }
}