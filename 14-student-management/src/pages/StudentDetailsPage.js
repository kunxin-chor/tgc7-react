import React, {useContext} from 'react';
import StudentContext from '../context/StudentContext';
import { useRouteMatch  } from 'react-router-dom';


export default function StudentDetailsPage(props) {
    const match = useRouteMatch ();
    let studentid = match.params.studentid;

    const context = useContext(StudentContext);
    let student = context.findStudentByID(parseInt(studentid));

    return (<React.Fragment>
            <h1>Details for {student.firstName} {student.lastName}</h1>
        </React.Fragment>
    )
}

