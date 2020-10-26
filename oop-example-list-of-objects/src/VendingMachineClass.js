import Product from "./Product";

export default class VendingMachineClass {
  products = [];
  constructor(allproducts) {
    this.products = allproducts;
  }

  dispenseProduct(product) {
    let clonedProduct = Object.assign(new Product(), product);
    clonedProduct.dispense();

    let index = this.products.findIndex(p => {
      return p === product;
    });

    this.products = [
      ...this.state.products.slice(0, index),
      clonedProduct,
      ...this.state.products.slice(index + 1)
    ];
  }

  getProducts() {
      return this.products;
  }
}
