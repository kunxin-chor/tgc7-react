import React from "react";

function SayHello() {
    return (
        <p>Hello there</p>
    )
}

function CreateParagraph() {
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
      <SayHello/>
      <CreateParagraph/>
    </React.Fragment>
  );
}

export default App;
