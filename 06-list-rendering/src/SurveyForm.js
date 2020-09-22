import React from "react";

export default class SurveyForm extends React.Component {
  state = {
    fullname: "",
    email: "",
    gender: "",
    hobbies: [],
    country: "",
    all_genders: [
      {
        value: "M",
        display: "Male"
      },
      {
        value: "F",
        display: "Female"
      },
      {
        value: "U",
        display: "Unspecified"
      }
    ],
    all_hobbies: [
      {
        value: "stamps-collecting",
        display: "Stamps Collecting"
      },
      {
        value: "sleeping",
        display: "Sleeping"
      },
      {
        value: "running",
        display: "Running"
      },
      {
        value: "swimming",
        display: "Swimming"
      }
    ],
    all_countries: [
      {
        value: "sg",
        display: "Singapore"
      },
      {
        value: "ma",
        display: "Malaysia"
      },
      {
        value: "in",
        display: "Indoensia"
      },
      {
        value: "cn",
        display: "China"
      }
    ]
  };

  renderGenders() {
    let final = [];
    for (let g of this.state.all_genders) {
      let jsx = (
        <React.Fragment>
          <input
            type="radio"
            value={g.value}
            name="gender"
            onChange={this.updateField}
          />
          <span>{g.display}</span>
        </React.Fragment>
      );
      final.push(jsx);
    }
    return final;
  }

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
      let modifiedCopy = this.state.hobbies.filter(function(hobby) {
        if (hobby === event.target.value) {
          return false;
        } else {
          return true;
        }
      });

      this.setState({
        hobbies: modifiedCopy
      });
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
          {this.renderGenders()}
        </div>
        <div>
          <label>Hobbies</label>
          {this.state.all_hobbies.map(hobby => {
            return (
              <React.Fragment>
                <input
                  type="checkbox"
                  value={hobby.value}
                  name="hobbies"
                  onChange={this.updateCheckboxes}
                />
                <span>{hobby.display}</span>
              </React.Fragment>
            );
          })}
        </div>
        <div>
          <label>Country</label>
          <select
            name="country"
            onChange={this.updateField}
            value={this.state.country}
          >
            {this.state.all_countries.map(country => {
              return (
                <React.Fragment>
                  <option value={country.value}>{country.display}</option>
                </React.Fragment>
              );
            })}
          </select>
        </div>

        <button>Submit</button>
      </React.Fragment>
    );
  }
}
