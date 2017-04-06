import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import axios from 'axios';
import store from './store';

import App from './components/App';
import CampusesContainer from './containers/CampusesContainer';
import Students from './components/Students';
import SingleCampus from './components/SingleCampus';
import AddStudent from './components/AddStudent';

import { receiveCampuses, receiveStudents } from './action-creators/index';


const onAppEnter = () => {

  const campus = axios.get('/api/campus');
  const students = axios.get('/api/students');

  return Promise
    .all([campus, students])
    .then(responses => responses.map(res => res.data))
    .then(([campus, students]) => {
      // console.log('Campus and student info', campus, students)
      store.dispatch(receiveCampuses(campus));
      store.dispatch(receiveStudents(students));
      // console.log('from index.js', store.getState())
    })
  // .then(done)

};



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <Route path="/campus" component={CampusesContainer} >
        <Route path="/campus/:id" component={SingleCampus} />
      </Route>
      <Route path="/students" component={Students} >

        <Route path="/addStudent" component={AddStudent} />
      </Route>
      <IndexRedirect to="/campus" />
    </Route>
  </Router>,
  document.getElementById('app')
);