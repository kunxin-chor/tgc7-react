import React from "react";
import Alert from "./Alert"

class App extends React.Component {
  
  state = {
      'color': 'red',
      'display':false,
      'message':''
  }

  displayMessage = () => {
    this.setState({
        'display': true,
        'message': 'Hello world'
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
            <h1>My webpage</h1>
            <Alert message={this.state.message} 
                   display={this.state.display}
                   done={()=>{
                       this.setState({
                           'display': false
                       })
                   }}
            ></Alert>
            <button onClick={this.displayMessage}>Display</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
