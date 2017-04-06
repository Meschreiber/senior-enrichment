// CONSTANTS
export const RECEIVE_CAMPUSES = 'RECEIVE_CAMPUSES';
export const RECEIVE_STUDENTS = 'RECEIVE_STUDENTS';

// ACTIONS
export const receiveCampuses = campuses => ({
    type: RECEIVE_CAMPUSES,
    campuses
});

export const receiveStudents = students => ({
    type: RECEIVE_STUDENTS,
    students
});



// export const getStudentsByCampus 