import React from 'react';

class HealthForm extends React.Component {

    state = {
        'fullname': '',
        'weight': null,
        'height': null,
        'gender': 'male',
        'problems': []  
    }

    updateFormField = (event) => {
        this.setState({
            [event.target.name] : event.target.value

        })
  
    }

    updateCheckbox = (event) => {
        let currentValues = this.state[event.target.name];

        // case 1: the value does not exist in currentValues
        // i.e, we should add it to currentValues
        if (! currentValues.includes(event.target.value)) {
            let modifiedValues = [...currentValues, event.target.value];
            this.setState({
                [event.target.name] : modifiedValues
            })
        } else {
            // case 2: the value exists in currentValues
            // i.e, we should remove it from currentValues
            let modifiedValues = currentValues.filter(function(element){
                if (element !== event.target.value) {
                    return true;
                } else {
                    return false;
                }
            })
            this.setState({
                [event.target.name] : modifiedValues
            })
        }
        

     
    }

    // all class-based components require the `render` function
    // it must return JSX
    render() {
        return (
            <React.Fragment>
            <div>
                <label>Full Name:</label>
                <input type="text" name="fullname" value={this.state.fullname} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Weight:</label>
                <input type="text" name="weight" value={this.state.weight} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Height:</label>
                <input type="text" name="height" value={this.state.height} onChange={this.updateFormField}/>
            </div>
            <div>
                <label>Gender:</label>
                <input type="radio" name="gender" value="male" onChange={this.updateFormField} checked={this.state.gender==='male'}/>Male
                <input type="radio" name="gender" value="female" onChange={this.updateFormField} checked={this.state.gender==='female'}/>Female
            </div>
            <div>
                <label>Existing Health Problems:</label>
                <input type="checkbox" name="problems" value="asthma" onChange={this.updateCheckbox}/>Asthma
                <input type="checkbox" name="problems" value="high-blood-pressure" onChange={this.updateCheckbox}/>High Blood pressure
                <input type="checkbox" name="problems" value="knee-pains"onChange={this.updateCheckbox}/>Knee Pains
                <input type="checkbox" name="problems" value="shortsighed" onChange={this.updateCheckbox}/>Shortsightedness                
            </div>


            <button>Submit</button>
            </React.Fragment>
        )
    }
}

export default HealthForm;