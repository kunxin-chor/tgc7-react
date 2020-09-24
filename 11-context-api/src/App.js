import React from "react";
import ProductContext from "./ProductContext";
import ProductListing from "./ProductListing";

class App extends React.Component {
  state = {
    products: [
      {
        id: 1,
        product_name: "ACME Anvil",
        cost: 19.99
      },
      {
        id: 2,
        product_name: "ACME Hammer",
        cost: 10.0
      },
      {
        id: 3,
        product_name: "ACME Screwdriver",
        cost: 15.0
      }
    ]
  };

  componentDidMount() {
    // TODO: load in all the products from the database
    // and set inside the state
  }

  render() {
    const controller = {
      products: () => {
        return this.state.products;
      }, 
      addProduct: (product_name, cost) => {
        // if we are using a real database
        // 1. use axios to tell Flask/Django to create the new product
        // 2. Flask/Django should return the new product with its id
        // 3. Create a JavaScript object based on the return
        // 4. Add to state  
        
        let id = Math.random() * 10000 + 9999;
        // let newProduct = {
        //     'id': id,
        //     'product_name': product_name,
        //     'cost': cost
        // }

        let newProduct = { id, product_name, cost};
        this.setState({
            'products': [...this.state.products, newProduct]
        })
      }    
    };
    return (
      <React.Fragment>
        <ProductContext.Provider value={controller}>
          <ProductListing />
        </ProductContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
