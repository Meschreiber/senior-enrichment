// Displays all students, their id, and campus plus a delete student button
import React from 'react';

export default function Students(props) {
    const students = props.students
    const deleteStudent = props.delete

    return (
        <div>
        <h2>Meet our students!</h2>
        <table className='table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Campus</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    students && students.map(student => (
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.campus}</td>
                            <td>
                                <button className="btn btn-default btn-xs" onClick={() => deleteStudent(student)}>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )}