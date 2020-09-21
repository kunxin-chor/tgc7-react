// We are using the React object from the 'react' package
import React from 'react'
import chickenRice from './basil_chicken_rice.jpg';
import './styles.css'

function App() {
    return (
        <React.Fragment>
            <h1 style={{
                backgroundColor: 'yellow',
                fontStyle: 'Verdana'
            }}>Hello World 2</h1>
            <p className="important">Today is Monday</p>
            <img src={chickenRice}/>
            <img src={require('./bubble-tea.jpg')}/>
        </React.Fragment>
    )
}

export default App;