import React, { useContext } from "react";
import StudentContext from "../context/StudentContext";
import {Link} from "react-router-dom";

function StudentListingPage() {
  const context = useContext(StudentContext);
  return (
    <React.Fragment>
      <h1>Student Listing Page</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Student Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Graduated</th>
          </tr>
        </thead>
        {context.getStudents().map(s => (
          <React.Fragment>
            <tr>
              <td>{s.studentNumber}</td>
              <td><Link to={"/student/" + s.studentNumber}>{s.firstName}</Link></td>
              <td>{s.lastName}</td>
              <td>{s.graduated ? "Graduated" : "Not graduated"}</td>
            </tr>
          </React.Fragment>
        ))}
      </table>
    </React.Fragment>
  );
}

export default StudentListingPage;
