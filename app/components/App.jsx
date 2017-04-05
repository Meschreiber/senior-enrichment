import React, {Component} from 'react';

// import Campuses from './Campuses';
// import Students from './Students';

export default function App ({ children }) {
  return (
    <div id="main" className="container-fluid">
        { children }
    </div>
  );
}
