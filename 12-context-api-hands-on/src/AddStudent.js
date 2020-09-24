import React from "react";
import StudentContext from "./contexts/StudentContext"

export default class AddStudent extends React.Component {

  static contextType = StudentContext;

  state = {
    firstName: "",
    lastName: "",
    gender: "",
    graduated: false
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  displayGenderError() {
    if (
      this.state.gender !== "" &&
      this.state.gender.toLowerCase() !== "m" &&
      this.state.gender.toLowerCase() !== "f"
    ) {
      console.log("error detected");
      return (
        <div className="invalid-feedback">
          Please enter M for male or F for female
        </div>
      );
    } else {
      return null;
    }
  }

  updateWithErrorClass() {
    if (
      this.state.gender !== "" &&
      this.state.gender.toLowerCase() !== "m" &&
      this.state.gender.toLowerCase() !== "f"
    ) {
      return "form-control is-invalid";
    } else {
      return "form-control";
    }
  }

  toggleCheckbox = (event) => {
      this.setState({
        [event.target.name] : !this.state[event.target.name]
      })
  }

  addStudent = (event) => {
    this.context.addStudent(this.state)
  }

  render() {
    return (
      <React.Fragment>
        <h2>Add New Student</h2>
        <div>
          <label className="form-label">First Name</label>
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            className="form-control"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            className="form-control"
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label className="form-label">Gender</label>
          <input
            type="text"
            value={this.state.gender}
            name="gender"
            className={this.updateWithErrorClass()}
            onChange={this.updateFormField}
          />
          {this.displayGenderError()}
          {/* {this.state.gender.toLowerCase() != "m" &&
          this.state.gender.toLowerCase() != "f" ? (
            <div className="invalid-feedback">
              Please enter M for male or F for female
            </div>
          ) : null} */}
        </div>
        <div>
          <label className="form-label">Graduated</label>
          <input
            type="checkbox"
            value={this.state.graduated}
            name="graduated"
            className="form-check"
            onChange={this.toggleCheckbox}
          />
        </div>
        <button className="btn btn-primary" onClick={this.addStudent}>Create</button>
      </React.Fragment>
    );
  }
}
