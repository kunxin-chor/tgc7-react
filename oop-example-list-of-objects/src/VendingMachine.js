import React from "react";
import Product from "./Product";

export default class VendingMachine extends React.Component {
  state = {
    products: [
      new Product("Pepsi Cola", 1.9, 10, 10),
      new Product("7-up", 1.5, 10, 10),
      new Product("Milo Iced", 0.9, 10, 10),
      new Product("Hot Milo", 0.8, 10, 10)
    ]
  };

  dispenseProduct(product) {
      let clonedProduct = Object.assign(new Product(), product);
      clonedProduct.dispense();      

      let index = this.state.products.findIndex( (p) => {
        return p === product
      });

      let modifiedProductsList = [
        ...this.state.products.slice(0, index),
        clonedProduct,
        ...this.state.products.slice(index+1)
      ]

      this.setState({
          'products': modifiedProductsList
      })

  }

  displayProducts() {
    let allProducts = [];
    for (let p of this.state.products) {
      allProducts.push(<li>
          {p.getName()} x {p.getQuantity()} <button onClick={()=>{
              this.dispenseProduct(p)
          }}>Dispense</button>
        </li>);
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
