import React from "react";
import axios from "axios";
import StudentContext from "./context/StudentContext";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Pages
import StudentListingPage from "./pages/StudentListingPage";
import AddStudentPage from "./pages/AddStudentPage";
import StudentDetailsPage from "./pages/StudentDetailsPage";

class App extends React.Component {
  state = {
    students: []
  };

  async componentDidMount() {
    let r = await axios.get("data/students.json");
    this.setState({
      students: r.data
    });
  }

  render() {
    let repo = {
      getStudents: () => {
        return this.state.students;
      },
      addStudent: (student) => {
          student.studentNumber = Math.floor(Math.random() * 10000 + 9999);
          this.setState({
              students:[...this.state.students, student]
          })
      },
      findStudentByID: studentid => this.state.students.find(s => s.studentNumber === studentid)
      
    };
    return (
      <React.Fragment>
        <StudentContext.Provider value={repo}>
          <Router>
            <div class="container">
              <Switch>
                <Route exact path="/">
                  <StudentListingPage />
                </Route>
                <Route path="/add" render={
                    (props) => <AddStudentPage {...props}/>
                }>
                </Route>
                <Route path="/student/:studentid">
                    <StudentDetailsPage/>
                </Route>

              </Switch>
            </div>
          </Router>
        </StudentContext.Provider>
      </React.Fragment>
    );
  }
}

export default App;
