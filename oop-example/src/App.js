import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import "./Product";
import Product from "./Product";

class App extends React.Component {
    state = {
        'product':  new Product("Pepsi", 1.3, 10, 10)
    }

    changeName = () => {
        // use Object.assign to clone the existing object
        // because the existing product object is created from a class
        let cloneProduct = Object.assign(new Product(), this.state.product);
        cloneProduct.setName("Diet Coke");
        this.setState({
            'product': cloneProduct
        });
    }

  render() {
      
    return <div className="App">
        {this.state.product.getName()}
        <div>
            <button onClick={this.changeName}>Change Name</button>
        </div>

    </div>;
  }
}

export default App;
