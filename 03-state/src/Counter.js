import React from "react";

export default class Counter extends React.Component {
  // declare a state
  // the variable name MUST be `state`
  state = {
    count: this.props.initialValue
  };

  // use the arrow function
  increment = () => {
    // the below won't work!
    //  this.state.count += 1;

    // but the below must work
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width: "50px",
            color: this.state.count % 2 ==0 ? 'green' : 'red'
          }}
        >
          {this.state.count}
        </div>
        <button onClick={this.increment} disabled={this.state.count == 20}>+</button>
        <button onClick={this.decrement} disabled={this.state.count ==0}>-</button>
        <button disabled={true}>Test</button>
        { this.state.count % 2 ==0 ? <p>Number is even</p> : null}
      </React.Fragment>
    );
  }
}
