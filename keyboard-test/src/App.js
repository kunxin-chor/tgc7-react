import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./BoxComponent";
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    console.log("Component Did Mount .............");
    document.getElementById("App").focus();
  }

  handleKey = () => {
    alert('hi');
  }

  render() {
    return (
      <div className="App" id="App" onKeyDown={this.handleKey} tabIndex={-1}>
        <BoxComponent />
      </div>
    );
  }
}

export default App;
