import React from "react";

function sayHello() {
    return "Hi there";
}

function createParagraph() {
    return (
        <React.Fragment>
        <h2>This is a header</h2>
        <p>This is a paragraph</p>
        </React.Fragment>
    );
}

function App() {
  let name = "Paul";
  return (
    <React.Fragment>
      <h1>Hello {name}</h1>
      {sayHello()}
      {createParagraph()}
    </React.Fragment>
  );
}

export default App;
