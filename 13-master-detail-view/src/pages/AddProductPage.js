import React from "react";
import AddProduct from "../AddProduct";
import {useHistory} from "react-router-dom";

export default function AddProductPage() {

  const history = useHistory();
  
  let gotoBackToHome = () => {
      history.push('/');
  }

  return (
    <React.Fragment>
      <h1>Add New Product</h1>
      <AddProduct onAddProduct={gotoBackToHome} />
    </React.Fragment>
  );
}
