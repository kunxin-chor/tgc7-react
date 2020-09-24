import React from "react";
import StudentListing from "./StudentListing";
import StudentContext from "./contexts/StudentContext";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  state = {
    students: [
      {
        studentNumber: 1,
        firstName: "Alan",
        lastName: "Tan",
        gender: "M",
        graduated: false
      },
      {
        studentNumber: 2,
        firstName: "Mike",
        lastName: "Yeo",
        gender: "M",
        graduated: true
      },
      {
        studentNumber: 3,
        firstName: "Cindy",
        lastName: "Ng",
        gender: "F",
        graduated: false
      }
    ]
  };

  render() {
    const controller = {
      getStudents: () => {
        return this.state.students;
      },
      addStudent: (student) => {
          student.studentNumber = Math.floor(Math.random() * 10000 + 9999);
          this.setState({
              'students': [...this.state.students, student]
          })
      },
      deleteStudent: (studentNumberToDelete) => {
          let index = this.state.students.findIndex( s => s.studentNumber === studentNumberToDelete);
          /*
            let index = this.state.students.findIndex( s => {
                if (s.studentNumber === studentNumberToDelete) {
                    return true;
                } else {
                    return false;
                }
            })
          */

          let modifiedCopy = [ ...this.state.students.slice(0, index),
                               ...this.state.students.slice(index+1)];

          this.setState({
              'students': modifiedCopy
          })
      }
    };

    return (
      <React.Fragment>
        <div className="container">
          <StudentContext.Provider value={controller}>
            <StudentListing />
          </StudentContext.Provider>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
