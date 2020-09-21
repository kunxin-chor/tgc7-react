import React from "react";

export default class SurveyForm extends React.Component {
  state = {
    fullname: "",
    email: "",
    gender: "",
    hobbies: [],
    country: ""
  };

  updateField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  updateCheckboxes = event => {
    if (!this.state.hobbies.includes(event.target.value)) {
      // 1. make a copy of the array from the state
      // 2. and modify at the same time
      let modifiedCopy = [...this.state.hobbies, event.target.value];

      // 2. modify the copy
      //    modifiedCopy.push(event.target.value)

      // 3. replace the array in the state with the modified copy
      this.setState({
        hobbies: modifiedCopy
      });
    } else {
        
        let modifiedCopy = this.state.hobbies.filter(function(hobby){
            if (hobby == event.target.value) {
                return false;
            } else {
                return true;
            }
        })

        this.setState({
            hobbies: modifiedCopy
        })
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.updateField}
          />
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            value="M"
            name="gender"
            onChange={this.updateField}
          />
          Male
          <input
            type="radio"
            value="F"
            name="gender"
            onChange={this.updateField}
          />
          Female
          <input
            type="radio"
            value="U"
            name="gender"
            onChange={this.updateField}
          />
          Unspecified
        </div>
        <div>
          <label>Hobbies</label>
          <input
            type="checkbox"
            value="stamps-collecting"
            name="hobbies"
            onChange={this.updateCheckboxes}
          />
          Stamp Collecting
          <input
            type="checkbox"
            value="cycling"
            name="hobbies"
            onChange={this.updateCheckboxes}
          />
          Cycling
          <input
            type="checkbox"
            value="swimming"
            name="hobbies"
            onChange={this.updateCheckboxes}
          />
          Swimming
          <input
            type="checkbox"
            value="sleeping"
            name="hobbies"
            onChange={this.updateCheckboxes}
          />
          Sleeping
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            onChange={this.updateField}
            value={this.state.country}
          >
            <option value="singapore">Singapore</option>
            <option value="malaysia">Malaysia</option>
            <option value="indonesia">Indonesia</option>
          </select>
        </div>

        <button>Submit</button>
      </React.Fragment>
    );
  }
}
