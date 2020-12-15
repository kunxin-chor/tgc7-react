import logo from "./logo.svg";
import "./App.css";
import BoxComponent from "./BoxComponent";
import React from "react";

class App extends React.Component {
  componentDidMount() {
    console.log("Component Did Mount .............");
    document.getElementById("App").focus();
  }

  handleKey = e => {
      console.log(e.keyCode)
    if (e.keyCode === 65) {
      this.setState({
        a_pressed: true
      });
      setTimeout(() => {
          console.log("reset");
        this.setState({
          a_pressed: false
        });
      }, 1000);
    }
    if (e.keyCode === 66) {
      this.setState({
        b_pressed: true
      });
      setTimeout(() => {
        this.setState({
          b_pressed: false
        });
      }, 1000);
    }
  };

  state = {
    a_pressed: false,
    b_pressed: false
  };

  render() {
    return (
      <div className="App" id="App" onKeyDown={this.handleKey} tabIndex={-1}>
        <BoxComponent keyIsDown={this.state.a_pressed} name="A" />
        <BoxComponent keyIsDown={this.state.b_pressed} name="B"/>
      </div>
    );
  }
}

export default App;
