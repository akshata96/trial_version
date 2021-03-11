import React from 'react'
import './App.css';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

import Homepage  from '../src/Pages/Homepage/HomePage'
import login  from '../src/Pages/Login/login'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <header className="App-header">
      <Route 
        exact 
        path = {"/Homepage"} 
        render = {props =>(
         <Homepage />
        )}
        />
        <Route 
        exact 
        path = {"/login"} 
        render = {props =>(
         <login />
        )}
        />

      </header>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
