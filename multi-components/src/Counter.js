import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  };

  constructor(props) {
    this.props = props;
  }

  render() {
    return (
      <div
        style={{
          border: "1px black solid",
          width: "50px",
          height: "50px",
          backgroundColor: this.props.bgcolor
        }}
      >
        <div>{this.state.count}</div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1
            });
          }}
        >
          +
        </button>
      </div>
    );
  }
}
