// There will be basic campus information
// A list of students enrolled each linked to their single student page/also edit page

import React from 'react';
import { Link } from 'react-router';

export default function SingleCampus(props) {

    const campus = props.campus;
    // will eventually have to filter based on the campus
    const students = props.students;

    return (
        <div>
            <div>
                <h3>{campus.name}</h3>
                <div>
                    <img src={campus.imageUrl} className="img-thumbnail" />
                    <span>{campus.blurb}</span>
                </div>
            </div>
            {
                students.map(student => (
                    <div className="list-group-item" key={student.id}>
                        <Link to={`/students/${student.id}`}>{student.name}</Link>
                    </div>
                ))
            }
        </div>
    );
}