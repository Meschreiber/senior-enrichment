// import { combineReducers } from 'redux'
import { RECEIVE_CAMPUSES, RECEIVE_STUDENTS } from '../action-creators/index'
const initialState = { campuses: [], students: [] }

const rootReducer = function (state = initialState, action) {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CAMPUSES:
      newState.campuses = action.campuses;
      break;

    case RECEIVE_STUDENTS:
      newState.students = action.students;
      break;

    default: return state;
  }
  return newState;
};

export default rootReducer
