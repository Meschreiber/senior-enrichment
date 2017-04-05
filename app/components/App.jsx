import React, {Component} from 'react';

// import campus from './campus';
// import Students from './Students';

export default function App ({ children }) {
  return (
    <div id="app" className="container-fluid">
    <h1>The children should show up here.</h1>
        { children }
    </div>
  );
}
