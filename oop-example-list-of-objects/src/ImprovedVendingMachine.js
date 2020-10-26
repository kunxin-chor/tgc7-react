import React from "react";
import VendingMachineClass from "./VendingMachineClass";
import Product from "./Product"

export default class ImprovedVendingMachine extends React.Component {
  state = {
    vendingMachine: new VendingMachineClass([
      new Product("Pepsi Cola", 1.9, 10, 10),
      new Product("7-up", 1.5, 10, 10),
      new Product("Milo Iced", 0.9, 10, 10),
      new Product("Hot Milo", 0.8, 10, 10)
    ])
  };

  dispenseProduct = (product) => {
    let modifiedVendingMachine = Object.assign(new VendingMachineClass(), this.state.vendingMachine);
    //  let modifiedVendingMachine = new VendingMachineClass();
    //  modifiedVendingMachine.products = this.state.vendingMachine.products;
      modifiedVendingMachine.dispenseProduct(product);
      this.setState({
          'vendingMachine': modifiedVendingMachine
      })
  }

  displayProducts() {
    let allProducts = [];
    for (let p of this.state.vendingMachine.getProducts()) {
      allProducts.push(
        <li>
          {p.getName()} x {p.getQuantity()}{" "}
          <button
            onClick={() => {
              this.dispenseProduct(p);
            }}
          >
            Dispense
          </button>
        </li>
      );
    }
    return allProducts;
  }

  render() {
    return (
      <React.Fragment>
        <h1>Vending Machine</h1>
        <ul>{this.displayProducts()}</ul>
      </React.Fragment>
    );
  }
}
