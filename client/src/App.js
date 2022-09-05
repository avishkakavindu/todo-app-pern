import React, { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// components
import InputTodo from './components/InputTodo';
import ListTodo from './components/ListTodo';

function App() {
  /* A common pattern in React is for a component to return multiple elements.
   Fragments let you group a list of children without adding extra nodes to the DOM. 
   */
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
