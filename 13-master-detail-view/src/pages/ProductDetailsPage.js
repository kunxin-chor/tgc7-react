import React from "react";
import ProductContext from "../ProductContext";

export default class ProductDetailsPage extends React.Component {
  static contextType = ProductContext;
  state = {
    productID: 0
  };

  componentDidMount() {
    let productID = this.props.match.params.productID;
    this.setState({
      'productID': parseInt(productID)
    });
  }

  render() {
    let product = this.context.findProductByID(this.state.productID);
    return (
        <React.Fragment>

        { product ? (
            <React.Fragment>
            <h1>{product.product_name}</h1>
            <ul>
                <li>Cost: {product.cost}</li>
            </ul>

            </React.Fragment>
            
            ) : null}

            
        </React.Fragment>

      
    );
  }
}
