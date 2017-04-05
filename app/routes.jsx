import React from 'react';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import axios from 'axios';

import store from './store';

import App from './components/App';
import Campuses from './components/Campuses';
import Students from './components/Students';
import SingleCampus from './components/SingleCampus';
import AddStudent from './components/AddStudent';

import { receiveCampuses, receiveStudents } from './action-creators/index';


const onAppEnter = () => {

  const campuses = axios.get('/api/campus');
  const students = axios.get('/api/students');

  return Promise
    .all([campuses, students])
    .then(responses => responses.map(r => r.data))
    .then(([campuses, students]) => {
      store.dispatch(receiveCampuses(campuses));
      store.dispatch(receiveStudents(students));
    });
};

export default function Root () {
  return (
      <Router history={browserHistory}>
        <Route path="/" component={App} onEnter={onAppEnter}>
        <Route path="api/">
            <Route path="/campuses" component={Campuses}/>
            <Route path="/students" component={Students}/>
          </Route>
          <Route path="/campus/:id" component={SingleCampus}/>
          <Route path="/addStudent" component={AddStudent}/>
          <IndexRedirect to="/"/>
        </Route>
      </Router>
  );
}