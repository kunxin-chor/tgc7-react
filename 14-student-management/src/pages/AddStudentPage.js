import React from "react";
import StudentContext from "../context/StudentContext";

class AddStudentPage extends React.Component {
  static contextType = StudentContext;

  state = {
    firstName: "",
    lastName: "",
    graduated: false
  };

  updateFormField = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleCheckbox = event => {
    this.setState({
      [event.target.name]: !this.state[event.target.name]
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>Add New Student</h1>
        <div>
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={this.state.firstName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={this.state.lastName}
            onChange={this.updateFormField}
          />
        </div>
        <div>
          <label className="form-label">Graduated</label>
          <input
            type="checkbox"
            name="graduated"
            className="ml-3"
            value={this.state.graduated}
            onChange={this.toggleCheckbox}
          />
        </div>
        <button className="btn btn-primary" onClick={()=>{
            this.context.addStudent(this.state);
            this.props.history.push('/');
        }}>Add</button>
      </React.Fragment>
    );
  }
}

export default AddStudentPage;
