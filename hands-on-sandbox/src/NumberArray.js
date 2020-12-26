import React from "react";

export default class NumberArray extends React.Component {
  state = {
    numbers: [1, 3, 7, 9, 11],
    newNumber: 0
  };

  render() {
    return (
      <React.Fragment>
        <ul style={{ display: "flex" }}>
          {this.state.numbers.map( (n, index) => (
            <li
              style={{
                margin: "10px",
                display: "block",
                height: "50px",
                width: "50px",
                border:"1px black solid",
                textAlign:"center"
              }}
              onClick={() => {
                this.updateNumber(index);
              }}
            >
              <span>{n}</span>
              <button onClick={()=>{
                  this.deleteNumber(index)
              }}>Delete</button>
            </li>
          ))}
        </ul>
        <input type="text" value={this.state.newNumber} />
        <button>Add</button>
      </React.Fragment>
    );
  }

  updateNumber = index => {
    // finish this function
  };

  deleteNumber = index => {
      // finish this function
  }
}
