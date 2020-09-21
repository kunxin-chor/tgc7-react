import React from "react";

export default class Counter extends React.Component {

 // declare a state
 // the variable name MUST be `state`
 state= {
    count: 10
 }

 // use the arrow function
 increment = () => {
    // the below won't work!
    //  this.state.count += 1;

    // but the below must work
     this.setState({
         count: this.state.count + 1
     })
 }

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            width:"50px"
          }}
          onClick={this.increment}
        >
          {this.state.count}
        </div>
        <p>Current Count = {this.state.count}</p>
      </React.Fragment>
    );
  }
}
