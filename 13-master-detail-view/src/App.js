import React from "react";
import ProductContext from "./ProductContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import AddProductPage from "./pages/AddProductPage";

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

        let id = Math.floor(Math.random() * 10000 + 9999);
        // let newProduct = {
        //     'id': id,
        //     'product_name': product_name,
        //     'cost': cost
        // }

        let newProduct = { id, product_name, cost };
        this.setState({
          products: [...this.state.products, newProduct]
        });
      },
      findProductByID: productID => {
        let product = this.state.products.find(p => p.id === productID);
        console.log(product);
        return product;
        /*
            this.state.products.find( (p)=>{
                if (p.id == productID) {
                    return true;
                } 
                return false;
            })
          */
      }
    };
    return (
      <React.Fragment>
        <ProductContext.Provider value={controller}>
          <Router>
            <nav className="navbar navbar-expand-sm bg-light">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                      Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/addProduct" className="nav-link">Add New</Link>
                </li>              
              </ul>
            </nav>
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <ProductListingPage />
                </Route>
                <Route
                  path="/productDetails/:productID"
                  render={props => {
                    return <ProductDetailsPage {...props} />;
                  }}
                ></Route>
                <Route exact path="/addProduct">
                    <AddProductPage/>
                </Route>

              </Switch>
            </div>
          </Router>
        </ProductContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
