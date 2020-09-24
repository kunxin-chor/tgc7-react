import React from "react";
import ProductContext from "./ProductContext"

export default class AddProduct extends React.Component {

  static contextType = ProductContext;

  state = {
    product_name: "",
    cost: ""
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addProduct = () => {
    this.context.addProduct(this.state.product_name, this.state.cost);
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            name="product_name"
            value={this.state.product_name}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            type="text"
            name="cost"
            value={this.state.cost}
            onChange={this.updateFormField}
          />
        </div>
        <button className="btn btn-primary" onClick={this.addProduct}>Create Product</button>
      </React.Fragment>
    );
  }
}
