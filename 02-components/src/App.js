import React from "react";
import logo from './logo.svg';
import guitar from './acoustic_guitar.jpg';
import Alert from './Alert';
import CreateParagraph from './CreateParagraph';

function SayHello(props) {
    return (
        <p>Hello {props.name}</p>
    )
}


function ImageFrame(props) {
    return (
        <React.Fragment>
            <img src={props.image} style={{
                border:"1px solid black"
            }}/>
        </React.Fragment>
    )
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
      <ImageFrame image={logo}/>
      <ImageFrame image={guitar}/>
    </React.Fragment>
  );
}

export default App;
