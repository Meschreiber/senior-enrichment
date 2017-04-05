import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect, IndexRoute } from 'react-router';
import axios from 'axios';
import store from './store';

import App from './components/App';
import campus from './components/campus';
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
      store.dispatch(receiveCampuses(campus));
      store.dispatch(receiveStudents(students));
    });
};



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <Route path="/campus" component={campus} />
      {/*<Route path="/students" component={Students} />
      <Route path="/campus/:id" component={SingleCampus} />
      <Route path="/addStudent" component={AddStudent} />*/}
      <IndexRedirect to="/campus" />
    </Route>
  </Router>,
  document.getElementById('app')
);