import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import {Link} from "react-router-dom";

export default function ProductListing() {
  const controller = useContext(ProductContext);
  return (
    <React.Fragment>
      <h1>Products</h1>
      <ul>
        {controller.products().map( (p) => {
          return <li><Link to={"/productDetails/" + p.id }>{p.product_name}</Link></li>;
        })}

        { /*

            controller.products().map( p => (<li>p.name</li>) )

        */}
            
      </ul>
    </React.Fragment>
  );
}
