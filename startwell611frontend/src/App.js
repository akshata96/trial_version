import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Homepage  from '../src/Pages/Homepage/HomePage'
import login  from '../src/Pages/Login/login'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <Route 
        exact 
        path = {"/Homepage"} 
        render = {props =>(
         <Homepage />
        )}
        />
      </header>
      </Router>
    </div>
  );
}

export default App;
