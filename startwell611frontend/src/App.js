import React from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage  from '../src/Pages/HomePage/HomePage'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <Route 
        exact 
        path = {"/HomePage"} 
        render = {props =>(
         <HomePage />
        )}
        />
      </header>
      </Router>
    </div>
  );
}

export default App;
