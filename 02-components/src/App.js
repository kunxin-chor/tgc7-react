import React from "react";
import logo from './logo.svg'

function Alert(props) {
    return (
        <React.Fragment>
        <div style={{
            backgroundColor:props.bgcolor
        }}>
            {props.message}
        </div>
        </React.Fragment>
    )
}

function SayHello(props) {
    return (
        <p>Hello {props.name}</p>
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
  let message="Long long ago in the southern province of China";
  return (
    <React.Fragment>
      <Alert message="warning this will delete all your files" bgcolor="red"/>
      <h1>Hello {name}</h1>
      <SayHello name="Paul"/>
      <CreateParagraph/>
      <Alert message="Everything's fine now" bgcolor="green"/>
      <Alert message={message} bgcolor="yellow"/>

    </React.Fragment>
  );
}

export default App;
