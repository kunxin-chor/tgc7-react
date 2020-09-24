import React, { useContext } from "react";
import StudentContext from "./contexts/StudentContext";
import AddStudent from "./AddStudent";

function StudentListing() {
  const controller = useContext(StudentContext);
  const students = controller.getStudents();

  let deleteStudent = function(student) {
    controller.deleteStudent(student.studentNumber);
  };

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th>Student Number</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Graduated</th>
            <th></th>
          </tr>
        </thead>
        {students.length > 0 ? (
          students.map(s => (
            <tr>
              <td>{s.studentNumber}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.gender}</td>
              <td>
                {s.graduated ? (
                  <span>Graduated</span>
                ) : (
                  <span>Not Graduated</span>
                )}
              </td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => {
                    deleteStudent(s);
                    /*  controller.deleteStudent(student.studentNumber); */
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colspan={5}>There are no students</td>
          </tr>
        )}
      </table>
      <p>Number of students: {students.length}</p>
      <AddStudent />
    </React.Fragment>
  );
}

export default StudentListing;
