import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import AddProduct from "./AddProduct";

export default function ProductListing() {
  const controller = useContext(ProductContext);
  return (
    <React.Fragment>
      <h1>Products</h1>
      <ul>
        {controller.products().map( (p) => {
          return <li>{p.product_name}</li>;
        })}

        { /*

            controller.products().map( p => (<li>p.name</li>) )

        */}
            
      </ul>
      <AddProduct/>
    </React.Fragment>
  );
}
