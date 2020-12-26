import React from 'react'

class NumberArray extends React.Component {
    state = {
        numbers:[1, 3, 7, 9, 11],
        newNumber: 0
    }

    render() {
        <React.Fragment>
            <ul style={{display:"flex"}}>
                {this.state.numbers.map(n=>(
                    <li style={{margin:"10px"}}></li>
                ))}
            </ul>

        </React.Fragment>

    }
}