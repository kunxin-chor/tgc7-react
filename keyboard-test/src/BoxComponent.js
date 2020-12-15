import React from "react"

export default class BoxComponent extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.keyIsDown){
            console.log("I detect my key is down -- " + this.props.name)
        }
    }
    
    render() {
        return (<div>
            Hello
        </div>)
    }



}